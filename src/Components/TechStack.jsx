import React from "react";

const skills = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Tailwind CSS", icon: "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },

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
    name.endsWith(".svg") && (
      name.includes("github") || name.includes("express")
    )
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
            <div key={idx} className="group relative flex flex-col items-center">
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
