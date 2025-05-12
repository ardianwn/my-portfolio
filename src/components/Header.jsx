import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaTimes, FaYoutube } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Header = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-lg ${darkMode ? 'bg-gray-900/85 border-gray-800' : 'bg-white/85 border-gray-100'} border-b transition-all duration-300 shadow-sm`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with animated gradient */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 ml-2 md:ml-6"
          >
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
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
            </motion.h3>
          </motion.a>
          
          {/* Desktop Navigation with animated underline */}
          <nav className="hidden md:flex items-center justify-center flex-1 max-w-2xl mx-6">
            <div className="flex space-x-2">
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.name}
                  className="relative px-4 py-2"
                  onHoverStart={() => setHoveredItem(index)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative z-10 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-indigo-500 transition-colors`}
                  >
                    {item.name}
                  </motion.a>
                  {hoveredItem === index && (
                    <motion.div 
                      className={`absolute bottom-0 left-0 h-0.5 ${darkMode ? 'bg-indigo-400' : 'bg-indigo-500'} rounded-full`}
                      layoutId="underline"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </nav>
          
          {/* Right Side */}
          <div className="flex items-center space-x-3 sm:space-x-4 mr-2 md:mr-6">
            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              {[
                { icon: <FaGithub />, href: "https://github.com/ardianwn" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ardian-wahyu-nizar-034625172/" },
                { icon: <FaYoutube />, href: "https://www.youtube.com/@rdynwh404" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ 
                    y: -3,
                    color: darkMode ? '#818cf8' : '#6366f1'
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full ${darkMode ? 'text-gray-300 hover:bg-gray-700/50' : 'text-gray-600 hover:bg-gray-200/50'} transition-all`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
            
            {/* Mobile Menu Button */}
            <motion.button 
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-md focus:outline-none"
              aria-label="Menu"
              animate={{
                backgroundColor: isOpen 
                  ? darkMode 
                    ? 'rgba(55, 65, 81, 0.5)' 
                    : 'rgba(209, 213, 219, 0.5)'
                  : 'transparent'
              }}
            >
              {isOpen ? (
                <FaTimes className={`h-5 w-5 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`} />
              ) : (
                <FaBars className={`h-5 w-5 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { 
              opacity: 1, 
              height: 'auto',
              transition: { 
                opacity: { duration: 0.2 },
                height: { type: 'spring', stiffness: 300, damping: 30 }
              }
            },
            closed: { 
              opacity: 0, 
              height: 0,
              transition: { 
                opacity: { duration: 0.1 },
                height: { duration: 0.2 }
              }
            }
          }}
          className="md:hidden overflow-hidden"
        >
          <div className={`mt-4 pt-2 pb-4 space-y-1 px-2 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100/80'} backdrop-blur-md`}>
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 + 0.1 }}
                className={`block px-4 py-3 rounded-lg text-base font-medium ${darkMode ? 'text-gray-200 hover:bg-indigo-500/20 hover:text-indigo-300' : 'text-gray-700 hover:bg-indigo-500/10 hover:text-indigo-600'} transition-colors`}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="flex justify-center space-x-6 pt-3 px-3 border-t border-gray-200 dark:border-gray-700 mt-3">
              {[
                { icon: <FaGithub />, href: "https://github.com/ardianwn" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ardian-wahyu-nizar-034625172/" },
                { icon: <FaYoutube />, href: "https://www.youtube.com/@rdynwh404" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 + 0.3 }}
                  whileHover={{ scale: 1.1, color: darkMode ? '#818cf8' : '#6366f1' }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full ${darkMode ? 'text-gray-300 hover:bg-gray-700/50' : 'text-gray-600 hover:bg-gray-200/50'} transition-all`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;