import { Link } from "react-router-dom";

export default function BlogListItem({ title, description, date, slug }) {
  return (
    <Link
      to={`/blog/${slug}`}
      className="block w-full py-3 border-b border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors rounded-md p-4 md:h-auto"
    >
      <div className="flex items-center justify-between flex-col md:flex-row gap-4 md:gap-6">
        {/* Left side - Content */}
        <div className="w-full md:w-auto">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 md:mb-2">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
        {/* Right side - Date */}
        <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base md:min-w-max">
          {date}
        </span>
      </div>
    </Link>
  );
}