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
import BlogPost from "./Pages/Blogs/BlogPost.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      <Footer/>
      </Router>
    </ThemeProvider>
  </StrictMode>
);
