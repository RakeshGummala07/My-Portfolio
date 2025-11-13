import React from "react";



export default function Container({ children }) {
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-900 min-h-screen  transition-colors duration-300">
      {children}
    </div>
  );
}
