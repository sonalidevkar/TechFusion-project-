
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

const translations = {
  en: {
    back: "← Back to Home",
    tag: "YOUR VOICE MATTERS",
    title: "YojanaSathi AI Feedback",
    subtitle: "Help us improve your government scheme discovery experience.",
    progress: "Survey Progress",
    completed: "Completed",
    ratingQuestion: "How would you rate your overall experience?",
    ratingLabels: [
      "Select a rating",
      "Poor",
      "Fair",
      "Good",
      "Very Good",
      "Excellent",
    ],
    suggestions: "Additional Suggestions (Optional)",
    placeholder: "Tell us how we can improve YojanaSathi AI...",
    submit: "Submit Feedback",
    required: "Please answer all 5 questions and select a star rating.",
    thanks: "Thank You!",
    success: "Your feedback has been saved successfully.",
    message: "Your opinion helps us improve YojanaSathi AI.",
    home: "Back to Home",
    questions: [
      {
        title: "How easy was it to use YojanaSathi AI?",
        options: ["Very Easy", "Easy", "Average", "Difficult"],
      },
      {
        title: "Were the recommended schemes relevant to your needs?",
        options: [
          "Very Relevant",
          "Relevant",
          "Somewhat Relevant",
          "Not Relevant",
        ],
      },
      {
        title: "Was the eligibility information easy to understand?",
        options: ["Very Clear", "Clear", "Average", "Confusing"],
      },
      {
        title: "Which feature did you find most useful?",
        options: [
          "AI Scheme Matching",
          "Eligibility Checker",
          "EMI Calculator",
          "Partner Locator",
        ],
      },
      {
        title: "Would you recommend YojanaSathi AI to others?",
        options: ["Definitely", "Probably", "Not Sure", "No"],
      },
    ],
  },

  hi: {
    back: "← होम पर वापस जाएं",
    tag: "आपकी राय महत्वपूर्ण है",
    title: "योजनासाथी एआई फीडबैक",
    subtitle: "सरकारी योजनाओं को खोजने का अनुभव बेहतर बनाने में हमारी मदद करें।",
    progress: "सर्वेक्षण प्रगति",
    completed: "पूर्ण",
    ratingQuestion: "आप अपने अनुभव को कितनी रेटिंग देंगे?",
    ratingLabels: [
      "रेटिंग चुनें",
      "खराब",
      "ठीक",
      "अच्छा",
      "बहुत अच्छा",
      "उत्कृष्ट",
    ],
    suggestions: "अतिरिक्त सुझाव (वैकल्पिक)",
    placeholder: "हम योजनासाथी एआई को कैसे बेहतर बना सकते हैं?",
    submit: "फीडबैक जमा करें",
    required: "कृपया सभी 5 प्रश्नों के उत्तर दें और रेटिंग चुनें।",
    thanks: "धन्यवाद!",
    success: "आपका फीडबैक सफलतापूर्वक सेव हो गया है।",
    message: "आपकी राय योजनासाथी एआई को बेहतर बनाने में मदद करती है।",
    home: "होम पर वापस जाएं",
    questions: [
      {
        title: "योजनासाथी एआई का उपयोग करना कितना आसान था?",
        options: ["बहुत आसान", "आसान", "सामान्य", "कठिन"],
      },
      {
        title: "क्या सुझाई गई योजनाएं आपकी जरूरतों के अनुसार थीं?",
        options: ["बहुत उपयोगी", "उपयोगी", "कुछ हद तक", "उपयोगी नहीं"],
      },
      {
        title: "क्या पात्रता की जानकारी समझना आसान था?",
        options: ["बहुत स्पष्ट", "स्पष्ट", "सामान्य", "समझना कठिन"],
      },
      {
        title: "आपको कौन सा फीचर सबसे उपयोगी लगा?",
        options: [
          "एआई योजना मिलान",
          "पात्रता जांच",
          "ईएमआई कैलकुलेटर",
          "पार्टनर लोकेटर",
        ],
      },
      {
        title: "क्या आप दूसरों को योजनासाथी एआई की सलाह देंगे?",
        options: ["निश्चित रूप से", "शायद", "पता नहीं", "नहीं"],
      },
    ],
  },

  mr: {
    back: "← मुख्यपृष्ठावर परत जा",
    tag: "तुमचे मत महत्त्वाचे आहे",
    title: "योजनासाथी एआय अभिप्राय",
    subtitle: "सरकारी योजना शोधण्याचा अनुभव सुधारण्यासाठी आम्हाला मदत करा.",
    progress: "सर्वेक्षण प्रगती",
    completed: "पूर्ण",
    ratingQuestion: "तुमच्या एकूण अनुभवाला किती रेटिंग द्याल?",
    ratingLabels: [
      "रेटिंग निवडा",
      "खराब",
      "ठीक",
      "चांगले",
      "खूप चांगले",
      "उत्कृष्ट",
    ],
    suggestions: "अतिरिक्त सूचना (ऐच्छिक)",
    placeholder: "योजनासाथी एआयमध्ये कोणत्या सुधारणा हव्या आहेत?",
    submit: "अभिप्राय सबमिट करा",
    required: "कृपया सर्व 5 प्रश्नांची उत्तरे द्या आणि रेटिंग निवडा.",
    thanks: "धन्यवाद!",
    success: "तुमचा अभिप्राय यशस्वीपणे सेव्ह झाला आहे.",
    message: "तुमचे मत योजनासाथी एआय सुधारण्यासाठी मदत करते.",
    home: "मुख्यपृष्ठावर जा",
    questions: [
      {
        title: "योजनासाथी एआय वापरणे किती सोपे होते?",
        options: ["खूप सोपे", "सोपे", "सामान्य", "कठीण"],
      },
      {
        title: "सुचवलेल्या योजना तुमच्या गरजांनुसार होत्या का?",
        options: ["खूप उपयुक्त", "उपयुक्त", "काही प्रमाणात", "उपयुक्त नाही"],
      },
      {
        title: "पात्रतेची माहिती समजण्यास सोपी होती का?",
        options: ["खूप स्पष्ट", "स्पष्ट", "सामान्य", "समजण्यास कठीण"],
      },
      {
        title: "तुम्हाला कोणते फीचर सर्वात उपयुक्त वाटले?",
        options: [
          "एआय योजना मॅचिंग",
          "पात्रता तपासणी",
          "ईएमआय कॅल्क्युलेटर",
          "पार्टनर लोकेटर",
        ],
      },
      {
        title: "तुम्ही इतरांना योजनासाथी एआय वापरण्याचा सल्ला द्याल का?",
        options: ["नक्कीच", "कदाचित", "माहीत नाही", "नाही"],
      },
    ],
  },
};

