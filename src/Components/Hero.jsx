import React from "react";
import NameWritingEffect from "./NameWritingEffect";

export default function Hero() {
  return (
    <section className="relative w-full h-50 md:h-60 flex items-center justify-center bg-white dark:bg-zinc-900 text-black dark:text-white overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div
          className="
            w-full h-full animate-dotFade
            bg-[radial-gradient(circle,rgba(0,0,0,0.55)_0.65px,transparent_1px)]
            dark:bg-[radial-gradient(circle,rgba(255,255,255,0.35)_0.6px,transparent_1px)]
            bg-size-[20px_20px]
          "
        ></div>
      </div>

      {/* Center-Out Glow Ripple */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="animate-centerGlow w-[40%] h-[40%] rounded-full bg-blue-100 dark:bg-gray-800 blur-7xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <NameWritingEffect />
      </div>
    </section>
  );
}


