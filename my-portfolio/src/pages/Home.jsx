import { useEffect, useState, useRef } from "react";
import { FaGithub, FaDownload, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Daryl Hans Ocao";
  const typingSoundRef = useRef(null);

  // Audio management
  useEffect(() => {
    typingSoundRef.current = new Audio("/typing.wav");
    typingSoundRef.current.volume = 0.2;
    typingSoundRef.current.loop = true;

    const unlockAudio = () => {
      typingSoundRef.current
        .play()
        .then(() => {
          typingSoundRef.current.pause();
          typingSoundRef.current.currentTime = 0;
        })
        .catch(() => {});

      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("scroll", unlockAudio);
    };

    window.addEventListener("click", unlockAudio);
    window.addEventListener("keydown", unlockAudio);
    window.addEventListener("scroll", unlockAudio);

    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("scroll", unlockAudio);
    };
  }, []);

  // Typing animation
  useEffect(() => {
    let i = 0;
    let typingInterval;
    let soundTimeout;

    const startTyping = () => {
      i = 0;
      setDisplayedName("");

      typingInterval = setInterval(() => {
        if (i < fullName.length) {
          setDisplayedName(fullName.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setTimeout(startTyping, 5000);
        }
      }, 150);

      if (typingSoundRef.current) {
        typingSoundRef.current.currentTime = 0;
        typingSoundRef.current.play().catch(() => {});
        soundTimeout = setTimeout(() => {
          typingSoundRef.current.pause();
          typingSoundRef.current.currentTime = 0;
        }, 3000);
      }
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(soundTimeout);
    };
  }, []);

  // Intersection observer for audio control
  useEffect(() => {
    const fadeAudio = (targetVolume, duration) => {
      if (!typingSoundRef.current) return;

      const step = 50;
      const current = typingSoundRef.current.volume;
      const diff = targetVolume - current;
      const change = diff / (duration / step);

      let vol = current;
      const interval = setInterval(() => {
        vol += change;
        if (
          (change > 0 && vol >= targetVolume) ||
          (change < 0 && vol <= targetVolume)
        ) {
          vol = targetVolume;
          clearInterval(interval);
        }
        typingSoundRef.current.volume = Math.max(0, Math.min(1, vol));
      }, step);
    };

    const homeSection = document.getElementById("home");
    if (!homeSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (typingSoundRef.current) {
            if (entry.isIntersecting) {
              if (typingSoundRef.current.paused) {
                typingSoundRef.current.play().catch(() => {});
              }
              fadeAudio(0.2, 1000);
            } else {
              fadeAudio(0, 1000);
              setTimeout(() => {
                if (typingSoundRef.current) typingSoundRef.current.pause();
              }, 1000);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(homeSection);
    return () => observer.disconnect();
  }, []);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonHover = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  // Data
  const buttonData = [
    {
      label: "View GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/Dareel1502",
      target: "_blank",
    },
    {
      label: "View Resume",
      icon: <FaEye className="w-5 h-5" />,
      href: "/DarylHans_Ocao_CV.pdf",
      target: "_blank",
    },
    {
      label: "Download CV",
      icon: <FaDownload className="w-5 h-5" />,
      href: "/DarylHans_Ocao_CV.pdf",
      target: "_self",
      download: "DarylHans_Ocao_CV.pdf",
    },
  ];

  const expertiseItems = [
    "GoHighLevel Automation",
    "CRM System Optimization",
    "Workflow Automation",
    "Business Process Enhancement",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center space-y-12"
        >
          {/* Header Section */}
          <div className="space-y-8">
            {/* Name with Typing Animation */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                <span className="text-blue-600 relative inline-block">
                  {displayedName}
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 animate-pulse" />
                </span>
              </h1>

              {/* Title */}
              <div className="space-y-3">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700">
                  Business Automation Specialist & GoHighLevel VA
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto" />
              </div>
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                I help businesses{" "}
                <span className="font-semibold text-gray-800">
                  transform manual processes into automated systems
                </span>{" "}
                using GoHighLevel and custom automation solutions.
              </p>

              <p className="text-base text-gray-500 leading-relaxed">
                Specializing in workflow optimization that enhances
                productivity, reduces operational costs, and accelerates
                business growth through intelligent automation strategies.
              </p>
            </div>
          </div>

          {/* Expertise Highlights */}
          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {expertiseItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {buttonData.map((button, index) => (
              <motion.a
                key={index}
                whileHover="hover"
                variants={buttonHover}
                className={`
                  flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300
                  ${
                    index === 0
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                      : "border-2 border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
                  }
                `}
                href={button.href}
                target={button.target}
                download={button.download}
                rel="noopener noreferrer"
              >
                {button.icon}
                {button.label}
              </motion.a>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={fadeUp}
            className="max-w-md mx-auto text-center space-y-3"
          >
            <p className="text-sm text-gray-500">
              Ready to automate your business processes?
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold text-sm">
              <span>Explore my automation solutions</span>
              <span className="animate-bounce">↓</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
