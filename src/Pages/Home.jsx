import React from "react";
import Container from "../Components/Container";
import Navbar from "../Components/Navbar";
import { AnimatedThemeToggler } from "../Components/AnimatedThemeToggler";
import Hero from "../Components/Hero";
import Name from "../Components/Name";
import ProfileCard from "../Components/ProfileCard";
import CareerLinks from "../Components/CareerLinks";
import AboutSection from "../Components/About";
import EducationSection from "../Components/Education";
import TechStackSection from "../Components/TechStack";



export default function Home() {
  return (
    <>
    <div className="min-h-screen flex items-start justify-start bg-neutral-50 dark:bg-neutral-950">
      <Container className="min-h-screen">
        <Navbar/>
        <Hero/>
        <Name/>
        <ProfileCard/>
        <CareerLinks/>
        <AboutSection/>
        <EducationSection/>
        <TechStackSection/>
       

      </Container>
      
    </div>
    
    </>
  );
}
