import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">SS</div>
        <div className="text-2xl font-bold">Saim Siddique</div>
      </div>

      <nav className="hidden md:flex site-nav items-center space-x-2">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
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
        <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-md flex flex-col items-center py-4 md:hidden">
          <a href="#home" className="py-2 w-full text-center" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="py-2 w-full text-center" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#education" className="py-2 w-full text-center" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#projects" className="py-2 w-full text-center" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" className="py-2 w-full text-center" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" className="py-2 w-full text-center" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
