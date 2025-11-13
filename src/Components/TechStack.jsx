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
  { name: "Matplotlib", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg" },
];

export default function TechStackSection() {
  return (
    <section className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm p-6 sm:p-8 md:p-10 font-mono text-gray-800 dark:text-gray-100 leading-relaxed">
      <h2 className="text-xl sm:text-3xl font-bold mb-5 border-b border-gray-200 dark:border-zinc-700 pb-2">
        Tech Stack
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-4 sm:gap-6 place-items-center">
        {skills.map((skill, idx) => (
          <div key={idx} className="group relative flex flex-col items-center">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            {/* Tooltip */}
            <span className="absolute bottom-[-1.8rem] px-2 py-0.5 text-[11px] sm:text-[12px] bg-gray-800 text-white dark:bg-gray-200 dark:text-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
