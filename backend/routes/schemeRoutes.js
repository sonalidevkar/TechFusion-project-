const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Path to schemes.json
const schemesPath = path.join(__dirname, "../../schemes.json");

// Get all schemes
router.get("/", (req, res) => {
  try {
    const data = fs.readFileSync(schemesPath, "utf-8");
    const schemes = JSON.parse(data);

    res.json({
      success: true,
      count: schemes.length,
      schemes: schemes
    });
  } catch (error) {
    console.error("Error reading schemes.json:", error);

    res.status(500).json({
      success: false,
      message: "Unable to load schemes"
    });
  }
});

module.exports = router;