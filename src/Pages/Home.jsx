import Hero from "../Components/Hero";
import Name from "../Components/Name";
import ProfileCard from "../Components/ProfileCard";
import CareerLinks from "../Components/CareerLinks";
import AboutSection from "../Components/About";
import EducationSection from "../Components/Education";
import TechStackSection from "../Components/TechStack";
import FadeInSection from "../Components/FadeInSection";
import ProjectsSection from "../Components/ProjectSection";
import { LatestPosts } from "./Blogs";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle();

  return (
    <>
      <FadeInSection>
        <Hero />
      </FadeInSection>

      <div className="flex flex-col gap-4 px-3 pt-4 pb-6 sm:px-4">
        <FadeInSection>
          <Name />
        </FadeInSection>
        <FadeInSection>
          <ProfileCard />
        </FadeInSection>
        <FadeInSection>
          <CareerLinks />
        </FadeInSection>
        <FadeInSection>
          <AboutSection />
        </FadeInSection>
        <FadeInSection>
          <ProjectsSection />
        </FadeInSection>
        <FadeInSection>
          <TechStackSection />
        </FadeInSection>
        <FadeInSection>
          <EducationSection />
        </FadeInSection>
        <FadeInSection>
          <LatestPosts />
        </FadeInSection>
      </div>
    </>
  );
}