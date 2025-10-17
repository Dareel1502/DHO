import { motion } from "framer-motion";
import {
  FaRobot,
  FaCalendarAlt,
  FaCode,
  FaShieldAlt,
  FaMobile,
  FaCloud,
  FaDatabase,
  FaChartLine,
  FaCogs,
  FaRocket,
} from "react-icons/fa";

export default function Services() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardHover = {
    hover: { scale: 1.05, y: -5 },
  };

  // Main services
  const mainServices = [
    {
      icon: <FaRobot className="w-8 h-8 text-blue-600" />,
      title: "Process Automation",
      description:
        "Transform manual workflows into efficient automated systems that save time and reduce errors",
      features: [
        "Workflow Automation",
        "Task Automation",
        "Process Optimization",
        "Custom Scripting",
      ],
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8 text-blue-600" />,
      title: "Calendar & Scheduling Systems",
      description:
        "Intelligent scheduling solutions that streamline appointments and resource management",
      features: [
        "Appointment Scheduling",
        "Resource Management",
        "Calendar Integration",
        "Automated Reminders",
      ],
    },
    {
      icon: <FaCode className="w-8 h-8 text-blue-600" />,
      title: "Web Design & Development",
      description:
        "Custom websites and web applications with modern design and robust functionality",
      features: [
        "Responsive Design",
        "Custom Web Apps",
        "UI/UX Design",
        "E-commerce Solutions",
      ],
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-blue-600" />,
      title: "Secure Solutions",
      description:
        "Cybersecurity-focused development ensuring your data and systems are protected",
      features: [
        "Data Encryption",
        "Security Audits",
        "Secure APIs",
        "Compliance Standards",
      ],
    },
    {
      icon: <FaMobile className="w-8 h-8 text-blue-600" />,
      title: "Mobile Applications",
      description:
        "Cross-platform mobile apps that deliver seamless user experiences",
      features: [
        "iOS & Android",
        "React Native",
        "Mobile UI/UX",
        "App Store Deployment",
      ],
    },
    {
      icon: <FaCloud className="w-8 h-8 text-blue-600" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment for modern applications",
      features: [
        "Cloud Deployment",
        "Server Management",
        "API Integration",
        "Cloud Security",
      ],
    },
  ];

  // Technical skills (like GoHighLevel)
  const technicalSkills = [
    {
      category: "Automation & CRM",
      skills: [
        "Zapier",
        "Make (Integromat)",
        "ActiveCampaign",
        "ClickFunnels",
        "GoHighLevel",
        "HubSpot",
      ],
    },
    {
      category: "Web Development",
      skills: [
        "React",
        "Node.js",
        "Python",
        "JavaScript",
        "TypeScript",
        "HTML/CSS",
        "Tailwind CSS",
      ],
    },
    {
      category: "Database & Backend",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "Firebase",
        "MySQL",
        "Express.js",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Vercel", "Netlify", "Figma", "Postman"],
    },
  ];

  // Process workflow
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "Understanding your business needs and technical requirements",
    },
    {
      step: "02",
      title: "Planning & Strategy",
      description:
        "Creating a detailed project roadmap and technical architecture",
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "Building and testing the solution with regular updates",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Launching the solution and providing ongoing maintenance",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to automate processes,
            enhance productivity, and drive business growth through cutting-edge
            technology.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              variants={cardHover}
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 border-t border-blue-100 px-6 py-4">
                <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Technical Expertise
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proficient in modern technologies and platforms that power today's
              digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSkills.map((category, index) => (
              <div key={index} className="text-center">
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                  {category.category}
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Process Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Development Process
          </h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            A structured approach to ensure successful project delivery and
            client satisfaction
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how automation and custom solutions can drive your
              business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule a Consultation
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
