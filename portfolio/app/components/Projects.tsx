import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 sm:px-8 max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Projects</h2>
      <div className="space-y-6">
        {/* Example project card */}
        <div className="p-6 border rounded-lg shadow bg-white dark:bg-gray-900 transition-all duration-200 hover:scale-[1.02]">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Personal Portfolio Website</h3>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 mb-2">A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.</p>
          <a href="#" className="text-blue-600 hover:underline">View Project</a>
        </div>
        {/* Add more projects here */}
      </div>
    </section>
  );
}
