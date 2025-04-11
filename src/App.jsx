import { useEffect, useRef, useState } from "react";
import React from "react";

import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("Home");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = [
      homeRef.current,
      aboutRef.current,
      skillsRef.current,
      contactRef.current,
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth">
      <header className="flex flex-col md:flex-row 2xl:px-20 justify-between items-center p-4 bg-white shadow-md sticky top-0 z-10">
        <div className="text-2xl font-bold text-indigo-600">
          <a href="/">Hardik Gojiya</a>
        </div>
        <nav className="flex gap-4 mt-2 md:mt-0">
          {["Home", "About", "Skills", "Contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setActiveSection(section)}
              className={`text-gray-600 hover:text-indigo-600 font-medium ${
                activeSection === section ? "text-indigo-600 underline" : ""
              }`}
            >
              {section}
            </a>
          ))}
        </nav>
      </header>

      <main className="p-6">
        {/* Home */}
        <div id="Home" ref={homeRef}>
          <Home />
        </div>
        <hr />

        {/* About */}
        <div id="About" ref={aboutRef} className="pt-20">
          <About />
        </div>
        <hr />

        {/* Skills */}
        <div id="Skills" ref={skillsRef} className="pt-20">
          <Skills />
        </div>
        <hr />

        {/* Contact */}
        <div id="Contact" ref={contactRef} className="pt-20">
          <Contact />
        </div>
        <hr />
      </main>
    </div>
  );
}

export default App;
