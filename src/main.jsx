import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";
import Home from "./Pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>
);
