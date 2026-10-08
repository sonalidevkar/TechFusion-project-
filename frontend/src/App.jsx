import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Schemes from "./pages/Schemes";
import Calculator from "./pages/Calculator";
import Partner from "./pages/Partner";
import Track from "./pages/Track";
import Literacy from "./pages/Literacy";
import MatchScheme from "./pages/MatchScheme";
import SchemeDetails from "./pages/SchemeDetails";


function FeaturePage({ title, description, icon }) {
  return (
    <div className="feature-page">

      <Link
        to="/"
        className="feature-back"
      >
        ← Back to Home
      </Link>

      <div className="feature-page-card">

        <div className="feature-page-icon">
          {icon}
        </div>

        <p className="feature-page-label">
          YOJANASATHI AI
        </p>

        <h1>
          {title}
        </h1>

        <p className="feature-page-description">
          {description}
        </p>

        <Link
          to="/"
          className="feature-home-btn"
        >
          Explore YojanaSathi AI
        </Link>

      </div>

    </div>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />


        {/* AUTH */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />


        {/* USER DASHBOARD */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />


        {/* MAIN FEATURES */}
        <Route
          path="/schemes"
          element={<Schemes />}
        />

        <Route
          path="/calculator"
          element={<Calculator />}
        />


        {/* AI SCHEME MATCHING */}
        <Route
          path="/match-scheme"
          element={<MatchScheme />}
        />


        {/* SCHEME DETAILS */}
        <Route
          path="/scheme-details"
          element={<SchemeDetails />}
        />


        <Route
          path="/partner"
          element={<Partner />}
        />

        <Route
          path="/track"
          element={<Track />}
        />

        <Route
          path="/literacy"
          element={<Literacy />}
        />


        {/* ABOUT */}
        <Route
          path="/about"
          element={
            <FeaturePage
              title="About YojanaSathi AI"
              description="YojanaSathi AI is an AI-powered platform that helps small and marginalized entrepreneurs discover suitable government schemes, loans, subsidies, grants and business support."
              icon="🤖"
            />
          }
        />


        {/* FORGOT PASSWORD */}
        <Route
          path="/forgot-password"
          element={
            <FeaturePage
              title="Forgot Password"
              description="Password recovery will be connected with the secure authentication system."
              icon="🔐"
            />
          }
        />


        {/* TERMS */}
        <Route
          path="/terms"
          element={
            <FeaturePage
              title="Terms & Conditions"
              description="Read the terms and conditions for using the YojanaSathi AI platform."
              icon="📜"
            />
          }
        />


        {/* PRIVACY */}
        <Route
          path="/privacy"
          element={
            <FeaturePage
              title="Privacy Policy"
              description="Learn how YojanaSathi AI handles, uses and protects user information."
              icon="🛡️"
            />
          }
        />


        {/* 404 PAGE */}
        <Route
          path="*"
          element={
            <FeaturePage
              title="Page Not Found"
              description="The page you are looking for does not exist."
              icon="🔎"
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;