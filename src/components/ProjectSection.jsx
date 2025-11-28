import { useRef } from "react";
import { motion } from "framer-motion";
import { DiGithubBadge } from "react-icons/di";
import { CgLink } from "react-icons/cg";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Currency Converter",
      desc: "Developed a web-based multicurrency conversion tool using React, featuring real-time rates from Currency API.",
      livelink : "https://simple-currency-converter-rho.vercel.app/",
      gitlink : "https://github.com/RakeshGummala07/currency_converrter",
      image:
        '/project-images/currency_converter.png',
      tech: [
        "/logo/react-logo.svg",
      ],
    },
    {
      title: "Hotel and Accommodation Management Web App (Stayomi)",
      desc: "Developed a full-stack web application with features for CRUD operations, implemented user authentication with role-based access (admin vs guest).",
      livelink : "https://stayomi.onrender.com/listings",
      gitlink : "https://github.com/RakeshGummala07/Stayomi",
      image:
        '/project-images/stayomi.png',
      tech: [
        "/logo/nodejs-logo.svg",
        "/logo/express-logo.svg",
        "/logo/mongodb-logo.svg",
      ]
      
    },
    
  ];

  return (
    <section className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm p-6 sm:p-8 md:p-10 font-mono text-gray-800 dark:text-gray-100 leading-relaxed">
      {/* Fade Up Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-1.5xl font-bold mb-5 border-b border-gray-200 dark:border-zinc-700 pb-2"
      >
        I love building things
      </motion.h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full ">
        {projects.map((project, i) => {
          const cardRef = useRef(null);

          return (
            <motion.div
              key={i}
              ref={cardRef}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              className="
                bg-transparent 
                rounded-xl 
                cursor-pointer 
                transition-all 
                duration-300 
                sm:border-gray-600
                md:hover:shadow-[0_0_10px_rgba(0,0,0,0.25)]
                md:dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.15)]
                md:hover:border-gray-600
                
              "
             
            >
              {/* Image */}
              <div className="w-full overflow-hidden rounded-xl bg-gray-200 dark:bg-zinc-800">
                <img
                  src={project.image}
                  className="w-full h-48 sm:h-32 md:h-40 object-cover"
                />
              </div>


              {/* Title */}
              <h3 className="flex text-[16px] font-semibold mt-4 m-2 justify-between">
                {project.title}
                <div className="flex">
                  <a target="_blank" href={project.gitlink}><DiGithubBadge className="size-6 cursor-pointer ml-1 hover:bg-gray-200 rounded-full hover:scale-110 ease-in-out duration-75 dark:hover:bg-gray-800"/></a>
                  <a target="_blank" href={project.livelink}><CgLink className="size-5 cursor-pointer m-0.5 hover:bg-gray-200 rounded-full hover:scale-110 ease-in-out duration-75 dark:hover:bg-gray-800"/></a>
                </div>
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-xs m-2 ">
                {project.desc}
              </p>

              {/* Tech Icons */}
              <div className="flex gap-1 m-2">
                {project.tech.map((icon, idx) => (
                  <img
                    key={idx}
                    src={icon}
                    className="w-7 h-7 bg-gray-100 dark:bg-zinc-800 p-1 rounded-full border dark:border-zinc-700 hover:rotate-360 ease-in-out transition-transform hover:scale-105"
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
