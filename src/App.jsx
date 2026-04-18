import { useEffect, useRef, useState } from "react";

import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const saved = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(() => {
    return saved !== null ? saved === "true" : true;
  });

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
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
    <div
      className={`min-h-screen scroll-smooth overflow-x-hidden ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <header className="flex flex-col md:flex-row 2xl:px-20 justify-between items-center p-4 backdrop-blur-md bg-white/70 dark:bg-[#0d1117]/80 border-b border-gray-200/50 dark:border-gray-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.1)] sticky top-0 z-50 transition-colors duration-300">
        <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400 tracking-tighter hover:scale-105 transition-transform duration-300 cursor-pointer">
          <a href="/">{"<HardikGojiya />"}</a>
        </div>

        <nav className="flex gap-6 mt-4 md:mt-0 items-center">
           {["Home", "About", "Skills", "Contact"].map((section) => (
             <a
               key={section}
               href={`#${section}`}
               className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:text-indigo-500 hover:shadow-[0_10px_10px_-5px_rgba(16,185,129,0.3)] ${
                 activeSection === section
                   ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500 pb-1"
                   : "text-gray-600 dark:text-gray-400"
               }`}
             >
               {section}
             </a>
           ))}

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="ml-2 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:scale-110 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 border border-gray-300 dark:border-gray-700"
          >
            {darkMode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
