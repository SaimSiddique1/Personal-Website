import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center bg-white dark:bg-gray-950 border-t mt-16 text-sm sm:text-base">
      <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Saim Siddique. All rights reserved.</p>
    </footer>
  );
}
