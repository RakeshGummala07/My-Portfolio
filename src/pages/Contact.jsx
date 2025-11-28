"use client";

import emailjs from "emailjs-com";
import { useState } from "react";
import FadeInSection from "../components/FadeInSection";
import Container from "../components/Container";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          alert("Failed to send. Try again.");
          console.error(error);
          setLoading(false);
        }
      );
  }

  return (
    <Container>
      <FadeInSection>
        <section className="max-w-2xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-10">
            I'm open to freelancing offers. Reach out to me.
          </p>

          <form onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm mb-1">Full name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full rounded-lg border px-4 py-2 bg-white dark:bg-zinc-900"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full rounded-lg border px-4 py-2 bg-white dark:bg-zinc-900"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full rounded-lg border px-4 py-2 bg-white dark:bg-zinc-900"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-100 dark:bg-zinc-800 rounded-lg py-2 font-medium"
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </section>
      </FadeInSection>
    </Container>
  );
}
