import { useState, useEffect } from "react";
import {
  FaHome,
  FaBriefcase,
  FaProjectDiagram,
  FaUser,
  FaAward,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaCogs,
  FaStar,
} from "react-icons/fa";
import ProfileImg from "../assets/profile.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: <FaHome className="w-5 h-5" /> },
    {
      id: "services",
      label: "Services",
      icon: <FaCogs className="w-5 h-5" />,
    },
    {
      id: "experience",
      label: "Experience",
      icon: <FaBriefcase className="w-5 h-5" />,
    },
    { id: "about", label: "About", icon: <FaUser className="w-5 h-5" /> },
    {
      id: "certificates",
      label: "Certificates",
      icon: <FaAward className="w-5 h-5" />,
    },
    {
      id: "recommendations",
      label: "Recommendations",
      icon: <FaStar className="w-5 h-5" />,
    },
    {
      id: "contact",
      label: "Contact",
      icon: <FaEnvelope className="w-5 h-5" />,
    },
  ];

  const handleScrollTo = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled for mobile header background
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Header */}
      <div
        className={`
        fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300
        ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
      >
        <div className="flex items-center justify-between p-4">
          {/* Mobile Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md">
              <img
                src={ProfileImg}
                alt="Daryl Hans Ocao"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            {isScrolled && (
              <div>
                <h1 className="text-sm font-bold text-gray-900">
                  Daryl Hans Ocao
                </h1>
                <p className="text-xs text-gray-500">
                  Software Engineer | Virtual Assistant
                </p>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            {isOpen ? (
              <FaTimes className="w-4 h-4" />
            ) : (
              <FaBars className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navigation Sidebar */}
      <nav
        className={`
        fixed top-0 left-0 h-full z-50 bg-white border-r border-gray-200 shadow-xl
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:w-72
        w-80
      `}
      >
        {/* Logo Section with Profile Picture */}
        <div className="p-8 border-b border-gray-200 bg-gradient-to-br from-gray-50 to-white">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden border-2 border-white">
                <img
                  src={ProfileImg}
                  alt="Daryl Hans Ocao"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-bold text-gray-900">
                Daryl Hans Ocao
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Software Engineer | Virtual Assistant
              </p>
              <div className="flex items-center mt-2 space-x-3">
                <a
                  href="https://www.linkedin.com/in/daryl-hans-ocao-b74774378/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/Dareel1502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="p-6 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
              className={`
                flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-200 group
                ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600 shadow-sm border border-blue-100"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm"
                }
              `}
            >
              <div
                className={`
                transition-all duration-200
                ${
                  activeSection === item.id
                    ? "text-blue-600 transform scale-110"
                    : "text-gray-400 group-hover:text-gray-600"
                }
              `}
              >
                {item.icon}
              </div>
              <span className="font-medium">{item.label}</span>
              {activeSection === item.id && (
                <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              )}
            </a>
          ))}
        </div>

        {/* Contact Info Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
          <div className="space-y-3">
            <a
              href="mailto:darylhansocao@gmail.com"
              className="flex items-center space-x-3 text-sm text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <FaEnvelope className="w-3 h-3 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900">Get in touch</p>
                <p className="text-xs text-gray-500 truncate">
                  darylhansocao@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content Offset for Desktop */}
      <div className="md:ml-72">{/* Your page content goes here */}</div>

      {/* Floating Action Button for Mobile */}
      <a
        href="mailto:darylhansocao@gmail.com"
        className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors transform hover:scale-110"
      >
        <FaEnvelope className="w-6 h-6" />
      </a>
    </>
  );
}
