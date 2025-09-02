import { useEffect, useState, useRef } from "react";
import ProfileImg from "../assets/profile.jpg";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"; 

export default function Home({ darkMode }) {
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Daryl Hans Ocao";
  const typingSoundRef = useRef(null);


  useEffect(() => {
    typingSoundRef.current = new Audio("/typing.wav");
    typingSoundRef.current.volume = 0.2;
    typingSoundRef.current.loop = true;

    const unlockAudio = () => {
      typingSoundRef.current.play().then(() => {
        typingSoundRef.current.pause();
        typingSoundRef.current.currentTime = 0;
      }).catch(() => {});
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


  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonHover = {
    hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.3)" },
  };

  const imgHover = {
    hover: { scale: 1.03, rotate: 1 },
    initial: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 
                 px-6 md:px-16 lg:px-28 
                 pt-24 md:pt-32
                 bg-gradient-to-b from-white to-gray-100 
                 dark:from-[#031716] dark:to-[#032F30] 
                 text-gray-900 dark:text-[#E0F7FA] transition-colors duration-500"
    >
      {/* Left Side - Text */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1 text-center md:text-left space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="text-yellow-500 border-r-2 border-yellow-500 pr-1 animate-pulse">
            {displayedName}
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-[#C8E6E6] max-w-xl mx-auto md:mx-0">
          A passionate <span className="font-semibold">Full Stack Developer</span> 
          dedicated to crafting dynamic, user-friendly, and scalable web applications.
        </p>

        <p className="text-base sm:text-lg text-gray-600 dark:text-[#A5C9CA] max-w-2xl mx-auto md:mx-0">
          I specialize in transforming ideas into digital solutions. My focus is on building 
          intuitive interfaces and efficient, secure systems that deliver real impact.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          {["View GitHub", "View Resume", "Download Resume"].map((btn, i) => (
            <motion.a
              key={i}
              whileHover="hover"
              variants={buttonHover}
              className={`border border-yellow-500 text-yellow-500 dark:text-yellow-400 px-6 py-3 rounded-lg font-medium 
                         hover:bg-yellow-500 hover:text-white dark:hover:text-[#031716] transition`}
              href={
                btn === "View GitHub" ? "https://github.com/Dareel1502" :
                btn === "View Resume" ? "/Ocao_Daryl Hans_Resume.pdf" : 
                "/Ocao_Daryl Hans_Resume.pdf"
              }
              target={btn === "View GitHub" || btn === "View Resume" ? "_blank" : "_self"}
              download={btn === "Download Resume" ? "Daryl_Hans_Ocao_Resume.pdf" : undefined}
              rel="noopener noreferrer"
            >
              {btn === "View GitHub" && <FaGithub className="inline-block mr-2" />}
              {btn}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        variants={imgHover}
        initial="initial"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1 flex justify-center"
      >
        <img
          src={ProfileImg}
          alt="Profile"
          className="w-56 sm:w-64 md:w-80 lg:w-96 h-56 sm:h-64 md:h-80 lg:h-96 
                     rounded-full object-cover shadow-2xl border-4 border-yellow-500 
                     dark:border-[#6BA3BE] transition-colors duration-500"
        />
      </motion.div>
    </section>
  );
}
