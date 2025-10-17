import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaLinkedin } from "react-icons/fa";

export default function Recommendations() {
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
    hover: { scale: 1.02, y: -5 },
  };

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Project Manager",
      company: "Tech Solutions Inc.",
      relationship: "Former Manager",
      image: "👩‍💼",
      rating: 5,
      text: "Daryl consistently delivered exceptional work on our automation projects. His ability to transform complex manual processes into efficient automated systems saved our team countless hours. His attention to detail and problem-solving skills are truly remarkable.",
      projects: ["Process Automation", "Workflow Optimization"],
      linkedin: "#",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Senior Developer",
      company: "Digital Innovations",
      relationship: "Team Lead",
      image: "👨‍💻",
      rating: 5,
      text: "Working with Daryl was a pleasure. His expertise in full-stack development and cybersecurity helped us build robust, secure applications. He's a quick learner and always willing to mentor junior team members. Highly recommended!",
      projects: ["Web Development", "Security Implementation"],
      linkedin: "#",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "CEO",
      company: "StartUp Ventures",
      relationship: "Client",
      image: "👩‍💼",
      rating: 5,
      text: "Daryl transformed our manual scheduling system into an automated platform that increased our productivity by 40%. His understanding of business needs and technical execution is outstanding. He's our go-to developer for all automation projects.",
      projects: ["Scheduling System", "Business Automation"],
      linkedin: "#",
    },
    {
      id: 4,
      name: "David Thompson",
      position: "IT Director",
      company: "Municipal Police",
      relationship: "Supervisor",
      image: "👨‍✈️",
      rating: 5,
      text: "During his time with us, Daryl demonstrated exceptional technical skills in maintaining and securing our IT infrastructure. His proactive approach to cybersecurity and system optimization was invaluable to our operations.",
      projects: ["IT Infrastructure", "Cybersecurity"],
      linkedin: "#",
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Product Manager",
      company: "Gaming Studio Pro",
      relationship: "Colleague",
      image: "👩‍🎨",
      rating: 5,
      text: "Daryl's virtual assistance and automation skills significantly improved our team's workflow. He created custom solutions that streamlined our processes and enhanced collaboration across departments.",
      projects: ["Virtual Assistance", "Process Streamlining"],
      linkedin: "#",
    },
    {
      id: 6,
      name: "James Wilson",
      position: "CTO",
      company: "Cloud Systems Ltd.",
      relationship: "Client",
      image: "👨‍💼",
      rating: 5,
      text: "Daryl developed a comprehensive cloud solution for our business that scaled perfectly with our growth. His technical expertise and commitment to quality are exceptional. We continue to work with him on new projects.",
      projects: ["Cloud Architecture", "System Scaling"],
      linkedin: "#",
    },
  ];

  // Stats data
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "40%", label: "Average Efficiency Gain" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  // Render star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="recommendations" className="py-16 md:py-24 bg-white">
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
            Client & Colleague Recommendations
          </h2>
          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What professionals I've worked with say about my work ethic,
            technical skills, and collaboration abilities
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200"
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardHover}
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="text-blue-600 mb-4">
                <FaQuoteLeft className="w-6 h-6" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <a
                  href={testimonial.linkedin}
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>

              {/* Relationship & Projects */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">
                    {testimonial.relationship}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {testimonial.projects.map((project, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience the Same Quality?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join the satisfied clients and colleagues who have benefited from
              my technical expertise and professional approach
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start a Project
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                View More Testimonials
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500 mb-4">
            Trusted by professionals at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="text-gray-700 font-semibold">
              Tech Solutions Inc.
            </span>
            <span className="text-gray-700 font-semibold">
              Digital Innovations
            </span>
            <span className="text-gray-700 font-semibold">
              Municipal Police
            </span>
            <span className="text-gray-700 font-semibold">
              StartUp Ventures
            </span>
            <span className="text-gray-700 font-semibold">
              Cloud Systems Ltd.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
