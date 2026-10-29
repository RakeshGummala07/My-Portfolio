import { useEffect } from "react";

const DEFAULT_TITLE = "Rakesh Gummala | Backend & Full-Stack Developer";

/** Sets the browser tab title. Call with no argument for the default title. */
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Rakesh Gummala` : DEFAULT_TITLE;
  }, [title]);
}
