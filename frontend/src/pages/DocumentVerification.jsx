
import React, { useEffect, useRef, useState } from "react";
import {
  FileCheck2,
  UploadCloud,
  ShieldCheck,
  AlertTriangle,
  LoaderCircle,
  RotateCcw,
  FileText,
  CheckCircle2,
  XCircle,
  Eye,
  ArrowRight,
} from "lucide-react";
import Tesseract from "tesseract.js";

// Uses existing document-verification styles in src/index.css.

const TYPES = [
  ["income", "Income Certificate"],
  ["pan", "PAN Card"],
  ["aadhaar", "Masked Aadhaar Card"],
  ["caste", "Caste Certificate"],
  ["domicile", "Domicile Certificate"],
  ["business", "Business Registration"],
  ["education", "Educational Certificate"],
];

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED = ["image/jpeg", "image/png", "image/webp"];

const PAN = /\b[A-Z]{5}[0-9]{4}[A-Z]\b/g;
const FULL_AADHAAR = /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g;
const MASKED_AADHAAR = /(?:[Xx*]{4}[\s-]?){2}\d{4}/;
const VID = /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g;

function redact(text) {
  return String(text || "")
    .replace(VID, "[16-digit identifier hidden]")
    .replace(FULL_AADHAAR, (s) =>
      `XXXX XXXX ${s.replace(/\D/g, "").slice(-4)}`
    )
    .replace(PAN, (s) =>
      `${s.slice(0, 2)}***${s.slice(5, 7)}***`
    );
}

function check(label, ok, explanation) {
  return { label, ok, explanation };
}

function analyze(type, raw, incomeLimit) {
  const text = String(raw || "").replace(/\s+/g, " ").trim();
  const upper = text.toUpperCase();
  const checks = [];
  const notes = [];
  const fields = [];

  if (text.length < 20) {
    return {
      status: "unreadable",
      checks: [
        check("Readable text", false, "Not enough text detected"),
      ],
      notes: ["Try a clear, well-lit image."],
      fields: [],
    };
  }

  checks.push(
    check("Readable text", true, "OCR extracted readable characters")
  );

  const patterns = {
    aadhaar:
      /aadhaar|aadhar|आधार|uidai|unique identification|government of india|भारत सरकार/i,
    pan:
      /income tax|permanent account|आयकर|पैन|PAN\b/i,
    income:
      /income certificate|annual income|family income|उत्पन्न|आय प्रमाण|income/i,
    caste:
      /caste|जात|जाति|scheduled caste|scheduled tribe|\bOBC\b/i,
    domicile:
      /domicile|residen(?:t|ce)|अधिवास|रहिवासी|निवास/i,
    business:
      /udyam|registration|gstin|enterprise|business|नोंदणी|पंजीकरण/i,
    education:
      /university|college|school|marksheet|education|विद्यालय|विद्यापीठ|शिक्षण/i,
  };

  const typeFound = patterns[type].test(text);

  checks.push(
    check(
      "Document type keywords",
      typeFound,
      typeFound
        ? "Expected keywords detected"
        : "Expected keywords not detected"
    )
  );

  if (type === "aadhaar") {
    const masked = MASKED_AADHAAR.test(text);
    const full = FULL_AADHAAR.test(text);

    checks.push(
      check(
        "Masked Aadhaar format",
        masked,
        masked
          ? "Masked number pattern found"
          : "Masked number pattern not found"
      )
    );

    if (full) {
      notes.push(
        "A full 12-digit number may be present. Do not share the original image or extracted text."
      );
    }

    if (!masked) {
      notes.push(
        "For safety, use a masked Aadhaar image (XXXX XXXX 1234)."
      );
    }

    const dob = text.match(
      /\b(?:0?[1-9]|[12]\d|3[01])[/-](?:0?[1-9]|1[0-2])[/-](?:19|20)\d{2}\b/
    );

    if (dob) {
      fields.push({
        label: "Date detected",
        value: dob[0],
      });
    }

    const gender = text.match(
      /\b(?:male|female|other)\b|महिला|पुरुष|स्त्री/i
    );

    if (gender) {
      fields.push({
        label: "Gender detected",
        value: gender[0],
      });
    }
  } else if (type === "pan") {
    const match = upper.match(PAN);

    checks.push(
      check(
        "PAN format",
        Boolean(match),
        match
          ? "PAN-like pattern found; validity not confirmed"
          : "PAN pattern not detected"
      )
    );

    if (match) {
      fields.push({
        label: "PAN (hidden)",
        value: redact(match[0]),
      });
    }
  } else if (type === "income") {
    const match = text.match(
      /(?:annual\s+(?:family\s+)?income|yearly\s+income|income|उत्पन्न|आय)[^\d₹]{0,45}(?:₹|rs\.?|inr)?\s*([\d,]{3,12})/i
    );

    const amount = match
      ? Number(match[1].replace(/,/g, ""))
      : null;

    const found = Number.isFinite(amount) && amount > 0;

    checks.push(
      check(
        "Annual income amount",
        found,
        found
          ? "Possible amount detected"
          : "Amount not confidently detected"
      )
    );

    if (found) {
      fields.push({
        label: "Possible annual income",
        value: `₹${amount.toLocaleString("en-IN")}`,
      });

      const limit = Number(incomeLimit);

      if (
        incomeLimit !== "" &&
        Number.isFinite(limit) &&
        limit > 0
      ) {
        checks.push(
          check(
            "Entered income limit",
            amount <= limit,
            amount <= limit
              ? "Extracted amount is within the entered limit"
              : "Extracted amount exceeds the entered limit"
          )
        );
      }
    }
  } else {
    notes.push(
      "Document numbers, signatures, seals and issuer records have not been authenticated."
    );
  }

  const passes = checks.filter((c) => c.ok).length;
  const status =
    passes === checks.length ? "matched" : "needs-review";

  return { status, checks, notes, fields };
}

