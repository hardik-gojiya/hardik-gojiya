import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faTimes,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

// Modal Component
const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  // Use array of images if available, otherwise just use the single main image
  const images = project.images || [project.image];
  const hasMultipleImages = images.length > 1;

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-start md:items-center p-4 md:p-6 bg-black/60 backdrop-blur-sm transition-opacity overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-3xl rounded-3xl w-full max-w-5xl h-auto md:h-[85vh] my-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row relative transform transition-all border border-gray-200/50 dark:border-gray-700/50 overflow-hidden shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all shadow-lg border border-white/10"
        >
          <FontAwesomeIcon icon={faTimes} className="text-xl" />
        </button>

        {/* Left Side: Single Image Carousel */}
        <div className="w-full flex-shrink-0 min-h-[300px] sm:min-h-[400px] md:min-h-0 md:w-[45%] lg:w-[50%] md:h-full bg-gray-100 dark:bg-[#080b0f] relative border-b md:border-b-0 md:border-r border-gray-200/50 dark:border-gray-700/50 group flex flex-col items-center justify-center overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt={`${project.title} preview ${currentImageIndex + 1}`}
            className="max-w-full max-h-full object-contain m-auto p-4 md:p-8 transition-opacity duration-300 animate-in fade-in"
          />

          {/* Carousel Controls */}
          {hasMultipleImages && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 z-10"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="mr-0.5" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 z-10"
              >
                <FontAwesomeIcon icon={faChevronRight} className="ml-0.5" />
              </button>
            </>
          )}
          {/* Image Indicators */}
          {hasMultipleImages && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all shadow-sm ${
                    i === currentImageIndex
                      ? "bg-indigo-500 scale-125"
                      : "bg-white/70 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Details */}
        <div className="w-full h-auto p-6 md:p-8 lg:p-10 flex flex-col md:w-[55%] lg:w-[50%] md:overflow-y-auto custom-scrollbar">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-100 dark:border-gray-700">
            {project.title}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg whitespace-pre-line">
            {project.description}
          </p>

          <div className="mb-10">
            <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Core Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {project.tech?.map((tech, i) => (
                <span
                  key={i}
                  className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/50 px-4 py-2 rounded-xl text-sm font-semibold shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 bg-gray-900 hover:bg-black text-white dark:bg-gray-700 dark:hover:bg-gray-600 rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
              >
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
                Source Code
              </a>
            )}
            {project.deployurl && (
              <a
                href={project.deployurl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg hover:shadow-indigo-500/25"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-lg" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function ProjectTemp() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const projectDetails = [
    {
      title: "OreChat - AI Chatbot SaaS Platform",
      description:
        "OreChat is a real-time AI chatbot SaaS platform that allows businesses to deploy intelligent chat assistants on their websites. It combines automated AI responses directly powered by OpenAI & Google Gemini with seamless human-agent takeover.\n\nKey features include an intelligent knowledge-base query matcher, live chat widget injection via iframe, and a highly scalable Node/Socket.io backend crafted for high-performance production environments.",
      image: "/orechat/Screenshot 2026-03-30 110308.png",
      images: [
        "/orechat/Screenshot 2026-03-30 110308.png",
        "/orechat/Screenshot 2026-03-30 111401.png",
        "/orechat/Screenshot 2026-03-30 111923.png",
        "/orechat/Screenshot 2026-03-30 111949.png",
        "/orechat/Screenshot 2026-03-30 112130.png",
        "/orechat/Screenshot 2026-03-30 112247.png",
        "/orechat/Screenshot 2026-03-30 112255.png",
        "/orechat/Screenshot 2026-03-30 112349.png",
        "/orechat/Screenshot 2026-03-30 112421.png",
      ],
      github: "",
      deployurl: "https://orechat-dashboard.vercel.app/",
      tech: [
        "React (Vite)",
        "Node.js",
        "Express.js",
        "Socket.io",
        "MongoDB",
        "Redis",
        "BullMQ",
        "Google Gemini",
        "Cloudinary",
        "JWT",
        "Tailwind CSS",
        "Pincode"
      ],
    },
    {
      title: "Chat App",
      description:
        "Made using MERN with OTP login and real-time messaging.\n\nThis application focuses on delivering seamless real-time communication between users, with a robust backend architecture ensuring data consistency and fast delivery times. Security is prioritized using OTP-based authentication.",
      image: "chatapp-mern.png",
      images: ["chatapp-mern.png"], // Add more real images here later
      github: "https://github.com/hardik-gojiya/chatapp-mern",
      deployurl: "https://chatapp-mern-ck4w.onrender.com/",
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
        "A modern full-featured blogging platform built with MERN stack, featuring real-time comments, rich text editor, like/save system, voice reading, and more.\n\nWritly offers writers a beautiful canvas to share their thoughts and readers an engaging environment to interact.",
      image: "writly.png",
      images: ["writly.png"],
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
      description:
        "Made using MERN Stack for user login and secure notes.\n\nA great utility for managing personal snippets and tasks securely stored on the cloud.",
      image: "noteapp-mern.png",
      images: ["noteapp-mern.png"],
      github: "https://github.com/hardik-gojiya/NoteApp-MERN",
      tech: ["Node.js", "React", "Express", "MongoDB", "JWT"],
    },
    {
      title: "Small MERN Projects",
      description:
        "An aggregation of various small utilites including an Image Resizer, Pdf Merger, File Converter, and API handlers.\n\nDemonstrates diverse backend capabilities using Node.js modules and third-party API integrations.",
      image: "noteapp-mern.png",
      images: ["noteapp-mern.png"],
      github: "https://github.com/hardik-gojiya/small-mern-projects",
      tech: ["MERN", "PDF-lib", "Sharp", "External APIs"],
    },
    {
      title: "Ecommerce platform",
      description:
        "A comprehensive e-commerce platform built using the MERN stack.\n\nFeatures include product listings, a shopping cart, secure checkout, and JWT-secured user sessions for a seamless shopping experience.",
      image: "EcommerceProject.png",
      images: ["EcommerceProject.png"],
      github: "https://github.com/hardik-gojiya/ECommerce",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    },
  ];

  return (
    <div className="w-full py-16 text-center transition-colors duration-300">
      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-8">
        {projectDetails.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white/60 dark:bg-[#161b22]/60 backdrop-blur-xl rounded-[2rem] p-6 w-full sm:w-[320px] md:w-[360px] border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-400/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Card Content Top */}
            <div>
              <div className="overflow-hidden rounded-[1.5rem] mb-6 relative shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem] flex items-end p-5">
                  <span className="text-white font-bold tracking-widest text-xs uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Explore Project
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-left">
                {project.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 text-left line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech?.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-lg text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech?.length > 3 && (
                  <span className="bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-lg text-xs font-bold">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Card Action */}
            <button
              onClick={() => setSelectedProject(project)}
              className="w-full py-4 mt-4 border-t border-gray-200/50 dark:border-gray-700/50 bg-transparent text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-between transition-all group-hover:text-indigo-700 dark:group-hover:text-indigo-300"
            >
              <span className="tracking-wide uppercase text-sm">
                View Details
              </span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-md transform group-hover:translate-x-2 transition-transform duration-300"
              />
            </button>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default ProjectTemp;
