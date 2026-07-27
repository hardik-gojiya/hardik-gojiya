import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-around px-6 md:px-16 py-10 bg-transparent min-h-screen transition-all duration-300 overflow-hidden relative">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 dark:bg-indigo-900/20 rounded-full blur-[100px] -z-10 animate-pulse-glow"></div>
      
      <div className="text-center md:text-left space-y-6 md:w-1/2 z-10 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-black text-gray-800 dark:text-white leading-tight tracking-tight">
          Hello! I’m <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 decoration-gray-500/50 decoration-2">
            Hardik Gojiya
          </span>
        </h1>

        <h2 className="text-xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 border-l-4 border-indigo-500 pl-4 py-1">
          MERN Stack / Node.js Developer
        </h2>

        <p className="text-md text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed font-light">
          &gt; I’m a passionate web developer skilled in MongoDB, Express, React, and Node.js. 
          As a fresher, I’m actively building real-world projects to sharpen my skills.
          <br/><br/>
          &gt; Exploring internships or entry-level roles where I can learn, grow, and ship scalable products.
        </p>

        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <a
            title="Download Resume"
            href="Copy-of-Hardik-gojiya-resume.pdf"
            download="Hardik_Gojiya_Resume"
            className="inline-flex items-center gap-2 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] rounded-xl font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faDownload} />
            Resume
          </a>
          <a
            href="https://drive.google.com/file/d/1a7bW30J8eck1RFhyGsZziKf7D3L4N9aH/view?usp=sharing"
            target="_blank"
            title="See Resume"
            className="inline-flex items-center justify-center w-12 h-12 bg-transparent border-2 border-indigo-600 hover:bg-indigo-600 text-indigo-600 dark:text-indigo-400 hover:text-white dark:hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] rounded-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faEye} />
          </a>
        </div>

        <div className="flex justify-center md:justify-start gap-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <SocialLink href="https://www.linkedin.com/in/hardik-gojiya-80619a2bb/" icon={faLinkedin} />
          <SocialLink href="https://github.com/hardik-gojiya" icon={faGithub} />
          <SocialLink href="https://www.instagram.com/hardik_ahir.33/?igsh=eWN3b3lvbjl5cW93" icon={faInstagram} />
          <SocialLink href="https://t.me/hartahir/telegram" icon={faTelegram} />
        </div>
      </div>

      <div className="mb-10 md:mb-0 md:w-1/2 flex justify-center z-10 animate-float">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          {/* <img
            src="/my-image.png"
            alt="Profile Picture"
            className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border border-gray-600/50 bg-[#0d1117] transition-transform duration-500 group-hover:scale-105"
          /> */}
        </div>
      </div>
    </div>
  );
}

function SocialLink({href, icon}) {
   return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-125 transition-all duration-300 drop-shadow-[0_0_0_rgba(16,185,129,0)] hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">
        <FontAwesomeIcon icon={icon} size="2x" />
      </a>
   )
}

export default Home;
