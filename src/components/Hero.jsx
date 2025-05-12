import profileImg from '@/assets/images/image.png';
import { motion } from 'framer-motion';
import { FaArrowRight, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';

const Hero = ({ _darkMode }) => {
  const isDark = _darkMode;

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 overflow-hidden relative ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className={`absolute top-40 left-10 w-72 h-72 rounded-full ${isDark ? 'bg-indigo-900/20' : 'bg-indigo-300/20'} blur-3xl`}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className={`absolute bottom-40 right-10 w-80 h-80 rounded-full ${isDark ? 'bg-purple-900/20' : 'bg-purple-300/20'} blur-3xl`}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
            rotate: [0, -90, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 xl:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`inline-block px-4 py-1.5 rounded-full ${isDark ? 'bg-indigo-900/30 text-indigo-300' : 'bg-indigo-100 text-indigo-600'} mb-6 font-medium tracking-wide text-sm`}
            >
              HELLO, I'M
            </motion.p>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
                Ardian Wahyu Nizar
              </span>
            </motion.h1>
            
            <motion.h2 
              className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-8 ${isDark ? 'text-gray-300' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack Web Developer
            </motion.h2>
            
            <motion.p 
              className={`max-w-lg mx-auto lg:mx-0 text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-800'} mb-10 leading-relaxed`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              I build exceptional digital experiences that are fast, accessible, and visually appealing. Focused on creating intuitive user interfaces with modern technologies.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me 
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a
                href="#projects"
                className={`flex items-center px-6 sm:px-8 py-3.5 border-2 ${isDark ? 'border-indigo-400 text-indigo-400' : 'border-indigo-500 text-indigo-600'} rounded-lg font-medium ${isDark ? 'hover:bg-indigo-900/30' : 'hover:bg-indigo-50'} transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1eCe8A5Eqj_Gv4FzlQMS2pGUpg-1oAfL7/view?usp=sharing" // Replace with your actual resume path
                download
                className={`flex items-center gap-2 px-6 sm:px-8 py-3.5 ${isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'} rounded-lg font-medium ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-300 group`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiDocumentText className={`${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                View Resume
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 blur-2xl opacity-30 dark:opacity-40"
                animate={{ 
                  scale: [1, 1.1, 1], 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                className={`absolute inset-4 rounded-full ${isDark ? 'bg-gray-800 border-gray-800' : 'bg-white border-white'} overflow-hidden shadow-2xl border-4`}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Replace with your actual image */}
                <div className={`w-full h-full flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-gray-100 to-gray-200'}`}>
                <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>

              {/* Programming language icons with animations */}
              <motion.div 
                className={`absolute top-5 -right-4 text-3xl ${isDark ? 'text-pink-500' : 'text-pink-600'}`}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 360, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <FaReact />
              </motion.div>
              
              <motion.div 
                className={`absolute bottom-10 -left-6 text-4xl ${isDark ? 'text-indigo-500' : 'text-indigo-600'}`}
                animate={{ 
                  y: [0, 10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <FaNodeJs />
              </motion.div>
              
              <motion.div 
                className={`absolute -bottom-2 right-10 text-2xl ${isDark ? 'text-purple-500' : 'text-purple-600'}`}
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, -360, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <SiTypescript />
              </motion.div>
              
              <motion.div 
                className={`absolute top-0 left-10 text-2xl ${isDark ? 'text-yellow-500' : 'text-yellow-600'}`}
                animate={{ 
                  x: [0, 5, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.3
                }}
              >
                <FaJs />
              </motion.div>
              
              <motion.div 
                className={`absolute top-20 right-0 text-xl ${isDark ? 'text-blue-500' : 'text-blue-600'}`}
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.7
                }}
              >
                <SiNextdotjs />
              </motion.div>
              
              <motion.div 
                className={`absolute bottom-5 left-20 text-xl ${isDark ? 'text-green-500' : 'text-green-600'}`}
                animate={{ 
                  rotate: [0, 360, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear"
                }}
              >
                <FaPython />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;