import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm p-6 sm:p-8 md:p-10 font-mono text-gray-800 dark:text-gray-100 leading-relaxed">
      <h2 className="text-2xl  font-bold mb-3 border-b border-gray-200 dark:border-zinc-700 pb-2">
        About
      </h2>

      <div className="space-y-2 md:space-y-3 text-[14px] ">
        <p>
          Hello, World! I’m <strong>Rakesh Gummala</strong> — a passionate{" "}
          <strong>Full Stack Developer</strong> focused on building
          high-performance, user-centric applications with clean and engaging
          designs.
        </p>

        <p>
          With a strong foundation in <strong>JavaScript</strong>,{" "}
          <strong>React.js</strong>, <strong>Node.js</strong>,{" "}
          <strong>Express.js</strong> and modern front-end technologies, I love
          exploring new technologies and turning ideas into reality through side
          projects.
        </p>

        <p>
          I enjoy solving complex problems on{" "}
          <a
            href="https://leetcode.com/Rakesh_Gummala"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            LeetCode
          </a>{" "}
          and have a keen interest in building scalable web systems that combine
          design and functionality.
        </p>

        <p>
          Recently, I’ve been working on projects that improve user experience
          through optimized UI, responsive layouts, and performance-focused
          design patterns.
        </p>

        <p>Let’s connect and collaborate on something amazing together!🚀</p>
      </div>
    </section>
  );
}
