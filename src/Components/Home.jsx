import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-around px-6 md:px-16 py-10 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="text-center md:text-left space-y-4 md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
          Hello! I'm{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Hardik Gojiya
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
          MERN Stack Developer | Final Year IT Student
        </h2>

        <p className="text-md text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
          I'm a passionate web developer skilled in MongoDB, Express, React, and
          Node.js. As a fresher, I'm actively building real-world projects to
          sharpen my skills and looking forward to starting my professional
          journey in the tech world.
        </p>

        <p className="text-md text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
          I'm open to internships or entry-level roles where I can learn, grow,
          and contribute.
        </p>

        <a
          title="Download Resume"
          href="Copy-of-Hardik-gojiya-resume.pdf"
          download="Hardik_Gojiya_Resume"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow transition duration-300"
        >
          <FontAwesomeIcon icon={faDownload} />
          Download Resume
        </a>

        <div className="flex justify-center md:justify-start gap-6 pt-4 text-indigo-600 dark:text-indigo-400">
          <a
            href="https://www.linkedin.com/in/hardik-gojiya-80619a2bb/"
            target="_blank"
            title="LinkedIn"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="text-blue-600 dark:text-blue-400"
            />
          </a>
          <a
            href="https://github.com/hardik-gojiya"
            target="_blank"
            title="Github"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="text-black dark:text-white"
            />
          </a>
          <a
            href="https://www.instagram.com/hardik_ahir.33/?igsh=eWN3b3lvbjl5cW93"
            target="_blank"
            title="Instagram"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="text-red-600 dark:text-pink-400"
            />
          </a>
          <a
            href="https://t.me/hartahir/telegram"
            target="_blank"
            title="Telegram"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTelegram}
              size="2x"
              className="dark:text-blue-400"
            />
          </a>
        </div>
      </div>

      <div className="mb-6 md:mb-0 md:w-1/2 flex justify-center">
        <img
          src="/my-image.png"
          alt="Profile Picture"
          className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-indigo-500"
        />
      </div>
    </div>
  );
}

export default Home;