export default function Feedback() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [answers, setAnswers] = useState({});
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [suggestion, setSuggestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const completed = Object.keys(answers).length;

  const handleAnswer = (questionIndex, optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (completed !== 5 || rating === 0) {
      alert(t.required);
      return;
    }

    const feedback = {
      answers: t.questions.map((question, index) => ({
        question: translations.en.questions[index].title,
        answer:
          translations.en.questions[index].options[
            answers[index]
          ],
      })),
      rating,
      suggestion: suggestion.trim(),
      language,
      submittedAt: new Date().toISOString(),
    };

    try {
      const previous = JSON.parse(
        localStorage.getItem("yojanasatiFeedback") || "[]"
      );

      const feedbackList = Array.isArray(previous)
        ? previous
        : [];

      localStorage.setItem(
        "yojanasatiFeedback",
        JSON.stringify([...feedbackList, feedback])
      );

      setSubmitted(true);
    } catch (error) {
      console.error("Unable to save feedback:", error);
      alert("Unable to save feedback. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="feedback-page">
        <div className="feedback-card success-card">
          <div className="success-icon">✓</div>
          <h1>{t.thanks}</h1>
          <p>{t.success}</p>
          <p>{t.message}</p>

          <Link to="/" className="feedback-btn">
            {t.home}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="feedback-page">
      <div className="feedback-card">
        <div className="feedback-header">
          <Link to="/" className="feature-back">
            {t.back}
          </Link>

          <div style={{ marginTop: "25px" }}>
            <span className="feedback-tag">{t.tag}</span>
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </div>
        </div>

        <div className="feedback-progress">
          <div className="progress-label">
            <span>{t.progress}</span>
            <span>
              {completed}/5 {t.completed}
            </span>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${(completed / 5) * 100}%`,
              }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {t.questions.map((question, index) => (
            <div className="question-card" key={index}>
              <h3>
                <span className="question-number">
                  {index + 1}
                </span>
                {question.title}
              </h3>

              <div className="feedback-options">
                {question.options.map((option, optionIndex) => (
                  <label
                    key={optionIndex}
                    className={
                      answers[index] === optionIndex
                        ? "option selected"
                        : "option"
                    }
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      checked={answers[index] === optionIndex}
                      onChange={() =>
                        handleAnswer(index, optionIndex)
                      }
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="question-card">
            <h3>{t.ratingQuestion}</h3>

            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className={
                    star <= (hover || rating)
                      ? "star active"
                      : "star"
                  }
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  aria-label={`${star} stars`}
                  aria-pressed={rating === star}
                >
                  ★
                </button>
              ))}
            </div>

            <p className="rating-label">
              {t.ratingLabels[rating]}
            </p>
          </div>

          <div className="question-card">
            <h3>{t.suggestions}</h3>

            <textarea
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              placeholder={t.placeholder}
              rows="4"
              maxLength={1000}
            />
          </div>

          <button type="submit" className="feedback-btn">
            {t.submit} →
          </button>
        </form>
      </div>
    </div>
  );
}
