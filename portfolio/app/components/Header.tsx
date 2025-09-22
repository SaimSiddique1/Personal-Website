import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full py-4 px-4 md:px-8 flex justify-between items-center bg-white dark:bg-gray-950 shadow fixed top-0 left-0 z-50">
      <div className="text-2xl font-bold">Saim Siddique</div>
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#education" className="hover:underline">Education</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <button
        className="md:hidden flex items-center px-2 py-1 border rounded text-gray-700 dark:text-gray-200"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-950 shadow-md flex flex-col items-center py-4 md:hidden">
          <a href="#home" className="py-2 w-full text-center hover:underline" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="py-2 w-full text-center hover:underline" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#education" className="py-2 w-full text-center hover:underline" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#projects" className="py-2 w-full text-center hover:underline" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" className="py-2 w-full text-center hover:underline" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" className="py-2 w-full text-center hover:underline" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
