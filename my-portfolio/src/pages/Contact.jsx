import { useRef } from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true, // ✅ Animation runs only once
    margin: "0px 0px -100px 0px",
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center px-6 py-20
             transition-colors duration-700 ease-in-out 
             bg-gradient-to-b from-gray-50 to-white 
             dark:from-[#0F4C4F] dark:to-[#0A3D40] 
             text-gray-900 dark:text-[#E0F7FA]"
    >
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide text-center"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        className="text-base md:text-lg mb-10 text-center text-gray-700 dark:text-[#B2DFDB] max-w-xl"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        I’m open to exciting opportunities and collaborations. Reach out through
        any of my social channels!
      </motion.p>

      {/* Social Media Buttons */}
      <motion.div
        className="flex justify-center space-x-6"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {[
          {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/daryl-hans-ocao-b74774378/",
            color: "hover:bg-[#0077b5]",
          },
          {
            icon: <FaFacebook />,
            link: "https://www.facebook.com/DarylHansOcao",
            color: "hover:bg-[#1877F2]",
          },
          {
            icon: <FaInstagram />,
            link: "https://instagram.com/yourprofile",
            color: "hover:bg-[#E4405F]",
          },
          {
            icon: <FaTelegram />,
            link: "https://web.telegram.org/k/",
            color: "hover:bg-[#0088cc]",
          },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#145B5E] 
                        text-gray-800 dark:text-[#E0F7FA] text-2xl transition-all duration-500 
                        hover:scale-110 ${item.color}`}
            variants={fadeUp}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div
        className="absolute bottom-4 text-center text-xs md:text-sm text-gray-600 dark:text-[#9BBEC8]"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        © {new Date().getFullYear()} All Rights Reserved | @darylhansocao
      </motion.div>
    </section>
  );
}
