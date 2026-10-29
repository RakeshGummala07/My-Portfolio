import { useState } from "react";
import emailjs from "emailjs-com";
import FadeInSection from "../Components/FadeInSection";
import useDocumentTitle from "../hooks/useDocumentTitle";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const EMAIL = "rakeshgummala7@gmail.com";

const fieldClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-2 dark:border-zinc-700 dark:bg-zinc-900";

export default function Contact() {
  useDocumentTitle("Contact");
  // idle | sending | success | error
  const [status, setStatus] = useState("idle");
  const isConfigured = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY;

  function sendEmail(e) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: real visitors never see or fill this field
    if (form.website.value) return;

    setStatus("sending");
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  }

  return (
    <FadeInSection>
      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="mb-2 text-3xl font-bold">Contact me</h1>
        <p className="mb-10 text-gray-600 dark:text-gray-400">
          I&rsquo;m looking for entry-level SDE and IT support roles, and
          I&rsquo;m happy to talk about my projects. Use the form or email me at{" "}
          <a className="underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          .
        </p>

        {!isConfigured ? (
          <p
            role="alert"
            className="rounded-lg border border-amber-400 p-4 text-sm"
          >
            The contact form is not configured on this site yet. Please email me
            directly instead.
          </p>
        ) : (
          <form onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="user_name" className="mb-1 block text-sm">
                Full name
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                autoComplete="name"
                maxLength={100}
                required
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="user_email" className="mb-1 block text-sm">
                Email address
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                autoComplete="email"
                maxLength={150}
                required
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                maxLength={2000}
                required
                className={fieldClass}
              />
            </div>

            {/* Honeypot field (hidden from people and screen readers) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px" }}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-lg bg-neutral-900 py-2 font-medium text-white transition-opacity disabled:opacity-60 dark:bg-white dark:text-neutral-900"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            <p role="status" aria-live="polite" className="min-h-6 text-sm">
              {status === "success" &&
                "Message sent. Thank you, I'll reply by email soon."}
              {status === "error" &&
                `Could not send your message. Please try again or email ${EMAIL}.`}
            </p>
          </form>
        )}
      </section>
    </FadeInSection>
  );
}
