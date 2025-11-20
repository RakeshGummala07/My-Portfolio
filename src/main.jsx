import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import Navbar from "./Components/Navbar.jsx";
import Container from "./Components/Container.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
    <ThemeProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </Container>


  </StrictMode>
);
