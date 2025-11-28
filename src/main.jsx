import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import Navbar from "./Components/Navbar.jsx";
import Container from "./Components/Container.jsx";
import Projects from "./Pages/Projects.jsx";
import Blogs from "./Pages/Blogs.jsx";
import BlogOne from "./Pages/Blogs/BlogOne.jsx";
import Footer from "./Components/Footer.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <ThemeProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogOne />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Container>
    <Footer/>
  </StrictMode>
);
