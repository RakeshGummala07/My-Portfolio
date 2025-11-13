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
    <div className="min-h-[200vh] flex items-start justify-start">
      <Container className="min-h-screen">
        <Navbar/>
        <Hero/>
        <Name/>
        <ProfileCard/>
        <CareerLinks/>
        <AboutSection/>
        <EducationSection/>
        <TechStackSection/>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Welcome to My Portfolio
        </h1>
        <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
          This is the home page of my portfolio website. Here you can find
          information about me and my projects.
        </p>

      </Container>
      <AnimatedThemeToggler className="fixed bottom-4 right-4" />
      
    </div>
    
    </>
  );
}
