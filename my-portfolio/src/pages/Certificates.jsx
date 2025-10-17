import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaCalendarAlt, FaBuilding, FaTimes } from "react-icons/fa";
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
      "Completed comprehensive training on managing and securing information in the modern digital landscape, focusing on data organization, cybersecurity principles, and effective technology utilization.",
    image: cert1,
    category: "Professional Development",
  },
  {
    id: 2,
    title: "Research Festival Representative",
    issuer: "AcendensAsia",
    date: "April 2025",
    description:
      "Selected to represent the institution in the prestigious Research Festival, showcasing innovative research ideas and contributing to academic excellence through collaborative projects.",
    image: cert2,
    category: "Academic Achievement",
  },
  {
    id: 3,
    title: "Top 10 Research Project on Finals",
    issuer: "AcendensAsia",
    date: "May 2025",
    description:
      "Recognized as one of the top 10 research projects in the finals, demonstrating exceptional critical thinking, rigorous methodology, and impactful research findings.",
    image: cert3,
    category: "Academic Excellence",
  },
  {
    id: 4,
    title: "Research Festival Champion",
    issuer: "AcendensAsia",
    date: "May 2025",
    description:
      "Achieved first place at the Research Festival, demonstrating outstanding research innovation, effective collaboration, and superior presentation skills among competing projects.",
    image: cert4,
    category: "Academic Excellence",
  },
  {
    id: 5,
    title: "Graduation Certificate",
    issuer: "Bestlink College of The Philippines",
    date: "June 2025",
    description:
      "Awarded upon successful completion of all academic requirements, symbolizing dedication, perseverance, and outstanding academic achievement throughout the program.",
    image: cert5,
    category: "Academic Milestone",
  },
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardHover = {
  hover: {
    y: -8,
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="px-6 md:px-16 py-16 bg-white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Certifications & Awards
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Professional certifications and academic achievements that demonstrate
          my commitment to continuous learning and excellence
        </p>
      </motion.div>

      {/* Certificates Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeUp}
              whileHover="hover"
              className="group"
            >
              <motion.div
                variants={cardHover}
                className="bg-white rounded-xl border border-gray-200 shadow-sm 
                           hover:shadow-md transition-all duration-300 cursor-pointer 
                           overflow-hidden group-hover:border-blue-200"
                onClick={() => setSelected(cert)}
              >
                {/* Image Container */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 leading-tight">
                    {cert.title}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaBuilding className="w-4 h-4 text-blue-500" />
                      <span>{cert.issuer}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCalendarAlt className="w-4 h-4 text-blue-500" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* View Details CTA */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full 
                           shadow-md flex items-center justify-center text-gray-500 
                           hover:text-gray-700 transition-colors"
                onClick={() => setSelected(null)}
              >
                <FaTimes className="w-4 h-4" />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col h-full">
                {/* Image */}
                <div className="h-64 bg-gray-100 overflow-hidden">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {selected.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {selected.title}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <FaBuilding className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Issued by
                        </p>
                        <p className="text-gray-900">{selected.issuer}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCalendarAlt className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Date Issued
                        </p>
                        <p className="text-gray-900">{selected.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaAward className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Achievement
                        </p>
                        <p className="text-gray-900">{selected.category}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Description
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selected.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
