import ProfileImg from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home({ darkMode }) {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 transition-colors duration-500
                 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="text-yellow-500">Daryl Hans Ocao</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
          A passionate <span className="font-semibold">Full Stack Developer</span> 
          with a knack for crafting dynamic, user-friendly, and scalable web applications. 
          Skilled in modern frameworks and always eager to learn emerging technologies.
        </p>

        {/* Personal Summary */}
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0">
          With experience in both frontend and backend development, I enjoy transforming 
          ideas into digital solutions. My focus is on creating intuitive interfaces and 
          building efficient, secure systems that deliver real impact.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a
            href="https://github.com/Dareel150"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-yellow-500 text-yellow-500 dark:text-yellow-400 px-6 py-3 rounded-lg font-medium 
                       hover:bg-yellow-500 hover:text-white dark:hover:text-gray-900 transition"
          >
            View GitHub
          </a>
          <a
            href="/resume.pdf"
            className="border border-yellow-500 text-yellow-500 dark:text-yellow-400 px-6 py-3 rounded-lg font-medium 
                       hover:bg-yellow-500 hover:text-white dark:hover:text-gray-900 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 mt-6 text-2xl text-gray-700 dark:text-gray-300">
          <a
            href="https://github.com/Dareel150"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-yellow-500"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <img
          src={ProfileImg}
          alt="Profile"
          className="w-56 sm:w-64 md:w-72 lg:w-80 h-56 sm:h-64 md:h-72 lg:h-80 rounded-full object-cover shadow-2xl 
                     border-4 border-yellow-500 dark:border-yellow-400 transition-colors duration-500"
        />
      </div>
    </section>
  );
}
