import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero-bg flex flex-col items-center justify-center min-h-[60vh] text-center py-16 px-4 sm:px-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4">Hi, I'm Saim Siddique</h1>
        <p className="lead text-base sm:text-lg md:text-2xl mb-6">Computer Science student focused on full-stack web development, performance, and accessible interfaces.</p>
        <div className="flex justify-center">
          <a href="#projects" className="btn-primary">View My Work</a>
        </div>
      </div>
    </section>
  );
}
