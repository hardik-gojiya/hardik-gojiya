import { useEffect, useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          <a href="/">Hardik Gojiya</a>
        </div>
        <nav className="flex gap-4 items-center mt-2 md:mt-0">
          {["Home", "About", "Skills", "Contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setActiveSection(section)}
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
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-2 py-1 border border-gray-400 rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </nav>
      </header>

      <main className="p-6">
        <div id="Home">
          <Home />
        </div>
        <hr />
        <div id="About" className="pt-10">
          <About />
        </div>
        <hr />
        <div id="Skills" className="pt-10">
          <Skills />
        </div>
        <hr />
        <div id="Contact" className="pt-10">
          <Contact />
        </div>
        <hr />
      </main>
    </div>
  );
}

export default App;
