import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function NotFound({
  title = "Page not found",
  message = "The page you are looking for does not exist or has moved.",
  to = "/",
  linkLabel = "Back to home",
}) {
  useDocumentTitle(title);

  return (
    <section className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="mb-3 text-3xl font-bold">{title}</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">{message}</p>
      <Link
        to={to}
        className="rounded-lg bg-neutral-900 px-4 py-2 font-medium text-white dark:bg-white dark:text-neutral-900"
      >
        {linkLabel}
      </Link>
    </section>
  );
}
