import ProjectsSection from "../Components/ProjectSection";
import FadeInSection from "../Components/FadeInSection";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Projects() {
  useDocumentTitle("Projects");

  return (
      <FadeInSection>
        <section className=" mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-10">
            Projects I built to learn how real systems fit together. Open
          &ldquo;What&rsquo;s inside&rdquo; on a card for the architecture and
          tools.
          </p>

          <ProjectsSection showHeading={false} />
        </section>
      </FadeInSection>
  );
}
