import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const sections = ["home", "about", "projects", "contact"];

  const handleScrollTo = (e, section) => {
    e.preventDefault();
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // close mobile menu after click
    }
  };

  // Auto bubble effect every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 3000); // show 3s
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 shadow-lg
          bg-gradient-to-r ${
            darkMode
              ? "from-gray-900 via-gray-800 to-gray-900 text-white"
              : "from-yellow-50 via-white to-yellow-50 text-gray-900"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="text-2xl font-extrabold tracking-widest text-yellow-500 cursor-pointer flex items-center space-x-2">
              <span
                className={`${
                  darkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
                } px-2 py-1 rounded shadow-md`}
              >
                D
              </span>
              <span
                className={`${
                  darkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
                } px-2 py-1 rounded shadow-md`}
              >
                H
              </span>
              <span
                className={`${
                  darkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
                } px-2 py-1 rounded shadow-md`}
              >
                O
              </span>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex flex-1 justify-center items-center space-x-8 font-medium">
              {sections.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={(e) => handleScrollTo(e, section)}
                    className={`relative px-2 py-2 transition duration-300 hover:text-yellow-500`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    <span
                      className={`absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 hover:w-full`}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Dark/Light toggle + Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-2xl p-2 rounded-full hover:bg-yellow-500 hover:text-white transition-colors"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              <button
                className="md:hidden text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`md:hidden px-6 pb-6 space-y-4 font-medium ${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            }`}
          >
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => handleScrollTo(e, section)}
                className="block px-2 py-2 rounded hover:text-yellow-500"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Direct Message Button + Auto Chat */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
        {/* Chat bubble */}
        {showBubble && (
          <div
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-2xl shadow-xl max-w-xs
                       animate-[wiggle_0.5s_ease-in-out_infinite]"
          >
            <p className="font-semibold text-yellow-600">👋 Hey, I’m Daryl!</p>
            <p className="text-sm">Aspiring Python Dev | IT Enthusiast</p>
            <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
              Click below to connect 📩
            </p>
          </div>
        )}

         {/* Message button */}
           <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=darylhansocao@gmail.com&su=For%20Application"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            title="Direct Message"
>
            <FaEnvelope className="w-6 h-6 animate-bounce" />
            <span className="font-semibold hidden sm:inline">Message Me</span>
          </a>
      </div>

      {/* Wiggle animation */}
      <style>
        {`
          @keyframes wiggle {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
          }
        `}
      </style>
    </>
  );
}
