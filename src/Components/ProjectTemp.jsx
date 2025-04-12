import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectTemp() {
  const projectDetails = [
    {
      title: "Chat App",
      description: "Made using MERN with OTP login and real-time messaging.",
      image: "chatapp-mern.png",
      github: "https://github.com/hardik-gojiya/chatapp-mern",
      deployurl: "https://chat-in-uanp.onrender.com/",
    },
    {
      title: "Note App",
      description: "Made using MERN Stack for user login and secure notes.",
      image: "noteapp-mern.png",
      github: "https://github.com/hardik-gojiya/NoteApp-MERN",
    },
    {
      title: "Small MERN Projects",
      description:
        "Image Resizer, Pdf Merger, File Converter and talk with apis etc...",
      image: "noteapp-mern.png",
      github: "https://github.com/hardik-gojiya/small-mern-projects",
    },
    {
      title: "Backend for Ecommerce platform",
      description: "backend for ecommerce platform using mern",
      image: "noteapp-mern.png",
      github: "https://github.com/hardik-gojiya/ECommerce",
    },
  ];

  return (
    <div className="w-full px-6 py-12 bg-gray-100 text-center">
      <div className="flex flex-wrap justify-center gap-8">
        {projectDetails.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-5 w-full sm:w-[300px] md:w-[340px] border border-indigo-200 hover:border-indigo-400 transition-all duration-300 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>

            <div className="flex flex-col gap-2 items-center">
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
                  className="w-full px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                >
                  Visit Site
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
