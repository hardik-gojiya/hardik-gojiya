import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function ProjectTemp() {
  const projectDetails = [
    {
      title: "Chat App",
      description: "Made using MERN with OTP login and real-time messaging.",
      image: "/hardikgojiya/chatapp-mern.png",
      github: "https://github.com/hardik-gojiya/chatapp-mern",
      deployurl: "https://chat-in-uanp.onrender.com/",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "OTP Auth",
        "Tailwind CSS",
      ],
    },
    {
      title: "Writly - Blogging Platform",
      description:
        "A modern full-featured blogging platform built with MERN stack, featuring real-time comments, rich text editor, like/save system, voice reading, and more.",
      image: "/hardikgojiya/writly.png",
      github: "https://github.com/hardik-gojiya/blogging-platform",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "RichTextEditor",
        "Tailwind CSS",
        "SpeechSynthesis API",
      ],
    },

    {
      title: "Note App",
      description: "Made using MERN Stack for user login and secure notes.",
      image: "/hardikgojiya/noteapp-mern.png",
      github: "https://github.com/hardik-gojiya/NoteApp-MERN",
      tech: ["Node.js", "React", "Express", "MongoDB", "JWT"],
    },
    {
      title: "Small MERN Projects",
      description:
        "Image Resizer, Pdf Merger, File Converter and talk with apis etc...",
      image: "/hardikgojiya/noteapp-mern.png",
      github: "https://github.com/hardik-gojiya/small-mern-projects",
      tech: ["MERN", "PDF-lib", "Sharp", "External APIs"],
    },
    {
      title: "Ecommerce platform",
      description: "ecommerce platform using MERN.",
      image: "/hardikgojiya/EcommerceProject.png",
      github: "https://github.com/hardik-gojiya/ECommerce",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    },
  ];

  return (
    <div className="w-full md:px-6 px-0 py-12 bg-gray-100 dark:bg-gray-900 text-center transition-colors duration-300">
      <div className="flex flex-wrap justify-center gap-8">
        {projectDetails.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-5 w-full sm:w-[300px] md:w-[340px] border border-indigo-200 dark:border-indigo-500 hover:border-indigo-400 transition-all duration-300 hover:shadow-2xl flex flex-col" // 🔥 Added flex-col
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              {project.tech?.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2.5 py-0.5 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-4 flex gap-2 items-center">
              {" "}
              {/* 🔥 mt-auto pushes to bottom */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faGithub} />
                View Code
              </a>
              {project.deployurl && (
                <a
                  href={project.deployurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Visit Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectTemp;
