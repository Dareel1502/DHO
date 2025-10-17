import {
  FaPython,
  FaJava,
  FaReact,
  FaPhp,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiC,
  SiSqlite,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiLinux,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardHover = {
    hover: {
      y: -5,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  // Technology stack data
  const techStacks = [
    {
      category: "Programming Languages",
      techs: [
        {
          icon: <FaPython className="w-8 h-8 text-blue-600" />,
          name: "Python",
        },
        { icon: <SiC className="w-8 h-8 text-blue-700" />, name: "C++" },
        { icon: <FaJava className="w-8 h-8 text-red-600" />, name: "Java" },
        {
          icon: <SiJavascript className="w-8 h-8 text-yellow-500" />,
          name: "JavaScript",
        },
        { icon: <FaPhp className="w-8 h-8 text-indigo-600" />, name: "PHP" },
      ],
    },
    {
      category: "Web Development",
      techs: [
        { icon: <FaReact className="w-8 h-8 text-cyan-500" />, name: "React" },
        {
          icon: <FaNodeJs className="w-8 h-8 text-green-600" />,
          name: "Node.js",
        },
        {
          icon: <SiExpress className="w-8 h-8 text-gray-600" />,
          name: "Express",
        },
        {
          icon: <SiTailwindcss className="w-8 h-8 text-blue-400" />,
          name: "Tailwind",
        },
      ],
    },
    {
      category: "Databases & Tools",
      techs: [
        {
          icon: <SiMongodb className="w-8 h-8 text-green-500" />,
          name: "MongoDB",
        },
        { icon: <SiSqlite className="w-8 h-8 text-yellow-600" />, name: "SQL" },
        { icon: <SiLinux className="w-8 h-8 text-black" />, name: "Linux" },
        {
          icon: <FaGithub className="w-8 h-8 text-gray-800" />,
          name: "GitHub",
        },
        { icon: <SiFigma className="w-8 h-8 text-pink-500" />, name: "Figma" },
        { icon: <SiCanva className="w-8 h-8 text-sky-500" />, name: "Canva" },
      ],
    },
  ];

  const skills = [
    "Full-Stack Development",
    "System Architecture",
    "Problem Solving & Debugging",
    "Network Configuration",
    "Data Analysis & ML Automation",
    "IT Infrastructure Management",
    "API Development & Integration",
    "Cybersecurity Principles",
  ];

  const quickFacts = [
    { label: "Age", value: "23" },
    { label: "Location", value: "Philippines" },
    { label: "Languages", value: "English, Filipino" },
    { label: "Education", value: "BS in Computer Science" },
    { label: "Status", value: "Open to Opportunities" },
  ];

  return (
    <section id="about" className="min-h-screen px-6 md:px-16 py-16 bg-white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Passionate software engineer with expertise in full-stack development,
          system architecture, and innovative problem-solving
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Personal Info */}
          <div className="lg:w-2/3 space-y-8">
            {/* Personal Background */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-12 bg-blue-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Professional Overview
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm an accomplished{" "}
                <span className="font-semibold text-gray-800">
                  Software Engineer
                </span>{" "}
                with a proven track record of developing robust, scalable
                solutions. My expertise spans full-stack development, system
                architecture, and implementing efficient technical solutions
                that drive business value.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a strong foundation in computer science principles and
                hands-on experience across multiple technology stacks, I
                specialize in transforming complex requirements into elegant,
                maintainable code. I thrive in collaborative environments and am
                committed to continuous learning and professional growth.
              </p>
            </motion.div>

            {/* Skills & Expertise */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-12 bg-blue-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Core Competencies
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-12 bg-blue-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Personal Profile
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {quickFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-100"
                  >
                    <span className="font-medium text-gray-700">
                      {fact.label}
                    </span>
                    <span className="text-gray-900 font-semibold">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Tech Stack */}
          <div className="lg:w-1/3">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm sticky top-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-blue-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Technology Stack
                </h3>
              </div>

              <div className="space-y-8">
                {techStacks.map((stack, stackIndex) => (
                  <div key={stackIndex}>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      {stack.category}
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {stack.techs.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover="hover"
                          variants={cardHover}
                          className="flex flex-col items-center p-4 rounded-lg bg-gray-50 border border-gray-200 cursor-pointer"
                        >
                          {tech.icon}
                          <span className="text-sm font-medium text-gray-700 mt-2 text-center">
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
