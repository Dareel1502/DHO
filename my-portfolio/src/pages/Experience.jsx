import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Modal from "../components/common/Modal";
import firstJobImg from "../assets/1st-job.png";
import virtualAssistantImg from "../assets/virtual-assistant.png";
import itTechnicianImg from "../assets/it-technician.png";

const experienceData = [
  {
    id: 1,
    title: "IT Staff",
    year: "2025",
    company: "Municipal Police",
    start: "Mar 2025",
    end: "May 2025",
    duration: "3 months",
    description:
      "Provided technical support and maintained IT systems for the Municipal Police, ensuring smooth operation of computer networks, troubleshooting hardware and software issues, and assisting in the implementation of cybersecurity measures.",
    image: firstJobImg,
  },
  {
    id: 2,
    title: "Virtual Assistant - Gaming Industry",
    year: "2024",
    company: "Confidential",
    start: "Nov 2024",
    end: "Feb 2025",
    duration: "4 months",
    description:
      "Provided remote administrative support, including scheduling, data entry, customer communications, and assisting with content and community management in the gaming sector.",
    image: virtualAssistantImg,
  },
  {
    id: 3,
    title: "IT Technician",
    year: "2024",
    company: "Tech Solutions Inc.",
    start: "May 2024",
    end: "Oct 2024",
    duration: "6 months",
    description:
      "Managed and maintained computer systems, installed software, performed routine hardware troubleshooting, and supported end-users to ensure efficient daily operations.",
    image: itTechnicianImg,
  },
];

export default function Experience() {
  const [selectedItem, setSelectedItem] = useState(null);
  const svgRef = useRef(null);
  const controls = useAnimation();

  const scrollProgressRef = useRef(0);

  useEffect(() => {
    let animationFrame;

    const handleScroll = () => {
      if (!svgRef.current) return;

      const rect = svgRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height - windowHeight;
      const scrolled =
        window.scrollY - svgRef.current.offsetTop + windowHeight / 2;
      const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);

      scrollProgressRef.current +=
        (progress - scrollProgressRef.current) * 0.05;
    };

    const animate = () => {
      controls.start({
        strokeDashoffset: 1000 - 1000 * scrollProgressRef.current,
      });
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [controls]);

  // Animation variants
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
      scale: 1.02,
      y: -5,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section
      id="experience"
      className="px-6 sm:px-8 lg:px-16 py-16 sm:py-20 bg-white"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Professional Experience
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          My journey through various roles in technology and IT support
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        {/* Modern Timeline */}
        <svg
          ref={svgRef}
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block"
          viewBox="0 0 2 800"
          preserveAspectRatio="none"
        >
          {/* Background line */}
          <path
            d="M1 0 V800"
            stroke="#e5e7eb"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Animated progress line */}
          <motion.path
            d="M1 0 V800"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={1000}
            strokeDashoffset={1000}
            animate={controls}
            initial={{ strokeDashoffset: 1000 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
          />
        </svg>

        {/* Timeline Items */}
        <div className="flex flex-col space-y-12 md:space-y-16 relative z-10">
          {experienceData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-lg z-20" />

                {/* Content Card */}
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  onClick={() => setSelectedItem(item)}
                  className={`
                    cursor-pointer w-full md:w-5/12 bg-white rounded-xl shadow-md 
                    hover:shadow-xl transition-all duration-300 border border-gray-100
                    ${isLeft ? "md:mr-auto" : "md:ml-auto"}
                  `}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-blue-600 font-medium text-sm">
                          {item.company}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <span>{item.start}</span>
                      <span className="text-gray-300">→</span>
                      <span>{item.end}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{item.duration}</span>
                    </div>

                    {/* Preview Image */}
                    <div className="mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>

                    {/* Description Preview */}
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {item.description}
                    </p>

                    {/* Click Hint */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xs text-blue-500 font-medium">
                        Click for details
                      </span>
                      <span className="text-xs text-gray-400">
                        View full role
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for mobile */}
                <div className="md:hidden w-full h-8" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <Modal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            isExperience
          />
        )}
      </AnimatePresence>
    </section>
  );
}
