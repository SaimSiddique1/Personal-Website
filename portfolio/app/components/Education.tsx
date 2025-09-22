import React from "react";

export default function Education() {
  return (
    <section id="education" className="py-12 px-4 sm:px-8 max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Education</h2>
      <div className="flex flex-col gap-4">
        <div className="p-4 border rounded-lg shadow bg-white dark:bg-gray-900">
          <div className="font-semibold mb-1">B.S. Computer Science, University of Maryland, Baltimore County</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Expected May 2027</div>
          <div className="text-base">Relevant Coursework: Data Structures, Algorithms, Web Development, Software Engineering</div>
        </div>
        <div className="p-4 border rounded-lg shadow bg-white dark:bg-gray-900">
          <div className="font-semibold mb-1">CodePath</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">San Francisco, CA • August 2025</div>
          <div className="text-base">Intermediate Technical Interview Prep, Internship Connection Program</div>
        </div>
      </div>
    </section>
  );
}
