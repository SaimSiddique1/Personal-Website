import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Saim Siddique. All rights reserved.</p>
      </div>
    </footer>
  );
}
