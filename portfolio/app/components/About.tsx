import React from "react";

export default function About() {
  return (
    <section id="about" className="py-12 px-4 sm:px-8 max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>
      <p className="text-base sm:text-lg mb-4">Hi, I'm <b>Saim Siddique</b>, a Computer Science student at UMBC (University of Maryland, Baltimore County), passionate about building impactful software and solving real-world problems. I love collaborating on projects, learning new technologies, and contributing to research and hackathons.</p>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        <ul className="list-disc pl-6">
          <li>B.S. in Computer Science, UMBC, Expected May 2027</li>
          <li>Relevant Courses: Data Structures and Algorithms, OOP, Computer Architecture, Operating Systems, Security, Linear Algebra, Discrete Math, Assembly, Statistics</li>
          <li>CodePath: Intermediate Technical Interview Prep, Internship Connection Program (Aug 2025)</li>
        </ul>
      </div>
    </section>
  );
}
