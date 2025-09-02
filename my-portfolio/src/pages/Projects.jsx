import { useState } from "react";
import { motion } from "framer-motion";

// Projects Data
const projectsData = [
  { id: 1, title: "Portfolio Website", image: "https://via.placeholder.com/300x200", description: "A personal portfolio website built with React and Tailwind CSS." },
  { id: 2, title: "E-commerce App", image: "https://via.placeholder.com/300x200", description: "An online store app built using React, Node.js, and MongoDB." },
  { id: 3, title: "Task Manager", image: "https://via.placeholder.com/300x200", description: "A productivity app to track tasks, deadlines, and priorities." },
  { id: 4, title: "Blog Platform", image: "https://via.placeholder.com/300x200", description: "A full-stack blogging platform with user authentication." },
  { id: 5, title: "Chat App", image: "https://via.placeholder.com/300x200", description: "A real-time chat application using WebSockets." },
  { id: 6, title: "Finance Tracker", image: "https://via.placeholder.com/300x200", description: "A finance tracker app to manage budgets and expenses." },
];

// Experience Data
const experienceData = [
  { id: 1, title: "IT Staff", image: "https://via.placeholder.com/300x200", description: "Handled IT support, maintained hardware and software systems.", start: "Jan 2018", end: "Dec 2019" },
  { id: 2, title: "IT Tech", image: "https://via.placeholder.com/300x200", description: "Provided technical support for networks, servers, and troubleshooting.", start: "Jan 2020", end: "Jun 2021" },
  { id: 3, title: "IT Specialist", image: "https://via.placeholder.com/300x200", description: "Managed IT projects, implemented new systems, and optimized workflows.", start: "Jul 2021", end: "Present" },
];

export default function ProjectsExperience() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [tab, setTab] = useState("projects"); // projects or experience

  const items = tab === "projects" ? projectsData : experienceData;

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.15 
      } 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 transition-colors duration-500
                 bg-gradient-to-b from-gray-200 to-gray-300
                 dark:from-[#0A7075] dark:to-[#0C969C] text-gray-900 dark:text-[#E0F7FA]"
    >
      {/* Tabs */}
      <div className="flex justify-center mb-16 space-x-6">
        <button
          className={`px-4 py-2 rounded-full font-semibold ${tab === "projects" ? "bg-yellow-500 text-white" : "bg-gray-300 dark:bg-[#274D60] dark:text-[#E0F7FA]"}`}
          onClick={() => setTab("projects")}
        >
          Projects
        </button>
        <button
          className={`px-4 py-2 rounded-full font-semibold ${tab === "experience" ? "bg-yellow-500 text-white" : "bg-gray-300 dark:bg-[#274D60] dark:text-[#E0F7FA]"}`}
          onClick={() => setTab("experience")}
        >
          Experience
        </button>
      </div>

      {/* Section Title */}
      <motion.h2
        className="text-5xl font-extrabold text-center mb-16 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {tab === "projects" ? "My Projects" : "My Experience"}
        <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></span>
      </motion.h2>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-500
                       bg-white dark:bg-[#274D60]"
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <h3 className="text-white text-xl font-semibold">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#032F30] rounded-2xl shadow-2xl p-8 w-11/12 md:w-2/3 lg:w-1/2 relative transition-colors duration-500">
            <button
              className="absolute top-4 right-4 text-gray-600 dark:text-[#E0F7FA] hover:text-gray-900 dark:hover:text-[#6BA3BE] text-3xl font-bold"
              onClick={() => setSelectedItem(null)}
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold mb-6 text-center">{selectedItem.title}</h3>
            <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-72 object-cover rounded-lg mb-6" />
            <p className="text-gray-700 dark:text-[#C8E6E6] text-lg leading-relaxed">{selectedItem.description}</p>
            {tab === "experience" && (
              <p className="mt-4 text-gray-600 dark:text-[#B2DFDB] text-sm">
                {selectedItem.start} - {selectedItem.end}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
