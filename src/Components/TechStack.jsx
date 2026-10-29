import {
  SiJavascript,
  SiPython,
  SiNumpy,
  SiPandas,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiFramer,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiRabbitmq,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiGit,
  SiGithub,
  SiGrafana,
  SiApachemaven,
  SiOllama,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// `mono: true` icons follow the text colour so dark brand colours stay
// visible in dark mode.
const groups = [
  {
    label: "Languages",
    items: [
      { name: "Java", Icon: FaJava, color: "#E76F00" },
      { name: "JavaScript", Icon: SiJavascript, color: "#C9A800" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss3, color: "#1572B6" },
      { name: "NumPy", Icon: SiNumpy, mono: true },
      { name: "Pandas", Icon: SiPandas, mono: true },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", Icon: SiExpress, mono: true },
      { name: "Maven", Icon: SiApachemaven, color: "#C71A36" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", Icon: SiReact, color: "#0EA5C6" },
      { name: "Redux Toolkit", Icon: SiRedux, color: "#764ABC" },
      { name: "TanStack Query", Icon: SiReactquery, color: "#FF4154" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
      { name: "Framer Motion", Icon: SiFramer, mono: true },
    ],
  },
  {
    label: "Data and messaging",
    items: [
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" },
      { name: "Kafka", Icon: SiApachekafka, mono: true },
      { name: "RabbitMQ", Icon: SiRabbitmq, color: "#FF6600" },
    ],
  },
  {
    label: "DevOps and AI",
    items: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
      { name: "Grafana", Icon: SiGrafana, color: "#F46800" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, mono: true },
      { name: "Ollama", Icon: SiOllama, mono: true },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="w-full rounded-xl border border-gray-200 bg-white p-6 font-mono leading-relaxed text-gray-800 shadow-sm sm:p-8 md:p-10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-gray-100"
    >
      <h2 className="mb-5 border-b border-gray-200 pb-2 text-2xl font-bold dark:border-zinc-700">
        Tech Stack
      </h2>

      <div className="space-y-5">
        {groups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map(({ name, Icon, color, mono }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs dark:border-zinc-700 dark:bg-zinc-800"
                >
                  <Icon
                    aria-hidden="true"
                    className={`size-4 ${mono ? "text-neutral-900 dark:text-neutral-100" : ""}`}
                    style={mono ? undefined : { color }}
                  />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
