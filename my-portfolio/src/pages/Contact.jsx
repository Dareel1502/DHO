import { FaLinkedin, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-500
                 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white"
    >
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>

      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center tracking-wide">
        Contact Me
      </h2>
      <p className="text-lg md:text-xl mb-12 text-center text-gray-700 dark:text-gray-300 max-w-2xl">
        I’m open to exciting opportunities. Let’s connect and build something amazing together!
      </p>

      {/* Email Card */}
      <div className="flex items-center space-x-3 mb-12 bg-white dark:bg-gray-800 shadow-lg rounded-xl px-6 py-4 transform transition-transform duration-300 hover:scale-105">
        <HiOutlineMail className="w-6 h-6 text-yellow-500" />
        <a
          href="mailto:yourname@example.com"
          className="text-gray-900 dark:text-gray-200 hover:text-yellow-500 font-medium text-lg md:text-xl transition-colors duration-300"
        >
          yourname@example.com
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-8">
        {[
          { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourprofile", hover: "hover:text-blue-600" },
          { icon: <FaFacebook />, link: "https://facebook.com/yourprofile", hover: "hover:text-blue-500" },
          { icon: <FaInstagram />, link: "https://instagram.com/yourprofile", hover: "hover:text-pink-500" },
          { icon: <FaTelegram />, link: "https://t.me/yourprofile", hover: "hover:text-blue-400" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-800 dark:text-gray-200 transition-transform duration-300 text-3xl md:text-4xl transform hover:scale-125 ${item.hover}`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
