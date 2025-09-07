// 📁 src/components/common/AnimatedCard.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedCard({ item, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                 bg-white/80 dark:bg-[#274D60]/80 backdrop-blur-lg transition-transform duration-500"
      onClick={() => onClick(item)}
    >
      <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
        <h3 className="text-white text-lg font-semibold">{item.title}</h3>
      </div>
    </motion.div>
  );
}
