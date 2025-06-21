import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 px-6 md:px-16 mt-10 transition-colors duration-300">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <a
            href="mailto:hardikgojiya143@gmail.com"
            className="text-blue-500 hover:underline"
          >
            Hardik Gojiya
          </a>
          . All rights reserved.
        </p>

        <div className="flex gap-4 justify-center md:justify-end">
          <a
            href="https://www.linkedin.com/in/hardik-gojiya-80619a2bb/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:text-blue-600 transition"
            />
          </a>
          <a
            href="https://github.com/hardik-gojiya"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:text-black dark:hover:text-white transition"
            />
          </a>
          <a
            href="https://www.instagram.com/hardik_ahir.33/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-pink-500 transition"
            />
          </a>
          <a
            href="https://t.me/hartahir/telegram"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
          >
            <FontAwesomeIcon
              icon={faTelegram}
              className="hover:text-blue-500 transition"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
