import React from "react";
import Container from "../Components/Container";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Name from "../Components/Name";
import ProfileCard from "../Components/ProfileCard";
import CareerLinks from "../Components/CareerLinks";
import AboutSection from "../Components/About";
import EducationSection from "../Components/Education";
import TechStackSection from "../Components/TechStack";
import FadeInSection from "../Components/FadeInSection";
import ProjectsSection from "../Components/ProjectSection";



export default function Home() {
  return (
    <>
    <div className="min-h-screen flex items-start justify-start bg-neutral-50 dark:bg-neutral-950">
      <Container className="min-h-screen">

        <FadeInSection><Hero/></FadeInSection>
        <FadeInSection><Name/></FadeInSection>
        <FadeInSection><ProfileCard/></FadeInSection>
        <FadeInSection><CareerLinks/></FadeInSection>
        <FadeInSection><AboutSection/></FadeInSection>
        <FadeInSection><EducationSection/></FadeInSection>
        <FadeInSection><TechStackSection/></FadeInSection>
        <FadeInSection><ProjectsSection/></FadeInSection>


      </Container>

    </div>

    </>
  );
}
