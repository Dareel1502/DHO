import { FaLinkedin, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
 
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-16 transition-colors duration-700 ease-in-out
                 bg-gradient-to-b from-gray-300 via-gray-300 to-gray-100
                 dark:from-[#0C969C] dark:via-[#0C969C] dark:to-[#133E45]
                 text-gray-900 dark:text-[#E0F7FA]"
    >
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-wide transition-colors duration-700"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-base md:text-lg mb-8 text-center text-gray-700 dark:text-[#B2DFDB] max-w-xl transition-colors duration-700"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        I’m open to exciting opportunities. Let’s connect and build something amazing together!
      </motion.p>

      {/* Social Media Icons */}
      <motion.div
        className="flex space-x-6 mb-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/daryl-hans-ocao-b74774378/", hover: "hover:text-[#0077b5]" },
          { icon: <FaFacebook />, link: "https://www.facebook.com/DarylHansOcao", hover: "hover:text-[#1877F2]" },
          { icon: <FaInstagram />, link: "https://instagram.com/yourprofile", hover: "hover:text-[#E4405F]" },
          { icon: <FaTelegram />, link: "https://web.telegram.org/k/", hover: "hover:text-[#0088cc]" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-800 dark:text-[#E0F7FA] transition-all duration-500 ease-in-out text-2xl md:text-3xl transform hover:scale-125 ${item.hover}`}
            variants={fadeUp}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div
        className="absolute bottom-4 text-center text-xs md:text-sm text-gray-600 dark:text-[#9BBEC8] transition-colors duration-700"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        © {new Date().getFullYear()} All Rights Reserved | @darylhansocao <br />
        Unauthorized use or reproduction may result in copyright.
      </motion.div>
    </section>
  );
}
