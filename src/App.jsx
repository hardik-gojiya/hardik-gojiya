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
      className={`min-h-screen scroll-smooth ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <header className="flex flex-col md:flex-row 2xl:px-20 justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          <a href="/">Hardik Gojiya</a>
        </div>

        <nav className="flex gap-4 mt-2 md:mt-0 items-center">
          {["Home", "About", "Skills", "Contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`font-medium ${
                activeSection === section
                  ? "text-indigo-600 underline dark:text-indigo-400"
                  : "text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
              }`}
            >
              {section}
            </a>
          ))}

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="ml-4 px-2 py-1 border border-gray-400 rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
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
