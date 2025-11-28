import React from "react";
import Container from "../components/Container.jsx";
import Hero from "../components/Hero.jsx";
import NameCard from "../components/NameCard.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import CareerLinks from "../components/CareerLinks.jsx";
import AboutSection from "../components/About.jsx";
import EducationSection from "../components/Education.jsx";
import TechStackSection from "../components/TechStack.jsx";
import FadeInSection from "../components/FadeInSection.jsx";
import ProjectsSection from "../components/ProjectSection.jsx";
import Blogs from "./Blogs.jsx";

export default function Home() {
  return (
    <>
    <div className="min-h-screen flex items-start justify-start bg-neutral-50 dark:bg-neutral-950">
      <Container className="min-h-screen">
        <FadeInSection><Hero/></FadeInSection>
        <FadeInSection><NameCard/></FadeInSection>
        <FadeInSection><ProfileCard/></FadeInSection>
        <FadeInSection><CareerLinks/></FadeInSection>
        <FadeInSection><AboutSection/></FadeInSection>
        <FadeInSection><EducationSection/></FadeInSection>
        <FadeInSection><Blogs/></FadeInSection>
        <FadeInSection><TechStackSection/></FadeInSection>
        <FadeInSection><ProjectsSection/></FadeInSection>
      </Container>
    </div>
    </>
  );
}
