import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full rounded-xl border border-gray-200 bg-white p-6 font-mono leading-relaxed text-gray-800 shadow-sm sm:p-8 md:p-10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-gray-100"
    >
      <h2 className="mb-3 border-b border-gray-200 pb-2 text-2xl font-bold dark:border-zinc-700">
        About
      </h2>

      <div className="space-y-3 text-[14px]">
        <p>
          Hello, World! I&rsquo;m <strong>Rakesh Gummala</strong>, a 2026{" "}
          <strong>B.Tech (Electronics and Communication Engineering)</strong>{" "}
          graduate based in Hyderabad. I build backend-heavy, full-stack
          applications with <strong>Java</strong>, <strong>Spring Boot</strong>{" "}
          and <strong>React</strong>.
        </p>

        <p>
          My current focus is <strong>microservices</strong>. I built{" "}
          <strong>EduCollab</strong>, an educational collaboration platform made
          of independently deployable Spring Boot services, and I&rsquo;m
          building <strong>DevMind</strong>, an AI-assisted developer
          intelligence platform that uses retrieval-augmented generation (RAG)
          over GitHub repositories.
        </p>

        <p>
          Building them meant debugging real problems: Docker networking on
          Windows, JWT authentication between services, race conditions and
          version mismatches in Spring Cloud. I write about what I learn in the{" "}
          <Link
            to="/blog"
            className="underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            blog
          </Link>
          .
        </p>

        <p>
          I practise data structures and algorithms in Java and have solved 200+
          problems on{" "}
          <a
            href="https://leetcode.com/u/Rakesh_Gummala/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            LeetCode
          </a>
          .
        </p>

        <p>
          I&rsquo;m looking for entry-level <strong>SDE</strong> and{" "}
          <strong>IT support</strong> roles. If you&rsquo;re hiring,{" "}
          <Link
            to="/contact"
            className="underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            get in touch
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
