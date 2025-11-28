import React from "react";

const skills = [
  {
    name: "Java",
    icon: "logo/java-logo.svg",
  },
  {
    name: "Python",
    icon: "/logo/python-logo.svg",
  },
  {
    name: "HTML",
    icon: "/logo/html-logo.svg",
  },
  {
    name: "CSS",
    icon: "/logo/css-logo.svg",
  },
  {
    name: "JavaScript",
    icon: "/logo/javascript-logo.svg",
  },
  {
    name: "React.js",
    icon: "/logo/react-logo.svg",
  },
  {
    name: "Git",
    icon: "/logo/git-logo.svg",
  },
  {
    name: "GitHub",
    icon: "/logo/github-logo.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/logo/tailwind-logo.png",
  },
  {
    name: "Bootstrap",
    icon: "/logo/bootstrap-logo.svg",
  },
  {
    name: "Node.js",
    icon: "/logo/nodejs-logo.svg",
  },
  {
    name: "Express.js",
    icon: "/logo/express-logo.svg",
  },
  {
    name: "MySQL",
    icon: "/logo/mysql-logo.svg",
  },
  {
    name: "MongoDB",
    icon: "/logo/mongodb-logo.svg",
  },
  {
    name: "NumPy",
    icon: "/logo/numpy-logo.svg",
  },
  {
    name: "Pandas",
    icon: "/logo/pandas-logo.svg",
  },
];

// Detect black/white logos
const isMono = (url) => {
  const name = url.toLowerCase();
  return (
    name.includes("github") ||
    name.includes("express") ||
    name.includes("mono") ||
    name.includes("line") ||
    name.includes("glyph") ||
    name.includes("black") ||
    name.includes("white") ||
    (name.endsWith(".svg") &&
      (name.includes("github") || name.includes("express")))
  );
};

export default function TechStackSection() {
  return (
    <section className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm p-6 sm:p-8 md:p-10 font-mono text-gray-800 dark:text-gray-100 leading-relaxed">
      <h2 className="text-2xl font-bold mb-5 border-b border-gray-200 dark:border-zinc-700 pb-2">
        Tech Stack
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-4 md:gap-6 place-items-center">
        {skills.map((skill, idx) => {
          const mono = isMono(skill.icon);

          return (
            <div
              key={idx}
              className="group relative flex flex-col items-center cursor-pointer"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className={`
                  w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 
                  group-hover:scale-110
                  ${mono ? "dark:brightness-0 dark:invert" : ""}
                `}
              />

              {/* Tooltip */}
              <span className="absolute z-10 bottom-[-1.8rem] px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md bg-white dark:bg-zinc-800 text-black dark:text-white">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
