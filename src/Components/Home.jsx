import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    // <div className="home-main">
    //   <div className="home-1-txt">
    //     <h1>Hii,</h1>
    //     <h1>i'm Hardik Gojiya</h1>
    //     <h1> As a Web Developer</h1>
    //     <a
    //       title="Resume Download"
    //       className="resume-download"
    //       href="my-image.png"
    //       download="Hardik's resume"
    //     >
    //       Resume
    //       <FontAwesomeIcon icon={faDownload} />
    //     </a>
    //     <div className="home-contacts">
    //       <a
    //         href="https://www.linkedin.com/in/hardik-gojiya-80619a2bb/"
    //         target="_blank"
    //         title="LinkedIn"
    //       >
    //         <FontAwesomeIcon icon={faLinkedin} size="2x" />
    //       </a>
    //       <a
    //         href="https://github.com/hardik-gojiya"
    //         target="_blank"
    //         title="Github"
    //       >
    //         <FontAwesomeIcon icon={faGithub} size="2x" />
    //       </a>
    //       <a
    //         href="https://www.instagram.com/hardik_ahir.33/?igsh=eWN3b3lvbjl5cW93"
    //         target="_blank"
    //         title="Instagram"
    //       >
    //         <FontAwesomeIcon icon={faInstagram} size="2x" />
    //       </a>
    //       <a
    //         href="https://t.me/hartahir/telegram"
    //         target="_blank"
    //         title="Telegram"
    //       >
    //         <FontAwesomeIcon icon={faTelegram} size="2x" />
    //       </a>
    //     </div>
    //   </div>
    //   <div title="Profile Picture" className="home-2-txt">
    //     <img src="my-image.png" alt="Profile Picture" />
    //   </div>
    // </div>
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gray-100 min-h-screen">
      {/* Text Section */}
      <div className="text-center md:text-left space-y-4 md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-800">Hi,</h1>
        <h1 className="text-4xl font-bold text-indigo-600">I'm Hardik Gojiya</h1>
        <h2 className="text-2xl text-gray-700">As a Web Developer</h2>

        <a
          title="Resume Download"
          href="my-image.png"
          download="Hardik's resume"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Resume <FontAwesomeIcon icon={faDownload} />
        </a>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 pt-4 text-indigo-600">
          <a
            href="https://www.linkedin.com/in/hardik-gojiya-80619a2bb/"
            target="_blank"
            title="LinkedIn"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/hardik-gojiya"
            target="_blank"
            title="Github"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/hardik_ahir.33/?igsh=eWN3b3lvbjl5cW93"
            target="_blank"
            title="Instagram"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://t.me/hartahir/telegram"
            target="_blank"
            title="Telegram"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTelegram} size="2x" />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="mb-6 md:mb-0 md:w-1/2 flex justify-center">
        <img
          src="my-image.png"
          alt="Profile Picture"
          className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-indigo-500"
        />
      </div>
    </div>
  );
}

export default Home;
