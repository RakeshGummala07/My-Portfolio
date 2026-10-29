import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { projects, tech } from "../data/projects";

function TechChip({ id }) {
  const { name, Icon, color, mono } = tech[id];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-[11px] dark:border-zinc-700 dark:bg-zinc-800">
      <Icon
        aria-hidden="true"
        style={mono ? undefined : { color }}
        className={mono ? "text-neutral-900 dark:text-neutral-100" : ""}
      />
      {name}
    </span>
  );
}

function IconLink({ href, label, children }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="rounded-full p-1.5 transition-colors hover:bg-gray-200 dark:hover:bg-zinc-700"
    >
      {children}
    </a>
  );
}

function ProjectCard({ project, index }) {
  const {
    title,
    subtitle,
    status,
    desc,
    highlights,
    gitlink,
    livelink,
    image,
  } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-zinc-700 dark:bg-zinc-900"
    >
      {image ? (
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          loading="lazy"
          className="h-40 w-full object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={`${title} (screenshot coming soon)`}
          className="flex h-40 w-full flex-col items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 px-4 text-center dark:from-zinc-800 dark:to-zinc-900"
        >
          <span className="text-2xl font-bold">{title}</span>
          <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {subtitle}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{status}</p>
          </div>
          <div className="flex shrink-0 items-center">
            <IconLink href={gitlink} label={`${title} source code on GitHub`}>
              <FaGithub className="size-5" />
            </IconLink>
            <IconLink href={livelink} label={`${title} live demo`}>
              <ExternalLink className="size-5" />
            </IconLink>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400">
          {desc}
        </p>

        {highlights.length > 0 && (
          <details className="group text-xs">
            <summary className="cursor-pointer font-semibold select-none">
              What&rsquo;s inside
            </summary>
            <ul className="mt-2 list-disc space-y-1.5 pl-4 text-gray-600 dark:text-gray-400">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        )}

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((id) => (
            <TechChip key={id} id={id} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection({ showHeading = true }) {
  return (
    <section
      id="projects"
      className="w-full rounded-xl border border-gray-200 bg-white p-4 font-mono leading-relaxed text-gray-800 shadow-sm sm:p-6 md:p-8 dark:border-zinc-700 dark:bg-zinc-900 dark:text-gray-100"
    >
      {showHeading && (
        <h2 className="mb-5 border-b border-gray-200 pb-2 text-2xl font-bold dark:border-zinc-700">
          Projects
        </h2>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
