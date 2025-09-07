import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Modal from "../components/common/Modal";

// Import images
import firstJobImg from "../assets/1st-job.png";
import virtualAssistantImg from "../assets/virtual-assistant.png";
import itTechnicianImg from "../assets/it-technician.png";

const experienceData = [
  {
    id: 1,
    title: "IT Staff",
    year: "2025",
    company: "Municipal Police",
    start: "2025-03-24",
    end: "2025-05-28",
    description:
      "Provided technical support and maintained IT systems for the Municipal Police, ensuring smooth operation of computer networks, troubleshooting hardware and software issues, and assisting in the implementation of cybersecurity measures.",
    image: firstJobImg,
  },
  {
    id: 2,
    title: "Virtual Assistant - Gaming Industry",
    year: "2024",
    company: "Unknown",
    start: "2024-11-08",
    end: "2025-02-10",
    description:
      "Provided remote administrative support, including scheduling, data entry, customer communications, and assisting with content and community management in the gaming sector.",
    image: virtualAssistantImg,
  },
  {
    id: 3,
    title: "IT Technician",
    year: "2024",
    company: "Tech Solutions Inc.",
    start: "2024-05-21",
    end: "2024-10-18",
    description:
      "Managed and maintained computer systems, installed software, performed routine hardware troubleshooting, and supported end-users to ensure efficient daily operations.",
    image: itTechnicianImg,
  },
];

export default function Experience() {
  const [selectedItem, setSelectedItem] = useState(null);
  const svgRef = useRef(null);
  const controls = useAnimation();

  // Use ref to store smooth progress
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    let animationFrame;

    const handleScroll = () => {
      if (!svgRef.current) return;

      const rect = svgRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height - windowHeight;
      const scrolled = window.scrollY - svgRef.current.offsetTop + windowHeight / 2;
      const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);

      // Smoothly interpolate
      scrollProgressRef.current += (progress - scrollProgressRef.current) * 0.05;
    };

    const animate = () => {
      controls.start({ strokeDashoffset: 1000 - 1000 * scrollProgressRef.current });
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [controls]);

  return (
      
    <section
    id="experience"
    className="px-4 sm:px-6 lg:px-16 py-12 sm:py-16 bg-gradient-to-b from-gray-100 to-white dark:from-[#032F30] dark:to-[#0A3D40] text-gray-900 dark:text-[#E0F7FA]">
        
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12">
        My Experience
        <span className="block w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></span>
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* SVG S-shaped timeline */}
        <svg
          ref={svgRef}
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-4 sm:w-6"
          viewBox="0 0 100 800"
          preserveAspectRatio="none"
        >
          {/* Background path */}
          <path
            d="M50 0 C50 150, 0 250, 50 400 C100 550, 50 650, 50 800"
            stroke="#ccc"
            strokeWidth="6"
            fill="transparent"
          />
          {/* Animated fill path */}
          <motion.path
            d="M50 0 C50 150, 0 250, 50 400 C100 550, 50 650, 50 800"
            stroke="#00FFFF"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={1000}
            strokeDashoffset={1000}
            animate={controls}
            initial={{ strokeDashoffset: 1000 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          />
        </svg>

        {/* Timeline items */}
        <div className="flex flex-col space-y-12 relative z-10">
          {experienceData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative w-full md:w-1/2 ${
                  isLeft ? "md:left-0 md:pr-6" : "md:left-1/2 md:pl-6"
                }`}
              >
                {/* Dot */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-400 border-2 border-white z-10" />

                {/* Card */}
                <div
                  onClick={() => setSelectedItem(item)}
                  className="cursor-pointer p-4 sm:p-6 bg-white dark:bg-[#274D60] rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col items-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg sm:text-xl md:text-xl font-bold text-center">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">{item.year}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <Modal item={selectedItem} onClose={() => setSelectedItem(null)} isExperience />
        )}
      </AnimatePresence>
    </section>
  );
}
