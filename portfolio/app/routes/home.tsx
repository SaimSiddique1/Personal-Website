import type { Route } from "./+types/home";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import MyStory from "../components/MyStory";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Saim Siddique | Portfolio" },
    { name: "description", content: "Personal portfolio website for Saim Siddique, Computer Science student and aspiring developer." },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
        <MyStory />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
  <Footer />
    </>
  );
}
