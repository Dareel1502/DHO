import { FaMoon, FaSun, FaEnvelope } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const sections = ["home", "about", "projects", "contact"];

  const handleScrollTo = (e, section) => {
    e.preventDefault();
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-colors duration-500 shadow-lg
          ${darkMode ? "bg-gray-200 text-gray-900 shadow-gray-400/50" : "bg-gray-900 text-white shadow-black/50"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32">
          <div className="flex items-center justify-between py-6">
            
            {/* Logo */}
            <div className="text-2xl font-bold tracking-widest text-yellow-500 cursor-pointer flex items-center space-x-2">
              <span className={`${darkMode ? "bg-gray-900" : "bg-gray-200"} px-3 py-1 rounded-sm shadow-md`}>D</span>
              <span className={`${darkMode ? "bg-gray-900" : "bg-gray-200"} px-3 py-1 rounded-sm shadow-md`}>H</span>
              <span className={`${darkMode ? "bg-gray-900" : "bg-gray-200"} px-3 py-1 rounded-sm shadow-md`}>O</span>
            </div>

            {/* Nav Links */}
            <ul className="flex-1 flex justify-center items-center space-x-8 md:space-x-12 lg:space-x-16 font-medium tracking-wide">
              {sections.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={(e) => handleScrollTo(e, section)}
                    className={`relative block px-2 py-2 transition duration-300 
                      ${darkMode ? "text-gray-800 hover:text-yellow-500" : "text-gray-200 hover:text-yellow-400"}`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    {/* underline effect */}
                    <span
                      className={`absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 
                        ${darkMode ? "bg-yellow-500" : "bg-yellow-400"} 
                        group-hover:w-full`}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Dark/Light toggle */}
            <div className="flex-shrink-0">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`text-2xl p-3 rounded transition-colors duration-500
                  ${darkMode ? "text-gray-900 hover:bg-gray-300" : "text-white hover:bg-gray-700"}`}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Direct Message Button */}
      <a
        href="mailto:darylhansocao@gmail.com?subject=Hello%20Daryl!"
        className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
        title="Direct Message"
      >
        <FaEnvelope className="w-6 h-6" />
        <span className="font-semibold">Direct Message me here</span>
      </a>
    </>
  );
}
