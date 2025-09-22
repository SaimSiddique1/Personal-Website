import React from "react";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-[60vh] text-center py-16 px-4 sm:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4">Hi, I'm Saim Siddique</h1>
      <p className="text-base sm:text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-6">Computer Science Student & Aspiring Developer</p>
      <a href="#projects" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200">View My Work</a>
    </section>
  );
}
