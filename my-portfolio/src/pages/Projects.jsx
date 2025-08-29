import { useState } from "react";
import { motion } from "framer-motion"; // optional for subtle animations

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    image: "https://via.placeholder.com/300x200",
    description: "A personal portfolio website built with React and Tailwind CSS."
  },
  {
    id: 2,
    title: "E-commerce App",
    image: "https://via.placeholder.com/300x200",
    description: "An online store app built using React, Node.js, and MongoDB."
  },
  {
    id: 3,
    title: "Task Manager",
    image: "https://via.placeholder.com/300x200",
    description: "A productivity app to track tasks, deadlines, and priorities."
  },
  {
    id: 4,
    title: "Blog Platform",
    image: "https://via.placeholder.com/300x200",
    description: "A full-stack blogging platform with user authentication."
  },
  {
    id: 5,
    title: "Chat App",
    image: "https://via.placeholder.com/300x200",
    description: "A real-time chat application using WebSockets."
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 transition-colors duration-500
                 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white"
    >
      <h2 className="text-5xl font-extrabold text-center mb-16 tracking-wide">
        My Projects
        <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></span>
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-500"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <h3 className="text-white text-xl font-semibold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-11/12 md:w-2/3 lg:w-1/2 relative transition-colors duration-500">
            <button
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white text-3xl font-bold"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold mb-6 text-center">{selectedProject.title}</h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-72 object-cover rounded-lg mb-6"
            />
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
