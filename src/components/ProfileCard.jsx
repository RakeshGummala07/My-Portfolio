import React from "react";
import { Code2, MapPin, Phone, Mail, Globe, User } from "lucide-react";

export default function ProfileCard() {
  const info = [
    {
      icon: <Code2 />,
      text: "Full Stack Developer & Passionate Problem Solver",
    },
    { icon: <MapPin />, text: "Hyderabad, Telangana, India" },
    { icon: <Phone />, text: "+91 62813 44624" },
    { icon: <Mail />, text: "rakeshgummala7@gmail.com" },
    { icon: <Globe />, text: "rakeshgummala.com" },
    { icon: <User />, text: "he/him" },
  ];

  return (
    <div className=" w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm p-4 sm:p-5 font-mono text-gray-800 dark:text-gray-100">
      {/* Compact grid layout */}
      <div className="grid grid-cols-[auto_1fr] items-center gap-x-2 sm:gap-x-3 gap-y-1.5 sm:gap-y-2">
        {info.map((item, idx) => (
          <React.Fragment key={idx}>
            {/* Icon */}
            <div className=" p-1 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-gray-100 dark:bg-zinc-800 rounded-md border border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-gray-300 text-[12px]">
              {item.icon}
            </div>

            {/* Text */}
            <div className="text-[12px] md:text-[16px] leading-tight truncate">
              {item.text.includes("@") || item.text.includes(".com") ? (
                <a
                  href={
                    item.text.includes("@")
                      ? `mailto:${item.text}`
                      : item.text.startsWith("http")
                        ? item.text
                        : `https://${item.text}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600 dark:text-blue-400 break-all"
                >
                  {item.text}
                </a>
              ) : (
                <span>{item.text}</span>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
