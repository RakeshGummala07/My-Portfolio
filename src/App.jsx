import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

import Blogs from "./pages/Blogs.jsx";
import BlogOne from "./pages/blogs/BlogOne.jsx"
import Container from "./components/Container.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <>
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
    </>
  )
}

export default App


