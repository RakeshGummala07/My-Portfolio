import { Link } from "react-router-dom";
import BlogListItem from "./Blogs/BlogListItem";
import { blogs } from "../data/blogs";
import useDocumentTitle from "../hooks/useDocumentTitle";

/** Card used on the home page: newest posts only. */
export function LatestPosts({ limit = 3 }) {
  const posts = blogs.slice(0, limit);

  return (
    <section
      id="blog"
      className="w-full rounded-xl border border-gray-200 bg-white p-4 font-mono text-gray-800 shadow-sm sm:p-6 md:p-8 dark:border-zinc-700 dark:bg-zinc-900 dark:text-gray-100"
    >
      <h2 className="mb-3 border-b border-gray-200 pb-2 text-2xl font-bold dark:border-zinc-700">
        Latest posts
      </h2>
      {posts.map((post) => (
        <BlogListItem key={post.slug} {...post} />
      ))}
      {blogs.length > limit && (
        <Link
          to="/blog"
          className="mt-4 inline-block text-sm underline hover:text-blue-600 dark:hover:text-blue-400"
        >
          All {blogs.length} posts
        </Link>
      )}
    </section>
  );
}

/** The /blog page: every post, newest first. */
export default function Blogs() {
  useDocumentTitle("Blog");

  return (
    <div className="mx-auto w-full px-6 py-12">
      <h1 className="mb-2 text-3xl font-bold">Blog</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        Notes on the systems I build and the bugs I fix along the way.
      </p>
      {blogs.map((post) => (
        <BlogListItem key={post.slug} {...post} />
      ))}
    </div>
  );
}
