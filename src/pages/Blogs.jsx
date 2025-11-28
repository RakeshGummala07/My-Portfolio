import BlogListItem from "./blogs/BlogListItem";
import FadeInSection from "../components/FadeInSection";

export default function Blogs() {
  return (
    <div className="w-full mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-5 border-b border-gray-200 dark:border-zinc-700 pb-2">
        All Blogs
      </h2>
      <FadeInSection>
      <BlogListItem
        title="The ActivityTag Pattern in React"
        description="Learn how to build reusable UI activity indicators using React components with clean code examples and real use cases..."
        date="Thursday, Nov 20, 2025"
        slug="activity-tag-pattern-react"
      />
      </FadeInSection>

    </div>
    
  );
}