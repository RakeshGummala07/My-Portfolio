import React from "react";
import Container from "../components/Container";
import ProjectsSection from "../components/ProjectSection";
import FadeInSection from "../components/FadeInSection";

export default function Projects() {
  return (
    <Container>
      <FadeInSection>
        <section className=" mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-10">
            Here are some projects that I have done to improve my skills and
            learn new thing. Check them out!!
          </p>

          <ProjectsSection />
        </section>
      </FadeInSection>
    </Container>
  );
}
