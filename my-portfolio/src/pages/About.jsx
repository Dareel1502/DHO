import { FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { SiC, SiSqlite, SiJavascript, SiTailwindcss } from "react-icons/si";

export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-20 py-24 transition-colors duration-500
                 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white"
    >
      {/* Title */}
      <h2 className="text-5xl font-extrabold mb-16 text-center tracking-wide relative">
        About Me
        <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></span>
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-16">
        {/* Left Column: Personal Info */}
        <div className="flex-1 space-y-8 mb-12 md:mb-0">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 transition-colors duration-500">
            <h3 className="text-3xl font-semibold mb-4 border-l-4 border-yellow-500 pl-4">
              Personal Background
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I’m a Full Stack Developer with experience in creating professional web applications.
              I have a strong background in troubleshooting, network configuration, and ML automation.
              I enjoy turning complex problems into simple, elegant solutions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 transition-colors duration-500">
            <h3 className="text-3xl font-semibold mb-4 border-l-4 border-yellow-500 pl-4">
              Professional Skills
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-lg">
              <li>Troubleshooting & Problem Solving</li>
              <li>Network Configuration & Management</li>
              <li>ML Automation & Data Processing</li>
              <li>IT System Administration</li>
              <li>Software Development & Debugging</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Tech Skills */}
        <div className="flex-1">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 transition-colors duration-500">
            <h3 className="text-3xl font-semibold mb-6 border-l-4 border-yellow-500 pl-4">
              Tech Tools & Languages
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-8 text-center">
              {[ 
                {icon: <FaPython className="text-blue-500 w-12 h-12" />, name: "Python"},
                {icon: <SiC className="text-blue-700 w-12 h-12" />, name: "C++"},
                {icon: <SiSqlite className="text-yellow-500 w-12 h-12" />, name: "SQL"},
                {icon: <FaJava className="text-red-600 w-12 h-12" />, name: "Java"},
                {icon: <SiJavascript className="text-yellow-400 w-12 h-12" />, name: "JavaScript"},
                {icon: <SiTailwindcss className="text-blue-400 w-12 h-12" />, name: "Tailwind"},
              ].map((tech, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-transform shadow-md cursor-pointer"
                >
                  {tech.icon}
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
