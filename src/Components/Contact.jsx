import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="w-full px-6 py-10 bg-white text-center">
      <h1 className="text-3xl font-bold text-indigo-600 mb-2">Contact Me</h1>
      <hr className="w-24 mx-auto border-indigo-400 mb-6" />

      <h2 className="text-xl font-semibold text-gray-800 mb-4">Follow me on</h2>

      <div className="flex justify-center flex-wrap gap-8 mb-10">
        <a
          href="https://www.linkedin.com/in/hardik-gojiya-80619a2bb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="text-blue-600"
          />
          <div className="text-sm mt-2">Hardik Gojiya</div>
        </a>

        <a
          href="https://github.com/hardik-gojiya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="text-gray-800"
          />
          <div className="text-sm mt-2">@hardik-gojiya</div>
        </a>

        <a
          href="https://www.instagram.com/hardik_ahir.33"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="text-pink-500"
          />
          <div className="text-sm mt-2">@hardik_ahir.33</div>
        </a>

        <a
          href="https://t.me/hartahir/telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTelegram}
            size="2x"
            className="text-blue-400"
          />
          <div className="text-sm mt-2">@HardikGojiya_33</div>
        </a>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto bg-gray-50 p-6 rounded-xl shadow-md"
      >
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Send me a message
        </h3>

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
