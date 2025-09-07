import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Importing images
import cert1 from "../assets/Cert1.png";
import cert2 from "../assets/Cert2.jpg";
import cert3 from "../assets/Cert3.jpg";
import cert4 from "../assets/Cert4.jpg";
import cert5 from "../assets/Cert5.jpg";

const certificatesData = [
  {
    id: 1,
    title: "Information Management In a Digital Age",
    issuer: "Certificate Of Completion",
    date: "November 2024",
    description:
      "Completed training on managing and securing information in the modern digital landscape, focusing on data organization and technology use.",
    image: cert1,
  },
  {
    id: 2,
    title: "Research Festival Representative",
    issuer: "AcendensAsia",
    date: "April 2025",
    description:
      "Represented the institution in the prestigious Research Festival, showcasing innovative ideas and contributing to academic excellence.",
    image: cert2,
  },
  {
    id: 3,
    title: "Top 10 Research Project on Finals",
    issuer: "AcendensAsia",
    date: "May 2025",
    description:
      "Recognized as one of the top 10 research projects in the finals, highlighting critical thinking, methodology, and impactful findings.",
    image: cert3,
  },
  {
    id: 4,
    title: "Research Festival Champion",
    issuer: "AcendensAsia",
    date: "May 2025",
    description:
      "Achieved first place at the Research Festival, demonstrating outstanding research innovation, collaboration, and presentation skills.",
    image: cert4,
  },
  {
    id: 5,
    title: "Graduation Certificate",
    issuer: "Bestlink College of The Philippines",
    date: "June 2025",
    description:
      "Awarded upon successful completion of academic requirements, symbolizing dedication, perseverance, and academic achievement.",
    image: cert5,
  },
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="certificates"
      className="px-6 py-16 transition-colors duration-500 
             bg-gradient-to-b from-gray-100 to-gray-50 
             dark:from-[#145B5E] dark:to-[#0F4C4F] 
             text-gray-900 dark:text-[#E0F7FA]"
    >
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h2 className="text-5xl font-extrabold mb-8 tracking-wide relative">
          Certificates & Awards
          <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A showcase of certifications and achievements I’ve earned throughout my journey.
        </p>
      </motion.div>

      {/* Certificates Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        {certificatesData.map((cert, index) => (
          <div
            key={cert.id}
            className={`${index === certificatesData.length - 1 ? "col-span-full flex justify-center" : ""}`}
          >
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white dark:bg-[#0B2F2F] rounded-2xl shadow-lg cursor-pointer overflow-hidden 
                         hover:shadow-2xl transition-shadow duration-300 w-full sm:w-80"
              onClick={() => setSelected(cert)}
            >
              {/* Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-32 object-cover"
              />

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{cert.date}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-[#0B2F2F] rounded-2xl shadow-2xl max-w-lg w-full p-6 relative"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>

              {/* Modal Content */}
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                <strong>Issuer:</strong> {selected.issuer}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Date:</strong> {selected.date}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {selected.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
