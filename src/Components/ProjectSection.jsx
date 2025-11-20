import { useRef } from "react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Macbook Mockup",
      desc: "A mockup of a Macbook that showcases the product and its features",
      image: "https://images.unsplash.com/photo-1587614382346-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
      ],
    },
    {
      title: "Instant Feedback",
      desc: "An interactive feedback system that provides instant responses to user actions",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuedotjs/vuedotjs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
      ],
    },
    {
      title: "Apple Clone",
      desc: "A clone of Apple's website that showcases their products and services",
      image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1200&q=80",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
      ],
    }
  ];

  // ---- 3D Tilt Function ----
  const handleTilt = (e, cardRef) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 3;
    const y = e.clientY - rect.top - rect.height / 3;

    cardRef.current.style.transform = `
      perspective(900px)
      rotateX(${(-y / 35)}deg)
      rotateY(${(x / 35)}deg)
      scale(1.03)
    `;
  };

  const resetTilt = (cardRef) => {
    cardRef.current.style.transform = `
      perspective(900px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <section className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm p-6 sm:p-8 md:p-10 font-mono text-gray-800 dark:text-gray-100 leading-relaxed">
      
      {/* Fade Up Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl font-bold mb-5 border-b border-gray-200 dark:border-zinc-700 pb-2"
      >
        I love building things
      </motion.h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full ">
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
                ease: "easeOut"
              }}
              className="
                bg-transparent 
                rounded-xl 
                cursor-pointer 
                transition-all 
                duration-300 
                hover:shadow-[0_0_15px_rgba(0,0,0,0.25)]
                dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]
                hover:border-gray-600
                
              "
              onMouseMove={(e) => handleTilt(e, cardRef)}
              onMouseLeave={() => resetTilt(cardRef)}
            >
              {/* Image */}
              <div className="w-full overflow-hidden rounded-xl bg-gray-200 dark:bg-zinc-800">
                <img
                  src={project.image}
                  className="w-full h-48 sm:h-32 md:h-40 object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-semibold mt-4 m-1">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-xs m-1">
                {project.desc}
              </p>

              {/* Tech Icons */}
              <div className="flex gap-1 m-2">
                {project.tech.map((icon, idx) => (
                  <img
                    key={idx}
                    src={icon}
                    className="w-7 h-7 bg-gray-100 dark:bg-zinc-800 p-1 rounded-full border dark:border-zinc-700"
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
