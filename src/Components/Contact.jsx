import { useRef, useState } from "react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs
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
          (error) => {
            console.error(error);
            alert("Failed to send message. Please try again.");
          }
        );
    } catch (error) {
      console.error(error);
      alert("Failed to execute request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full px-6 py-10 bg-transparent text-center text-gray-800 dark:text-gray-100 transition-all duration-300">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">Contact Me</h1>
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
        className="max-w-xl mx-auto bg-white/40 dark:bg-[#161b22]/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden group z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 blur-xl pointer-events-none -z-10"></div>
        
        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3 relative z-10">
          <span className="w-2 h-8 bg-indigo-500 rounded-full"></span>
          Terminal Input
        </h3>

        <div className="space-y-6 text-left relative z-10">
           <input
             type="text"
             name="user_name"
             placeholder="> user.name"
             required
             className="w-full p-3 border-b-2 border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
           />
           <input
             type="email"
             name="user_email"
             placeholder="> user.email"
             required
             className="w-full p-3 border-b-2 border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
           />
           <textarea
             name="message"
             rows="4"
             placeholder="> user.message..."
             required
             className="w-full p-3 mt-4 border-2 border-gray-300 dark:border-gray-700 bg-black/5 dark:bg-black/20 text-gray-800 dark:text-white focus:outline-none focus:border-indigo-500 rounded-xl transition-colors resize-none"
           ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold uppercase tracking-widest py-4 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300 flex justify-center items-center gap-2 relative z-10 cursor-pointer"
        >
          {isSubmitting ? "Executing..." : "EXECUTE"}
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
