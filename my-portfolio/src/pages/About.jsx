import { FaPython, FaJava } from "react-icons/fa";
import { SiC, SiSqlite, SiJavascript, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const techs = [
    { icon: <FaPython className="text-blue-500 w-12 h-12" />, name: "Python" },
    { icon: <SiC className="text-blue-700 w-12 h-12" />, name: "C++" },
    { icon: <SiSqlite className="text-yellow-500 w-12 h-12" />, name: "SQL" },
    { icon: <FaJava className="text-red-600 w-12 h-12" />, name: "Java" },
    { icon: <SiJavascript className="text-yellow-400 w-12 h-12" />, name: "JavaScript" },
    { icon: <SiTailwindcss className="text-blue-400 w-12 h-12" />, name: "Tailwind" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-20 py-24 transition-colors duration-500
                 bg-gradient-to-b from-gray-100 to-gray-200 
                 dark:from-[#032F30] dark:to-[#0A7075] text-gray-900 dark:text-[#E0F7FA]"
    >
      {/* Section Title */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="text-5xl font-extrabold mb-16 text-center tracking-wide relative"
      >
        About Me
        <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></span>
      </motion.h2>

      <div className="flex flex-col md:flex-row md:space-x-16">
        {/* Personal Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 space-y-8 mb-12 md:mb-0"
        >
          <motion.div
            variants={fadeUp}
            className="bg-white dark:bg-[#0C969C] rounded-xl shadow-xl p-6 transition-colors duration-500"
          >
            <h3 className="text-3xl font-semibold mb-4 border-l-4 border-yellow-500 pl-4">
              Personal Background
            </h3>
            <p className="text-gray-700 dark:text-[#C8E6E6] text-lg leading-relaxed">
              I’m a Full Stack Developer with experience in creating professional web applications.
              I have a strong background in troubleshooting, network configuration, and ML automation.
              I enjoy turning complex problems into simple, elegant solutions.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-white dark:bg-[#274D60] rounded-xl shadow-xl p-6 transition-colors duration-500"
          >
            <h3 className="text-3xl font-semibold mb-4 border-l-4 border-yellow-500 pl-4">
              Professional Skills
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-[#E0F7FA] space-y-2 text-lg">
              <li>Troubleshooting & Problem Solving</li>
              <li>Network Configuration & Management</li>
              <li>ML Automation & Data Processing</li>
              <li>IT System Administration</li>
              <li>Software Development & Debugging</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Tech Skills with Staggered Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1"
        >
          <motion.div
            variants={fadeUp}
            className="bg-white dark:bg-[#6BA3BE] rounded-xl shadow-xl p-6 transition-colors duration-500"
          >
            <h3 className="text-3xl font-semibold mb-6 border-l-4 border-yellow-500 pl-4">
              Tech Tools & Languages
            </h3>
            <motion.div
              variants={container}
              className="grid grid-cols-3 md:grid-cols-4 gap-8 text-center"
            >
              {techs.map((tech, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg 
                             bg-gray-50 dark:bg-[#032F30] hover:scale-105 transition-transform shadow-md cursor-pointer"
                >
                  {tech.icon}
                  <span className="text-gray-700 dark:text-[#E0F7FA] font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
