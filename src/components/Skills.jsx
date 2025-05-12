import { motion } from 'framer-motion';
import { FaCode, FaDigitalOcean, FaGitAlt, FaLaravel, FaReact, FaServer } from 'react-icons/fa';
import { SiCodeigniter, SiMysql, SiTailwindcss } from 'react-icons/si';

const Skills = ({ _darkMode }) => {
  const isDark = _darkMode;

  const technicalSkills = [
    { name: 'Laravel', icon: <FaLaravel className="text-red-500" />, level: 90 },
    { name: 'CodeIgniter 4', icon: <SiCodeigniter className="text-orange-500" />, level: 85 },
    { name: 'React.js', icon: <FaReact className="text-blue-400" />, level: 88 },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" />, level: 87 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, level: 92 },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, level: 85 },
    { name: 'VPS', icon: <FaDigitalOcean className="text-blue-400" />, level: 80 },
    { name: 'UI/UX Design', icon: <FaCode className="text-purple-500" />, level: 83 },
  ];

  const languageSkills = [
    { name: 'PHP', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'SQL', level: 85 },
  ];

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-indigo-50/70 to-white/70'} relative overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className={`absolute top-40 right-40 w-72 h-72 rounded-full ${isDark ? 'bg-indigo-700/10' : 'bg-indigo-300/10'} blur-3xl`}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 45, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className={`absolute bottom-20 left-20 w-80 h-80 rounded-full ${isDark ? 'bg-purple-700/10' : 'bg-purple-300/10'} blur-3xl`}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, -30, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl shadow-lg p-8 border`}
            >
              <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                <div className={`p-2 ${isDark ? 'bg-indigo-900/40' : 'bg-indigo-100'} rounded-lg`}>
                  <FaServer className={`${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                </div>
                <span>Development Skills</span>
              </h3>
              
              <div className="space-y-7">
                {technicalSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 flex items-center justify-center ${isDark ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg shadow-sm`}>
                          {skill.icon}
                        </div>
                        <span className={`font-medium ${isDark ? 'text-gray-300 group-hover:text-indigo-400' : 'text-gray-900 group-hover:text-indigo-600'} transition-colors`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-sm font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5 overflow-hidden shadow-inner relative`}>
                      <motion.div 
                        className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                      <motion.div 
                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
                        animate={{ 
                          x: ['-100%', '100%'],
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          repeatDelay: 1
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Language Skills & Approach */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl shadow-lg p-8 border`}
              >
                <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                  <div className={`p-2 ${isDark ? 'bg-purple-900/40' : 'bg-purple-100'} rounded-lg`}>
                    <FaCode className={`${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                  </div>
                  <span>Language Proficiency</span>
                </h3>
                
                <div className="space-y-7">
                  {languageSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-medium ${isDark ? 'text-gray-300 group-hover:text-purple-400' : 'text-gray-900 group-hover:text-purple-600'} transition-colors`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm font-medium ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5 overflow-hidden shadow-inner relative`}>
                        <motion.div 
                          className="h-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                        />
                        <motion.div 
                          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
                          animate={{ 
                            x: ['-100%', '100%'],
                          }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            repeatDelay: 1.5
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl shadow-lg p-8 border relative overflow-hidden`}
              >
                <div className={`absolute -right-10 -bottom-10 w-40 h-40 ${isDark ? 'bg-indigo-900/20' : 'bg-indigo-100/50'} rounded-full blur-xl`}></div>
              
                <h3 className={`text-2xl font-bold mb-5 ${isDark ? 'text-gray-200' : 'text-gray-900'} relative z-10`}>
                  Development Approach
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-900'} mb-5 relative z-10`}>
                  I specialize in building full-stack applications with <span className={`font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Laravel/CodeIgniter</span> backends and <span className={`font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>React.js</span> frontends, connected to <span className={`font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>MySQL</span> databases.
                </p>
                <ul className="space-y-3 relative z-10">
                  {[
                    'Clean, maintainable code following SOLID principles',
                    'RESTful API development with proper documentation',
                    'Responsive UI development with Tailwind CSS',
                    'Database optimization and efficient queries',
                    'Git version control and CI/CD deployment'
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start gap-2"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 w-5 h-5 rounded-full flex-shrink-0 mt-1"></span>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-900'}`}>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            className={`absolute left-1/4 -bottom-20 w-24 h-24 rounded-full ${isDark ? 'bg-indigo-400/20' : 'bg-indigo-400/10'} -z-10`}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className={`absolute right-1/4 -top-10 w-20 h-20 rounded-full ${isDark ? 'bg-purple-400/20' : 'bg-purple-400/10'} -z-10`}
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;