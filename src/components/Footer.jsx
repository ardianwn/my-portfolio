import { motion } from 'framer-motion';

const Footer = ({ _darkMode }) => {
  const isDark = _darkMode;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 border-t ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} relative overflow-hidden`}>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className={`absolute top-0 right-1/4 w-64 h-64 rounded-full blur-3xl ${isDark ? 'bg-indigo-700/5' : 'bg-indigo-300/5'}`}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <motion.div
            className="mb-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl font-bold"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%'],
            }}
            transition={{
              backgroundPosition: {
                duration: 6,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear'
              }
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          >
            ARDCODE
          </motion.div>
          
          <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
            Designed & Built by <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>Ardian Wahyu Nizar</span> • © {currentYear} All Rights Reserved
          </p>
          
          <motion.a 
            href="#hero" 
            className={`mt-8 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 group flex items-center gap-1 ${
              isDark 
                ? 'bg-gray-800 text-gray-300 hover:bg-indigo-900/30 hover:text-indigo-400' 
                : 'bg-gray-100 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600'
            }`}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatDelay: 0.5 
              }}
            >
              ↑
            </motion.span>
            Back to Top
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;