import { Link } from "react-router-dom";

export default function BlogListItem({ title, description, date, slug }) {
  return (
    <Link
      to={`/blog/${slug}`}
      className="block w-full py-3 border-b border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors rounded-xs p-4"
    >
      <div className="flex items-start justify-between gap-6">
        {/* Left side - Content */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            {description}
          </p>
        </div>

        {/* Right side - Date */}
        <span className="text-gray-500 dark:text-gray-400 min-w-max text-sm pt-1">
          {date}
        </span>
      </div>
    </Link>
  );
}
