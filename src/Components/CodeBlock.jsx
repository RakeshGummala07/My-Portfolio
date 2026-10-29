import { useRef, useState } from "react";

export default function CodeBlock({ title, code, language }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  const text = code.trim();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable (e.g. insecure context) - ignore */
    }
  };

  return (
    <figure className="my-6 overflow-hidden rounded-lg bg-gray-900 text-gray-100">
      <figcaption className="flex items-center justify-between gap-3 border-b border-gray-700 px-4 py-2">
        <span className="truncate text-sm text-gray-300">
          {title}
          {language && (
            <span className="ml-2 text-xs text-gray-500">{language}</span>
          )}
        </span>
        <button
          type="button"
          onClick={copyToClipboard}
          className="shrink-0 rounded bg-gray-700 px-2 py-1 text-xs hover:bg-gray-600"
        >
          <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        </button>
      </figcaption>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code>{text}</code>
      </pre>
    </figure>
  );
}