export default function DocumentVerification() {
  const [type, setType] = useState("income");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [incomeLimit, setIncomeLimit] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [showText, setShowText] = useState(false);

  const inputRef = useRef(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!file) {
      setPreview("");
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  function chooseFile(next) {
    setError("");
    setResult(null);
    setShowText(false);

    if (!next) return;

    if (!ALLOWED.includes(next.type)) {
      setError("Only JPG, PNG and WebP images are supported.");
      setFile(null);
      return;
    }

    if (next.size > MAX_BYTES) {
      setError("Maximum image size is 5 MB.");
      setFile(null);
      return;
    }

    setFile(next);
  }

  function reset() {
    setFile(null);
    setType("income");
    setIncomeLimit("");
    setResult(null);
    setError("");
    setProgress(0);
    setShowText(false);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function verify() {
    if (!file || loading) return;

    setLoading(true);
    setError("");
    setResult(null);
    setProgress(0);

    try {
      const response = await Tesseract.recognize(
        file,
        "eng+hin+mar",
        {
          logger: (m) => {
            if (
              mounted.current &&
              m.status === "recognizing text"
            ) {
              setProgress(
                Math.round((m.progress || 0) * 100)
              );
            }
          },
        }
      );

      const raw = response.data?.text || "";
      const confidence = Number(response.data?.confidence);
      const analysis = analyze(type, raw, incomeLimit);

      if (mounted.current) {
        setResult({
          ...analysis,
          confidence: Number.isFinite(confidence)
            ? Math.round(
                Math.max(0, Math.min(100, confidence))
              )
            : null,
          extractedText: redact(raw),
          name: file.name,
          type:
            TYPES.find(([value]) => value === type)?.[1] ||
            type,
        });
      }
    } catch (e) {
      console.error("Document OCR error:", e);

      if (mounted.current) {
        setError(
          "OCR could not read the image. Try a clearer image and check your internet connection."
        );
      }
    } finally {
      if (mounted.current) {
        setLoading(false);
      }
    }
  }

  return (
    <main className="dv-page">
      <div className="dv-container">
        <section className="dv-hero">
          <div className="dv-hero-icon">
            <ShieldCheck size={35} />
          </div>

          <span className="dv-badge">
            AI-Assisted Document Analysis
          </span>

          <h1>Document Verification</h1>

          <p>
            Read document details and check basic formats
            before applying for government schemes.
            This is not official authenticity verification.
          </p>

          <div className="dv-hero-features">
            <span>
              <CheckCircle2 size={16} />
              OCR Analysis
            </span>
            <span>
              <CheckCircle2 size={16} />
              Field Checks
            </span>
            <span>
              <CheckCircle2 size={16} />
              Privacy-Safe Report
            </span>
          </div>
        </section>

        <section className="dv-card">
          <div className="dv-section-title">
            <div className="dv-section-icon">
              <FileText size={23} />
            </div>

            <div>
              <small>STEP 01</small>
              <h2>Upload Your Document</h2>
            </div>
          </div>

          <div className="dv-field">
            <label htmlFor="dv-document-type">
              Select Document Type
            </label>

            <select
              id="dv-document-type"
              value={type}
              disabled={loading}
              onChange={(e) => {
                setType(e.target.value);
                setResult(null);
              }}
            >
              {TYPES.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {type === "income" && (
            <div className="dv-field">
              <label htmlFor="dv-income-limit">
                Scheme Annual Income Limit (₹) — Optional
              </label>

              <input
                id="dv-income-limit"
                type="number"
                min="1"
                placeholder="Example: 300000"
                value={incomeLimit}
                disabled={loading}
                onChange={(e) => {
                  setIncomeLimit(e.target.value);
                  setResult(null);
                }}
              />

              <small>
                Enter a limit from the official scheme rules,
                if known.
              </small>
            </div>
          )}

          <div
            className="dv-upload-area"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();

              if (!loading) {
                chooseFile(e.dataTransfer.files[0]);
              }
            }}
          >
            <input
              id="dv-file-input"
              ref={inputRef}
              type="file"
              accept=".jpg,.jpeg,.png,.webp"
              disabled={loading}
              hidden
              onChange={(e) =>
                chooseFile(e.target.files[0])
              }
            />

            {preview ? (
              <>
                <img
                  className="dv-preview"
                  src={preview}
                  alt="Selected document preview"
                />

                <strong>{file?.name}</strong>

                <p>
                  {(file.size / 1048576).toFixed(2)} MB
                </p>
              </>
            ) : (
              <>
                <UploadCloud size={45} />

                <h3>Upload Document</h3>

                <p>
                  Drag and drop an image or choose a file.
                </p>
              </>
            )}

            <label
              className={`dv-upload-button ${
                loading ? "dv-disabled" : ""
              }`}
              htmlFor="dv-file-input"
            >
              <UploadCloud size={17} />

              {file
                ? "Change Document"
                : "Choose Document"}
            </label>

            <small>
              JPG, PNG or WebP · Maximum 5 MB
            </small>
          </div>

          {type === "aadhaar" && (
            <div className="dv-alert">
              <AlertTriangle size={18} />
              Upload only a masked Aadhaar image.
              Never share your full Aadhaar or VID.
            </div>
          )}

          {error && (
            <div className="dv-error">
              <XCircle size={18} />
              {error}
            </div>
          )}

          <div className="dv-actions">
            <button
              type="button"
              className="dv-reset-button"
              disabled={loading}
              onClick={reset}
            >
              <RotateCcw size={17} />
              Reset
            </button>

            <button
              type="button"
              className="dv-verify-button"
              disabled={!file || loading}
              onClick={verify}
            >
              {loading ? (
                <>
                  <LoaderCircle
                    size={18}
                    className="dv-spinner"
                  />
                  Analyzing... {progress}%
                </>
              ) : (
                <>
                  <ShieldCheck size={19} />
                  Analyze Document
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </div>

          {loading && (
            <div className="dv-progress-wrapper">
              <div className="dv-progress-track">
                <div
                  className="dv-progress-fill"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <small>
                Reading text. This may take a moment.
              </small>
            </div>
          )}
        </section>

        {result && (
          <section className="dv-report">
            <div className="dv-section-title">
              <div className="dv-section-icon">
                <FileCheck2 size={24} />
              </div>

              <div>
                <small>STEP 02</small>
                <h2>Document Analysis Report</h2>
              </div>
            </div>

            <div
              className={`dv-status dv-${result.status}`}
            >
              {result.status === "matched" ? (
                <CheckCircle2 size={25} />
              ) : (
                <AlertTriangle size={25} />
              )}

              <div>
                <strong>
                  {result.status === "matched"
                    ? "Basic Checks Passed — Not Officially Verified"
                    : result.status === "unreadable"
                    ? "Unable to Read"
                    : "Needs Manual Review"}
                </strong>

                <p>
                  Preliminary OCR-based assessment only
                </p>
              </div>
            </div>

            <div className="dv-report-info">
              <div>
                <span>Document Type</span>
                <strong>{result.type}</strong>
              </div>

              <div>
                <span>File Name</span>
                <strong>{result.name}</strong>
              </div>
            </div>

            <div className="dv-findings">
              <h3>
                <Eye size={19} />
                OCR Confidence
              </h3>

              <p>
                <strong style={{ fontSize: "24px" }}>
                  {result.confidence === null
                    ? "Unavailable"
                    : `${result.confidence}%`}
                </strong>
              </p>

              <p>
                Confidence measures how confidently OCR
                recognized text. It does NOT measure
                whether this document is genuine.
              </p>

              {result.confidence !== null &&
                result.confidence < 60 && (
                  <p>
                    Low OCR confidence: retake the image
                    with better lighting and focus.
                  </p>
                )}
            </div>

            <div className="dv-findings">
              <h3>
                <CheckCircle2 size={19} />
                Field-by-Field Checks
              </h3>

              {result.checks.map((item, i) => (
                <p
                  key={i}
                  style={{
                    color: item.ok
                      ? "#247a49"
                      : "#a16207",
                  }}
                >
                  {item.ok ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    <AlertTriangle size={16} />
                  )}

                  <span>
                    <strong>{item.label}:</strong>{" "}
                    {item.explanation}
                  </span>
                </p>
              ))}

              {result.fields.map((item, i) => (
                <p key={`field-${i}`}>
                  <FileText size={16} />

                  <span>
                    <strong>{item.label}:</strong>{" "}
                    {item.value}
                  </span>
                </p>
              ))}
            </div>

            <div className="dv-warnings">
              <h3>
                <AlertTriangle size={19} />
                Important Notes
              </h3>

              {result.notes.map((note, i) => (
                <p key={i}>
                  <AlertTriangle size={15} />
                  {note}
                </p>
              ))}

              <p>
                <AlertTriangle size={15} />
                Official database authentication,
                issuer validation and fake-document
                detection are not connected.
              </p>
            </div>

            <button
              type="button"
              className="dv-text-toggle"
              onClick={() =>
                setShowText((v) => !v)
              }
            >
              <Eye size={17} />

              {showText
                ? "Hide Extracted Text"
                : "View Redacted Extracted Text"}
            </button>

            {showText && (
              <div className="dv-extracted-text">
                <h4>
                  OCR Text (Sensitive Numbers Hidden)
                </h4>

                <pre>
                  {result.extractedText ||
                    "No readable text found."}
                </pre>
              </div>
            )}

            <div className="dv-disclaimer">
              <ShieldCheck size={20} />

              <p>
                <strong>
                  Privacy and accuracy:
                </strong>{" "}
                OCR runs in your browser using
                Tesseract.js. The app does not
                intentionally upload document images
                to a custom backend, but OCR language
                resources may download over the network.
                Do not use real sensitive documents
                for demos. A passing result is not
                proof of authenticity or eligibility.
              </p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
