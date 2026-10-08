const express = require("express");
const cors = require("cors");

const schemeRoutes = require("./routes/schemeRoutes");
const matchRoutes = require("./routes/matchRoutes");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "YojanaSathi AI Backend is running 🚀"
  });
});

// Scheme API
app.use("/api/schemes", schemeRoutes);

// AI-style matching API
app.use("/api/match", matchRoutes);

// Start server
app.listen(PORT, () => {
  console.log(
    `YojanaSathi AI Backend running on http://localhost:${PORT}`
  );
});