import { useRef } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/daryl-hans-ocao-b74774378/",
      label: "LinkedIn",
      color: "hover:bg-[#0077b5] hover:border-[#0077b5]",
    },
    {
      icon: <FaFacebook className="w-5 h-5" />,
      link: "https://www.facebook.com/DarylHansOcao",
      label: "Facebook",
      color: "hover:bg-[#1877F2] hover:border-[#1877F2]",
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      link: "https://instagram.com/yourprofile",
      label: "Instagram",
      color: "hover:bg-[#E4405F] hover:border-[#E4405F]",
    },
    {
      icon: <FaTelegram className="w-5 h-5" />,
      link: "https://web.telegram.org/k/",
      label: "Telegram",
      color: "hover:bg-[#0088cc] hover:border-[#0088cc]",
    },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      label: "Email",
      value: "darylhansocao@gmail.com",
      link: "mailto:darylhansocao@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      label: "Location",
      value: "Quezon City, Philippines",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative px-6 md:px-16 py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects,
            and how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              Contact Information
            </motion.h3>

            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {item.label}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-900">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              Connect With Me
            </motion.h3>

            <motion.p variants={fadeUp} className="text-gray-600 mb-8">
              Follow my professional journey and get in touch through any of
              these platforms.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 
                    bg-white text-gray-700 font-medium transition-all duration-300
                    hover:text-white hover:shadow-md ${item.color}
                  `}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Ready to Start a Project?
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Let's discuss how we can work together to create something amazing.
          </p>
          <motion.a
            href="mailto:darylhansocao@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white 
                       rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <FaEnvelope className="w-4 h-4" />
            Send me an email
          </motion.a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16 pt-8 border-t border-gray-200"
      >
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Daryl Hans Ocao. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Built with React & Tailwind CSS
        </p>
      </motion.div>
    </section>
  );
}
