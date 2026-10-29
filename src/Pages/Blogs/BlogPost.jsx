import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import CodeBlock from "../../Components/CodeBlock";
import FadeInSection from "../../Components/FadeInSection";
import NotFound from "../NotFound";
import { formatDate, getPost } from "../../data/blogs";
import useDocumentTitle from "../../hooks/useDocumentTitle";

// Renders **bold** and `code` inside plain strings
function Inline({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**"))
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("`"))
      return (
        <code
          key={i}
          className="rounded bg-gray-100 px-1 py-0.5 text-[0.9em] dark:bg-zinc-800"
        >
          {part.slice(1, -1)}
        </code>
      );
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function Blocks({ blocks }) {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "h2":
        return (
          <h2 key={i} className="mt-10 mb-3 text-2xl font-semibold">
            {block.text}
          </h2>
        );
      case "p":
        return (
          <p key={i} className="mb-4 leading-relaxed">
            <Inline text={block.text} />
          </p>
        );
      case "ul":
        return (
          <ul key={i} className="mb-4 list-disc space-y-2 pl-6 leading-relaxed">
            {block.items.map((item) => (
              <li key={item}>
                <Inline text={item} />
              </li>
            ))}
          </ul>
        );
      case "code":
        return (
          <CodeBlock
            key={i}
            title={block.title}
            language={block.language}
            code={block.code}
          />
        );
      case "callout":
        return (
          <p
            key={i}
            className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 text-sm leading-relaxed dark:bg-zinc-800"
          >
            <Inline text={block.text} />
          </p>
        );
      default:
        return null;
    }
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  useDocumentTitle(post ? post.title : "Post not found");

  if (!post) {
    return (
      <NotFound
        title="Post not found"
        message="That blog post does not exist."
        to="/blog"
        linkLabel="See all posts"
      />
    );
  }

  const Body = post.Component;

  return (
    <FadeInSection>
      <article className="mx-auto max-w-2xl px-5 py-10 text-gray-800 sm:px-6 sm:py-14 dark:text-gray-200">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:underline dark:text-gray-400"
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
          All posts
        </Link>

        <h1 className="mt-6 mb-3 text-3xl leading-tight font-bold sm:text-4xl">
          {post.title}
        </h1>
        <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
          {post.description}
        </p>
        <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs dark:border-zinc-700 dark:bg-zinc-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {Body ? <Body /> : <Blocks blocks={post.blocks} />}
      </article>
    </FadeInSection>
  );
}
