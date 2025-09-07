import { FaPython, FaJava, FaReact, FaPhp, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiC, SiSqlite, SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiLinux, SiFigma, SiCanva } from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  // Expanded Tech Stack
  const techs = [
    { icon: <FaPython className="text-blue-500 w-12 h-12" />, name: "Python" },
    { icon: <SiC className="text-blue-700 w-12 h-12" />, name: "C++" },
    { icon: <SiSqlite className="text-yellow-500 w-12 h-12" />, name: "SQL" },
    { icon: <FaJava className="text-red-600 w-12 h-12" />, name: "Java" },
    { icon: <SiJavascript className="text-yellow-400 w-12 h-12" />, name: "JavaScript" },
    { icon: <SiTailwindcss className="text-blue-400 w-12 h-12" />, name: "Tailwind" },
    { icon: <FaReact className="text-cyan-400 w-12 h-12" />, name: "React (MERN)" },
    { icon: <SiMongodb className="text-green-600 w-12 h-12" />, name: "MongoDB" },
    { icon: <SiExpress className="text-gray-600 w-12 h-12" />, name: "Express" },
    { icon: <FaNodeJs className="text-green-500 w-12 h-12" />, name: "Node.js" },
    { icon: <FaPhp className="text-indigo-600 w-12 h-12" />, name: "PHP (LAMP)" },
    { icon: <SiLinux className="text-black w-12 h-12" />, name: "Linux" },
    { icon: <FaGithub className="text-gray-800 dark:text-white w-12 h-12" />, name: "GitHub" },
    { icon: <SiFigma className="text-pink-500 w-12 h-12" />, name: "Figma" },
    { icon: <SiCanva className="text-sky-500 w-12 h-12" />, name: "Canva" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-20 py-24 transition-colors duration-500 
             bg-gradient-to-b from-gray-50 to-gray-100 
             dark:from-[#0F4C4F] dark:to-[#145B5E] 
             text-gray-900 dark:text-[#E0F7FA]"
    >
      {/* Title */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-5xl font-extrabold mb-16 text-center tracking-wide relative"
      >
        About Me
        <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></span>
      </motion.h2>

      <div className="flex flex-col md:flex-row md:space-x-16">
        {/* Left Side: Personal Info */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1 space-y-8 mb-12 md:mb-0"
        >
          {/* Personal Background */}
          <motion.div variants={fadeUp} className="bg-white dark:bg-[#0C969C] rounded-xl shadow-xl p-6">
            <h3 className="text-3xl font-semibold mb-4 border-l-4 border-yellow-500 pl-4">
              Personal Background
            </h3>
            <p className="text-gray-700 dark:text-[#C8E6E6] text-lg leading-relaxed">
              I’m an <span className="font-bold">aspiring Software Engineer</span> with a strong curiosity for how things work and an eagerness to keep learning every day.  
              I enjoy exploring new technologies, solving problems, and turning ideas into real projects that people can actually use.  
              While I’m still growing in the field, I’m always excited to challenge myself, pick up new skills, and collaborate with others who share the same passion for tech.  
              For me, every step is an opportunity to improve and get closer to becoming the kind of developer who builds meaningful and impactful software.

            </p>
          </motion.div>

          {/* Professional Skills */}
          <motion.div variants={fadeUp} className="bg-white dark:bg-[#274D60] rounded-xl shadow-xl p-6">
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

          {/* Quick Facts */}
          <motion.div variants={fadeUp} className="bg-white dark:bg-[#145B5E] rounded-xl shadow-xl p-6">
            <h3 className="text-3xl font-semibold mb-4 border-l-4 border-yellow-500 pl-4">
              Quick Facts
            </h3>
            <ul className="text-gray-700 dark:text-[#E0F7FA] space-y-2 text-lg">
              <li><span className="font-bold">Age:</span> 23</li>
              <li><span className="font-bold">Languages:</span> English, Filipino</li>
              <li><span className="font-bold">Location:</span> Philippines</li>
              <li><span className="font-bold">Mindset:</span> Lifelong learner, problem solver, and team player</li>
            </ul>
          </motion.div>

          {/* Hobbies */}
          <motion.div variants={fadeUp} className="bg-white dark:bg-[#032F30] rounded-xl shadow-xl p-6">
            <h3 className="text-3xl font-semibold mb-4 border-l-4 border-yellow-500 pl-4">
              Hobbies & Interests
            </h3>
            <p className="text-gray-700 dark:text-[#C8E6E6] text-lg leading-relaxed">
              In my free time, I enjoy playing problem-solving games, programming side projects, 
              and exploring new tech stacks. I’m also deeply curious about learning — whether it’s 
              tech innovations, design tools, or personal growth.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side: Tech Tools */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1"
        >
          <div className="bg-white dark:bg-[#6BA3BE] rounded-xl shadow-xl p-6">
            <h3 className="text-3xl font-semibold mb-6 border-l-4 border-yellow-500 pl-4">
              Tech Tools & Languages
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-3 md:grid-cols-4 gap-8 text-center"
            >
              {techs.map((tech, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg 
                             bg-gray-50 dark:bg-[#032F30] shadow-md cursor-pointer"
                >
                  {tech.icon}
                  <span className="text-gray-700 dark:text-[#E0F7FA] font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
