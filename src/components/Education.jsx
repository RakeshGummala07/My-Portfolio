"use client";
import React, { useState } from "react";
import { GraduationCap, ChevronUp, ChevronDown } from "lucide-react";

export default function EducationSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const education = [
    {
      college: "Sree Chaitanya College of Engineering, Karimnagar",
      degree: "B.Tech in Electronics and Communication Engineering",
      type: "Full-time",
      duration: "2022 — 2026",
      details: [
        "Specialized in Communication Systems and Signal Processing.",
        "Worked on projects involving DSP, IoT, and Embedded Systems.",
      ],
      skills: ["DSP", "VLSI", "IoT", "Communication Systems", "GPA: 7.83"],
    },
    {
      college: "Vidwan Junior College",
      degree: "Intermediate (MPC)",
      type: "Full-time",
      duration: "2020 — 2022",
      details: [
        "Completed with excellent academic record in Physics, Maths, and Chemistry.",
      ],
      skills: ["Mathematics", "Physics", "Chemistry", "GPA: 7.89 "],
    },
    {
      college: "Froebel Model High School",
      degree: "Secondary School Education (SSC)",
      type: "Full-time",
      duration: "2020",
      details: [
        "Graduated with distinction.",
        "Actively participated in science fairs and tech exhibitions.",
      ],
      skills: ["Leadership", "Science", "Technology", "GPA: 10.0"],
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm p-6 sm:p-8 md:p-10 font-mono text-gray-800 dark:text-gray-100 leading-relaxed">
      <h2 className="text-2xl  font-bold mb-5 border-b border-gray-200 dark:border-zinc-700 pb-2">
        Education
      </h2>

      <div className="relative pl-8 sm:pl-10 border-l-2 border-gray-300 dark:border-zinc-700">
        {/* Curved connecting timeline */}
        <svg
          className="absolute left-[5px] top-0 h-full w-6 text-gray-400 dark:text-zinc-600"
          viewBox="0 0 20 800"
          preserveAspectRatio="none"
        >
          <path
            d="M10 0 C5 150, 15 250, 10 400 S15 550, 10 800"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        {education.map((edu, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="relative mb-10 last:mb-0">
              {/* Timeline glowing icon */}
              <div className="absolute -left-[1.7rem] sm:-left-[2.1rem] flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  {/* Twinkling glow effect */}
                  <span className="absolute w-6 h-6 rounded-full bg-blue-400 opacity-60 blur-sm animate-pulseGlow"></span>

                  {/* Centered blue node */}
                  <div className="w-7 h-7 flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full border border-blue-300 dark:border-blue-700 shadow-md">
                    <GraduationCap size={16} />
                  </div>
                </div>
              </div>

              {/* College Header */}
              <button
                onClick={() => toggleOpen(index)}
                className="w-full flex justify-between items-center text-left group"
              >
                <div>
                  <h3 className="font-bold text-[15px] sm:text-[16px] md:text-[17px] flex items-center gap-2">
                    {edu.college}
                    <span className="text-blue-500 text-[18px] animate-twinkle">
                      •
                    </span>
                  </h3>
                  <p className="text-[13px] sm:text-[14px] font-semibold mt-1">
                    {edu.degree}
                  </p>
                  <p className="text-[12px] sm:text-[13px] text-gray-500 dark:text-gray-400">
                    {edu.type} | {edu.duration}
                  </p>
                </div>

                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                )}
              </button>

              {/* Expandable Details */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen
                    ? "max-h-[500px] opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="list-disc list-inside text-[11px] md:text-[12px] space-y-1">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-3">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[11px] sm:text-[12px] bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-md px-2 py-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
