import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Sample project images (replace with your actual images)
import donation1 from "../assets/donation1.png";
import donation2 from "../assets/donation2.png";
import donation3 from "../assets/donation3.png";
import donation4 from "../assets/donation4.png";
import donation5 from "../assets/donation5.png";
import donation6 from "../assets/donation6.png";

import lgu1 from "../assets/lgu1.png";
import lgu2 from "../assets/lgu2.png";
import lgu3 from "../assets/lgu3.png";
import lgu4 from "../assets/lgu4.png";

import Movie1 from "../assets/Movie1.png";
import Movie2 from "../assets/Movie2.png";

import quiz1 from "../assets/quiz1.png";

const projectsData = [
  {
    id: 1,
    title: "Donation Platform",
    subtitle: "Web & Mobile Application System",
    type: "Full-Stack Development",
    description:
      "A comprehensive donation platform supporting multiple devices with user dashboard, admin management system, and real-time notifications for seamless donation tracking and management.",
    year: "2023",
    images: [donation1, donation2, donation3, donation4, donation5, donation6],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
    githubUrl: "https://github.com/Dareel1502",
    liveUrl: "#",
    deviceType: "both", // Shows both mobile and laptop
  },
  {
    id: 2,
    title: "Risk Reduction Management System",
    subtitle: "LGU Disaster Planning Platform",
    type: "Web & Mobile Application",
    description:
      "A comprehensive management system for Local Government Units to handle risk reduction and disaster planning with interactive reports, real-time data, and mobile accessibility.",
    year: "2024-2025",
    images: [lgu1, lgu2, lgu3, lgu4],
    technologies: ["React Native", "Python", "PostgreSQL", "AWS", "Django"],
    githubUrl: "https://github.com/Dareel1502",
    liveUrl: "#",
    deviceType: "both", // Shows both mobile and laptop
  },
  {
    id: 3,
    title: "Movie Recommender System",
    subtitle: "Machine Learning Automation",
    type: "Data Science & Web Development",
    description:
      "An intelligent movie recommendation website leveraging machine learning algorithms to provide personalized suggestions based on user preferences and viewing history.",
    year: "2025",
    images: [Movie1, Movie2],
    technologies: ["Python", "Scikit-learn", "Flask", "Pandas", "React"],
    githubUrl: "https://github.com/Dareel1502",
    liveUrl: "#",
    deviceType: "both", // Shows both mobile and laptop
  },
  {
    id: 4,
    title: "Quiz Game Application",
    subtitle: "Desktop Gaming Platform",
    type: "Stand-Alone Application",
    description:
      "A feature-rich desktop quiz game developed using Python Pygame with multiple-choice questions, scoring system, and interactive gameplay mechanics.",
    year: "2025",
    images: [quiz1],
    technologies: ["Python", "Pygame", "SQLite", "Tkinter"],
    githubUrl: "https://github.com/Dareel1502",
    liveUrl: null,
    deviceType: "laptop", // Shows only laptop
  },
];

export default function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Auto slideshow
  useEffect(() => {
    const intervals = {};
    projectsData.forEach((project) => {
      intervals[project.id] = setInterval(() => {
        setCurrentImageIndex((prev) => ({
          ...prev,
          [project.id]: (prev[project.id] + 1 || 0) % project.images.length,
        }));
      }, 4000);
    });
    return () => Object.values(intervals).forEach(clearInterval);
  }, []);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
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
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardHover = {
    hover: {
      y: -8,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const deviceHover = {
    hover: { scale: 1.05, y: -5 },
  };

  // Enhanced Device Mockup Components
  const LaptopMockup = ({ image, alt, className = "" }) => (
    <div className={`relative mx-auto ${className}`}>
      {/* Laptop Frame */}
      <div className="relative bg-gray-800 rounded-xl pt-4 px-10 pb-8 shadow-2xl">
        {/* Laptop Top Bezel */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gray-700 rounded-t-lg"></div>

        {/* Webcam */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-600 rounded-full"></div>

        {/* Screen */}
        <div className="bg-gray-900 rounded-lg border-4 border-gray-700 overflow-hidden shadow-inner">
          <motion.img
            src={image}
            alt={alt}
            className="w-full h-52 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Keyboard Area */}
        <div className="mt-4 h-3 bg-gray-700 rounded-lg shadow-lg"></div>
        {/* Trackpad */}
        <div className="mt-2 mx-auto w-16 h-1 bg-gray-600 rounded-full"></div>
      </div>
    </div>
  );

  const MobileMockup = ({ image, alt, className = "" }) => (
    <div className={`relative mx-auto ${className}`}>
      {/* Mobile Frame */}
      <div className="relative bg-gray-800 rounded-[3rem] p-4 shadow-2xl border-4 border-gray-700">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-10">
          {/* Speaker */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
        </div>

        {/* Screen */}
        <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden aspect-[9/19] border-2 border-gray-600">
          <motion.img
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-600 rounded-full"></div>

        {/* Side Buttons */}
        <div className="absolute top-1/4 -left-1 w-1 h-12 bg-gray-700 rounded-l-lg"></div>
        <div className="absolute top-1/3 -left-1 w-1 h-8 bg-gray-700 rounded-l-lg"></div>
        <div className="absolute top-2/3 -right-1 w-1 h-16 bg-gray-700 rounded-r-lg"></div>
      </div>
    </div>
  );

  const DeviceDisplay = ({ project, currentIdx }) => {
    const currentImage = project.images[currentIdx];

    if (project.deviceType === "laptop") {
      return (
        <div className="flex justify-center">
          <motion.div variants={deviceHover} whileHover="hover">
            <LaptopMockup
              image={currentImage}
              alt={project.title}
              className="scale-110"
            />
          </motion.div>
        </div>
      );
    }

    // For mobile and laptop projects
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        {/* Mobile Mockup */}
        <motion.div
          variants={deviceHover}
          whileHover="hover"
          className="order-2 lg:order-1 transform scale-95 lg:scale-100"
        >
          <MobileMockup
            image={currentImage}
            alt={`${project.title} Mobile`}
            className="w-48"
          />
        </motion.div>

        {/* Laptop Mockup */}
        <motion.div
          variants={deviceHover}
          whileHover="hover"
          className="order-1 lg:order-2 transform scale-95 lg:scale-100"
        >
          <LaptopMockup
            image={currentImage}
            alt={`${project.title} Desktop`}
            className="w-80"
          />
        </motion.div>
      </div>
    );
  };

  return (
    <section id="projects" className="w-full py-16 sm:py-20 bg-white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A collection of my recent work showcasing full-stack development,
          machine learning, and software engineering capabilities
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto px-6 space-y-20"
      >
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;
          const currentIdx = currentImageIndex[project.id] || 0;

          return (
            <motion.div
              key={project.id}
              variants={fadeUp}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Device Mockup Section */}
              <motion.div variants={deviceHover} className="lg:w-1/2 w-full">
                <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200 shadow-sm">
                  <DeviceDisplay project={project} currentIdx={currentIdx} />

                  {/* Image Navigation Dots */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                      {project.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() =>
                            setCurrentImageIndex((prev) => ({
                              ...prev,
                              [project.id]: i,
                            }))
                          }
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            i === currentIdx
                              ? "bg-blue-600 w-8"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="lg:w-1/2 w-full"
              >
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  {/* Project Header */}
                  <div className="mb-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      {project.year}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4 font-medium">
                    {project.subtitle}
                  </p>

                  {/* Project Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      <FaGithub className="text-lg" />
                      Code
                    </motion.a>

                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
