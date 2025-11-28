import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const links = [
  {
    name: "LeetCode",
    username: "leetcode/Rakesh_Gummala",
    icon: <SiLeetcode className="text-[#FFA116]" />,
    url: "https://leetcode.com/u/Rakesh_Gummala/",
  },
  {
    name: "LinkedIn",
    username: "linkedin/Rakeshgummala",
    icon: <FaLinkedin className="text-[#0A66C2]" />,
    url: "https://www.linkedin.com/in/rakesh-gummala-24873736b/",
  },
  {
    name: "GitHub",
    username: "github/RakeshGummala07",
    icon: <FaGithub className="text-black dark:text-white" />,
    url: "https://github.com/RakeshGummala07",
  },
  {
    name: "Resume",
    username: "View PDF",
    icon: <FaFileAlt className="text-blue-500" />,
    url: "https://drive.google.com/file/d/1jX3SQ-LzLKaKWWuSs347tHK97IeN0KUj/view?usp=sharing",
  },
];

export default function CareerLinks() {
  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-6 ">
      {links.map((item, idx) => (
        <a
          key={idx}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 rounded-2xl md:px-6 md:py-5 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.01] py-3 px-4"
        >
          <div className="flex items-center gap-2 md:gap-4">
            {/* Icon */}
            <div className="h-10 w-10 flex items-center justify-center bg-gray-100 dark:bg-zinc-800 rounded-xl text-xl">
              {item.icon}
            </div>

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <span className="font-medium text-[15px] ">{item.name}</span>
              <span className="text-gray-500 md:text-sm text-[10px]">
                {item.username}
              </span>
            </div>
          </div>

          {/* External link arrow */}
          <ArrowUpRight size={16} className="text-gray-400" />
        </a>
      ))}
    </div>
  );
}
