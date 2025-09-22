import React from "react";
import "./myStory.css";

export default function MyStory() {
  return (
    <section id="my-story" className="my-story-section">
      <div className="my-story-hero">
        <h2 className="my-story-title">My Story</h2>
        <p className="my-story-hero-line">
          I’m Saim Siddique, a Computer Science student at UMBC who thrives on solving problems and turning ideas into real software.
        </p>
      </div>
      <div className="my-story-cards">
        <div className="my-story-card">
          <h3 className="my-story-card-title">The Spark</h3>
          <p>
            It started in my first year of college when I built a simple browser simulator in C++. Watching my own code replicate something I use every day made me realize software isn’t magic — it’s logic, creativity, and persistence.
          </p>
        </div>
        <div className="my-story-card">
          <h3 className="my-story-card-title">The Build</h3>
          <p>
            From there, I challenged myself with projects like WhoGotNext, a pickup sports app that connected local players, and Debug Dungeon, a gamified debugging platform that turned frustration into fun. At HopHacks 2025, my team placed Top 10 with a health-focused AI app — proving that collaboration and a few sleepless nights can create something powerful.
          </p>
        </div>
        <div className="my-story-card">
          <h3 className="my-story-card-title">The Next Chapter</h3>
          <p>
            Now, I’m focused on growing as a developer through internships where I can build scalable, user-focused systems. My long-term goal is to create software that makes daily life smoother — whether that’s helping someone find a game, debug code, or get healthier.
          </p>
        </div>
      </div>
    </section>
  );
}
