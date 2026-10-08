const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const schemesPath = path.join(__dirname, "../../schemes.json");

function getIncomeValue(income) {
  switch (income) {
    case "below-1":
      return 100000;

    case "1-3":
      return 300000;

    case "3-5":
      return 500000;

    case "above-5":
      return 1000000;

    default:
      return null;
  }
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, " ");
}

function arrayContainsKeyword(array, keyword) {
  if (!Array.isArray(array) || !keyword) {
    return false;
  }

  const normalizedKeyword = normalize(keyword);

  return array.some((item) => {
    const normalizedItem = normalize(item);

    return (
      normalizedItem === normalizedKeyword ||
      normalizedItem.includes(normalizedKeyword) ||
      normalizedKeyword.includes(normalizedItem)
    );
  });
}

/*
  Category matching

  Example:
  User: SC
  Scheme: SC / ST / Women

  User: Women
  Scheme: SC / ST / Women

  User: General
  General schemes can still match.
*/
function categoryMatches(scheme, category) {
  if (!category) {
    return true;
  }

  const schemeCategories = scheme.category || [];
  const schemeTags = scheme.tags || [];

  if (
    arrayContainsKeyword(schemeCategories, category) ||
    arrayContainsKeyword(schemeTags, category)
  ) {
    return true;
  }

  return false;
}

/*
  Business type matching

  Service -> Services
  Food -> Food Processing
  Technology -> Technology / Innovation
*/
function businessMatches(scheme, businessType) {
  if (!businessType) {
    return true;
  }

  const business = normalize(businessType);

  const schemeBusinessTypes = scheme.businessType || [];
  const schemeTags = scheme.tags || [];

  if (
    arrayContainsKeyword(schemeBusinessTypes, businessType) ||
    arrayContainsKeyword(schemeTags, businessType)
  ) {
    return true;
  }

  const aliases = {
    service: [
      "services",
      "service",
      "technology",
      "trading"
    ],

    retail: [
      "retail",
      "trading"
    ],

    food: [
      "food",
      "food processing",
      "micro food enterprise"
    ],

    technology: [
      "technology",
      "innovation",
      "startup",
      "services"
    ],

    manufacturing: [
      "manufacturing"
    ]
  };

  const possibleMatches = aliases[business] || [business];

  return possibleMatches.some((item) =>
    arrayContainsKeyword(schemeBusinessTypes, item)
  );
}

/*
  Financial support matching

  loan       -> Loan / Business Loan / Credit Support
  subsidy    -> Subsidy / Credit Linked Subsidy / Margin Money Subsidy
  startup    -> Startup Support / Funding Access / Mentorship
  equipment  -> Capacity Building / Business Support
*/
function financialMatches(scheme, financialNeed) {
  if (!financialNeed) {
    return true;
  }

  const need = normalize(financialNeed);

  const support = scheme.financialSupport || [];
  const categories = scheme.category || [];
  const tags = scheme.tags || [];

  const allValues = [
    ...support,
    ...categories,
    ...tags
  ];

  const keywordMap = {
    loan: [
      "loan",
      "business loan",
      "credit support",
      "loan support",
      "credit guarantee"
    ],

    subsidy: [
      "subsidy",
      "margin money subsidy",
      "credit linked subsidy"
    ],

    startup: [
      "startup",
      "startup support",
      "funding access",
      "mentorship",
      "innovation"
    ],

    equipment: [
      "equipment",
      "capacity building",
      "upgrading",
      "business support"
    ]
  };

  const keywords = keywordMap[need] || [need];

  return keywords.some((keyword) =>
    allValues.some((value) =>
      normalize(value).includes(normalize(keyword)) ||
      normalize(keyword).includes(normalize(value))
    )
  );
}

function stateMatches(scheme, state) {
  if (!state) {
    return true;
  }

  const states = scheme.eligibility?.states || [];

  return (
    states.includes("All") ||
    states.some(
      (schemeState) =>
        normalize(schemeState) === normalize(state)
    )
  );
}

function incomeMatches(scheme, income) {
  const userIncome = getIncomeValue(income);

  if (userIncome === null) {
    return true;
  }

  const maxIncome = scheme.eligibility?.maxIncome;

  // Current dataset intentionally has null
  // because exact limits should be verified
  // from official scheme sources.
  if (maxIncome === null || maxIncome === undefined) {
    return true;
  }

  return userIncome <= maxIncome;
}

function calculateMatchScore(
  scheme,
  {
    state,
    category,
    businessType,
    income,
    financialNeed
  }
) {
  let score = 0;
  const reasons = [];

  if (state) {
    if (stateMatches(scheme, state)) {
      score += 15;
      reasons.push("Available in your selected state");
    }
  }

  if (category) {
    if (categoryMatches(scheme, category)) {
      score += 25;
      reasons.push(`Relevant for ${category} category`);
    }
  }

  if (businessType) {
    if (businessMatches(scheme, businessType)) {
      score += 25;
      reasons.push(
        `Suitable for ${businessType} business`
      );
    }
  }

  if (financialNeed) {
    if (financialMatches(scheme, financialNeed)) {
      score += 25;
      reasons.push(
        `Provides ${financialNeed} related support`
      );
    }
  }

  if (income) {
    if (incomeMatches(scheme, income)) {
      score += 10;
      reasons.push("Income requirement is compatible");
    }
  }

  return {
    score,
    reasons
  };
}

router.post("/", (req, res) => {
  try {
    const {
      state,
      category,
      businessType,
      income,
      financialNeed
    } = req.body;

    const data = fs.readFileSync(
      schemesPath,
      "utf-8"
    );

    const schemes = JSON.parse(data);

    const filters = {
      state,
      category,
      businessType,
      income,
      financialNeed
    };

    const matchedSchemes = schemes
      .map((scheme) => {
        const stateMatch = stateMatches(
          scheme,
          state
        );

        const categoryMatch = categoryMatches(
          scheme,
          category
        );

        const businessMatch = businessMatches(
          scheme,
          businessType
        );

        const financialMatch = financialMatches(
          scheme,
          financialNeed
        );

        const incomeMatch = incomeMatches(
          scheme,
          income
        );

        const allBasicConditions =
          stateMatch &&
          categoryMatch &&
          businessMatch &&
          financialMatch &&
          incomeMatch;

        if (!allBasicConditions) {
          return null;
        }

        const match = calculateMatchScore(
          scheme,
          filters
        );

        return {
          ...scheme,
          matchScore: match.score,
          matchReasons: match.reasons
        };
      })
      .filter(Boolean)
      .sort(
        (a, b) =>
          b.matchScore - a.matchScore
      );

    res.json({
      success: true,
      count: matchedSchemes.length,
      filters,
      schemes: matchedSchemes
    });

  } catch (error) {
    console.error(
      "Matching error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Unable to match schemes"
    });
  }
});

module.exports = router;