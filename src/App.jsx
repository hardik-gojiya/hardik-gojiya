import { useState } from "react";
import React from "react";

import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("Home");

  function handleSectionChange(section, event) {
    event.preventDefault();
    setActiveSection(section);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md sticky top-0 z-10">
        <div className="text-2xl font-bold text-indigo-600">
          <a href="/">Hardik Gojiya</a>
        </div>
        <nav className="flex gap-4 mt-2 md:mt-0">
          {["Home", "About", "Skills", "Contact"].map((section) => (
            <a
              key={section}
              href="#"
              onClick={(e) => handleSectionChange(section, e)}
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
        {activeSection === "Home" && <Home />}
        {activeSection === "About" && <About />}
        {activeSection === "Skills" && <Skills />}
        {activeSection === "Contact" && <Contact />}
      </main>
    </div>
  );
}

export default App;
