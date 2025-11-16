import React from 'react'

export default function Hero() {
  return (
    // <div className='h-50 w-full border border-amber-600 my-2 '>
      <section className="relative w-full h-60 flex items-center justify-center  bg-white dark:bg-zinc-900 text-black dark:text-white">
      
      {/* Background Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 70 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-glow-dot"
            style={{
              width: "6px",
              height: "6px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: "rgb(180,180,180)",
              boxShadow: `
                0 0 6px rgba(180,180,180,0.8),
                0 0 12px rgba(180,180,180,0.6)
              `,
              animationDelay: `${Math.random() * 4}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Dark mode enhanced dots */}
      <div className="absolute inset-0 pointer-events-none dark:block hidden">
        {Array.from({ length: 70 }).map((_, i) => (
          <span
            key={`dark-${i}`}
            className="absolute rounded-full animate-glow-dot"
            style={{
              width: "6px",
              height: "6px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: "rgb(120,120,140)",
              boxShadow: `
                0 0 8px rgba(120,120,255,0.8),
                0 0 16px rgba(120,120,255,0.5)
              `,
              animationDelay: `${Math.random() * 4}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Rakesh</span>
        </h1>
        <p className="text-lg opacity-80 max-w-xl mx-auto">
          A Full Stack Developer who builds clean and modern web experiences.
        </p>
      </div>
    </section>
    // </div>
  )
}
