import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-4 sm:px-8 max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Skills & Technologies</h2>
      <ul className="flex flex-wrap gap-4">
        <li className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded text-sm sm:text-base">JavaScript</li>
        <li className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded text-sm sm:text-base">TypeScript</li>
        <li className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded text-sm sm:text-base">React</li>
        <li className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded text-sm sm:text-base">Vite</li>
        <li className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded text-sm sm:text-base">Tailwind CSS</li>
        <li className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded text-sm sm:text-base">Node.js</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
}
