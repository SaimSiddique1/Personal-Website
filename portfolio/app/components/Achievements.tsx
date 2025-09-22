import React from "react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-12 px-4 sm:px-8 max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Achievements</h2>
      <div className="flex flex-col gap-4">
        <div className="p-4 border rounded-lg shadow bg-white dark:bg-gray-900">
          <div className="font-semibold mb-1">HopHacks 2025 | Personal Health Time Machine</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Johns Hopkins University • September 2025</div>
          <ul className="list-disc pl-6 text-base mb-2">
            <li>Built predictive health app using AI + wearable data</li>
            <li>Placed Top 10 out of 100+ teams at Hopkins’s premier hackathon</li>
            <li>Coordinated 36-hour hackathon with teammates using GitHub branches and PRs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
