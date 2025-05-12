import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`p-2.5 rounded-full relative overflow-hidden ${
        darkMode 
          ? 'bg-gray-700 text-yellow-300 shadow-inner shadow-gray-800' 
          : 'bg-indigo-100 text-indigo-600 shadow-sm'
      } transition-all duration-300`}
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: darkMode ? 0 : 180,
          opacity: darkMode ? 1 : 0,
          scale: darkMode ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <FiMoon className="text-lg" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: darkMode ? -180 : 0,
          opacity: darkMode ? 0 : 1,
          scale: darkMode ? 0.5 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <FiSun className="text-lg" />
      </motion.div>
      
      <span className="opacity-0">
        {darkMode ? <FiMoon /> : <FiSun />}
      </span>
    </motion.button>
  );
};

export default ThemeToggle;