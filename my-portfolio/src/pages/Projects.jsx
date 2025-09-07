import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

import quiz1 from "../assets/quiz1.png";

const projectsData = [
  {
    id: 1,
    title: "Donation Web and Mobile Application System",
    type: "Mobile & Web App",
    description:
      "A donation platform supporting multiple devices. Features user dashboard, admin management, and real-time notifications.",
    year: "2023",
    images: [donation1, donation2, donation3, donation4, donation5, donation6],
  },
  {
    id: 2,
    title: "LGU1: Risk Reduction Management Web and Application System",
    type: "Mobile & Web App",
    description:
      "A management system for LGUs to handle risk reduction and disaster planning with interactive reports and mobile access.",
    year: "2024-2025",
    images: [lgu1, lgu2, lgu3, lgu4],
  },
  {
    id: 3,
    title: "Quiz Game | Pygame",
    type: "Stand-Alone Application",
    description:
      "A desktop quiz game developed using Python Pygame with multiple-choice questions and scoring system.",
    year: "2025",
    images: [quiz1],
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
          [project.id]: (prev[project.id] + 1 || 1) % project.images.length,
        }));
      }, 4000);
    });
    return () => Object.values(intervals).forEach(clearInterval);
  }, []);

  // Handle swipe left/right
  const handleSwipe = (projectId, direction, total) => {
    setCurrentImageIndex((prev) => {
      const current = prev[projectId] || 0;
      return {
        ...prev,
        [projectId]:
          direction === "left"
            ? (current + 1) % total
            : (current - 1 + total) % total,
      };
    });
  };

  return (
    <section
      id="projects"
      className="w-full py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-[#0A3D40] dark:to-[#0F4C4F] text-gray-900 dark:text-[#E0F7FA]"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Projects
        <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></span>
      </motion.h2>

      {/* Project List */}
      <div className="flex flex-col space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {projectsData.map((project, index) => {
          const isLeft = index % 2 === 0;
          const currentIdx = currentImageIndex[project.id] || 0;

          return (
            <motion.div
              key={project.id}
              className={`flex flex-col md:flex-row items-center w-full gap-8 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              {/* Card Wrapper */}
              <div className="w-full bg-white dark:bg-[#274D60] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col md:flex-row gap-6">
                {/* Text Content */}
                <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mb-2">
                    {project.type} • {project.year}
                  </p>
                  <p className="text-gray-700 dark:text-gray-200 sm:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Image Slideshow */}
                <div className="md:w-1/2 flex justify-center items-center">
                  <motion.div
                    className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-md bg-black flex items-center justify-center"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, info) => {
                      if (info.offset.x < -100)
                        handleSwipe(project.id, "left", project.images.length);
                      if (info.offset.x > 100)
                        handleSwipe(project.id, "right", project.images.length);
                    }}
                  >
                    <motion.img
                      src={project.images[currentIdx]}
                      alt={project.title}
                      className="w-full h-full object-contain p-2"
                      key={currentIdx}
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 w-full flex justify-center space-x-2">
                      {project.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() =>
                            setCurrentImageIndex((prev) => ({
                              ...prev,
                              [project.id]: i,
                            }))
                          }
                          className={`w-3 h-3 rounded-full ${
                            i === currentIdx
                              ? "bg-cyan-400 scale-110"
                              : "bg-gray-300 dark:bg-gray-600"
                          } transition-all`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
