import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="w-full px-6 py-10 bg-gray-100 dark:bg-gray-900 text-center text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-indigo-600 mb-2">Contact Me</h1>
      <hr className="w-24 mx-auto border-indigo-400 mb-6" />

      <h2 className="text-xl font-semibold mb-4">Follow me on</h2>

      <div className="flex justify-center flex-wrap gap-8 mb-10">
        <SocialLink
          href="https://www.linkedin.com/in/hardik-gojiya-80619a2bb/"
          icon={faLinkedin}
          label="Hardik Gojiya"
          color="text-blue-600"
        />
        <SocialLink
          href="https://github.com/hardik-gojiya"
          icon={faGithub}
          label="@hardik-gojiya"
          color="text-gray-800 dark:text-gray-100"
        />
        <SocialLink
          href="https://www.instagram.com/hardik_ahir.33"
          icon={faInstagram}
          label="@hardik_ahir.33"
          color="text-pink-500"
        />
        <SocialLink
          href="https://t.me/HartAhir"
          icon={faTelegram}
          label="@HardikGojiya_33"
          color="text-blue-400"
        />
      </div>
      <div className="mt-6 mb-5 flex justify-center items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <FontAwesomeIcon icon={faEnvelope} className="text-indigo-600" />
        <a
          href="mailto:hardikgojiya143@gmail.com"
          className="hover:underline text-indigo-400"
        >
          hardikgojiya143@gmail.com
        </a>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
      >
        <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
          Send me a message
        </h3>

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}

function SocialLink({ href, icon, label, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center transition-transform hover:scale-105"
    >
      <FontAwesomeIcon icon={icon} size="2x" className={`${color}`} />
      <div className="text-sm mt-2">{label}</div>
    </a>
  );
}

export default Contact;
