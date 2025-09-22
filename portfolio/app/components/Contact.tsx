import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-4 sm:px-8 max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact</h2>
      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 mb-4">Feel free to reach out via social media or email!</p>
      <ul className="flex flex-wrap gap-6">
        <li><a href="mailto:youremail@example.com" className="text-blue-600 hover:underline">Email</a></li>
        <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener" className="text-blue-600 hover:underline">LinkedIn</a></li>
        <li><a href="https://github.com/yourusername" target="_blank" rel="noopener" className="text-blue-600 hover:underline">GitHub</a></li>
        {/* Add more social links as needed */}
      </ul>
    </section>
  );
}
