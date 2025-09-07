// 📁 src/components/common/Modal.jsx
import { motion } from "framer-motion";

export default function Modal({ item, onClose, isExperience }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-[#032F30] rounded-2xl shadow-2xl p-8 w-11/12 md:w-2/3 lg:w-1/2 relative"
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: -30, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 dark:text-[#E0F7FA] hover:text-gray-900 dark:hover:text-[#6BA3BE] text-3xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <h3 className="text-3xl font-bold mb-6 text-center">{item.title}</h3>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-700 dark:text-[#C8E6E6] text-lg leading-relaxed">
          {item.description}
        </p>

        {isExperience && (
          <p className="mt-4 text-gray-600 dark:text-[#B2DFDB] text-sm text-center">
            {item.start} - {item.end}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
