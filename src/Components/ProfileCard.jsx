import React from "react";
import { Code2, MapPin, Phone, Mail, Globe, User } from "lucide-react";

const info = [
  {
    icon: Code2,
    text: "Java, Spring Boot & React developer. Open to entry-level SDE and IT support roles",
  },
  { icon: MapPin, text: "Hyderabad, Telangana, India" },
  { icon: Phone, text: "+91 62813 44624", href: "tel:+916281344624" },
  {
    icon: Mail,
    text: "rakeshgummala7@gmail.com",
    href: "mailto:rakeshgummala7@gmail.com",
  },
  { icon: Globe, text: "rakeshgummala.com", href: "https://rakeshgummala.com" },
  { icon: User, text: "he/him" },
];

export default function ProfileCard() {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-4 font-mono text-gray-800 shadow-sm sm:p-5 dark:border-zinc-700 dark:bg-zinc-900 dark:text-gray-100">
      <ul className="grid grid-cols-[auto_1fr] items-center gap-x-2 gap-y-2 sm:gap-x-3">
        {info.map(({ icon: Icon, text, href }) => (
          <li key={text} className="contents">
            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-1 text-gray-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300">
              <Icon aria-hidden="true" />
            </span>
            <span className="text-xs leading-snug break-words md:text-base">
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  {text}
                </a>
              ) : (
                text
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
