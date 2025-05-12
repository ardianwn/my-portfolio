import { motion } from 'framer-motion';
import { FaCloud, FaDatabase, FaLaptopCode, FaServer } from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';
import { SiCodeigniter } from 'react-icons/si';

const About = ({ _darkMode }) => {
  const isDark = _darkMode;
  
  const skills = [
    { name: 'Laravel', icon: <FaServer className="text-indigo-500" /> },
    { name: 'CodeIgniter 4', icon: <SiCodeigniter className="text-orange-500" /> },
    { name: 'React.js', icon: <FaLaptopCode className="text-sky-400" /> },
    { name: 'MySQL', icon: <FaDatabase className="text-blue-600" /> },
    { name: 'Tailwind CSS', icon: <FaLaptopCode className="text-cyan-400" /> },
    { name: 'Git', icon: <FaCloud className="text-orange-600" /> },
    { name: 'Virtual Private Server', icon: <FaServer className="text-orange-500" /> },
    { name: 'DigitalOcean', icon: <FaCloud className="text-blue-400" /> },
    { name: 'UI/UX Design', icon: <FaLaptopCode className="text-pink-500" /> },
  ];

const experience = [
  {
    role: 'Assistant Lecturer',
    company: 'Faculty of Vocational Studies, Universitas Brawijaya Malang',
    period: 'Feb 2025 - Present',
    description: 'Supporting academic activities and faculty projects',
    achievements: [
      'Assist with student assignment grading',
      'Assist with preparation of faculty journal publications',
      'Contribute to faculty projects'
    ]
  },
  {
    role: 'Web Developer, Internship',
    company: 'PSIK Fakultas Vokasi Universitas Brawijaya Malang',
    period: 'Aug 2024 - Present',
    description: 'Website development and management for the university',
    achievements: [
      'Manage and develop the Brawijaya University Vocational Faculty website using WordPress',
      'Creating a PSIK Employee Management Website for Vocational Faculty using Codeigniter 4 and Bootstrap'
    ]
  },
  {
    role: 'Technical Support, Internship',
    company: 'GAOTek Inc., Toronto, Canada',
    period: 'Oct 2023 - Dec 2024',
    description: 'Technical support and digital content development',
    achievements: [
      'Tech writing and documentation',
      'Involved in tech support, webpages and datasheets development',
      'Digital marketing and SEO',
      'Content writing for online stores such as Amazon'
    ]
  }
];

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-white/70 to-indigo-50/70'} relative overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className={`absolute -top-20 -left-20 w-64 h-64 rounded-full ${isDark ? 'bg-indigo-700/10' : 'bg-indigo-300/10'} blur-3xl`}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className={`absolute -bottom-32 -right-20 w-80 h-80 rounded-full ${isDark ? 'bg-purple-700/10' : 'bg-purple-300/10'} blur-3xl`}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
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
              About Me
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div 
              className="space-y-7"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-25"></div>
                <div className={`relative p-6 ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-900'} rounded-lg shadow-xl`}>
                  <p className="text-lg leading-relaxed">
                    I'm a passionate <span className={`font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Full Stack Web Developer</span> with less than 1 year of experience in building dynamic and scalable web applications. My expertise includes frontend, backend development as well as deployment, with a strong focus on creating efficient and maintainable systems.
                  </p>
                </div>
              </div>
              
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-900'} leading-relaxed`}>
                I specialize in modern web technologies including <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Laravel</span>, <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>CodeIgniter 4</span>, and <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>React.js</span>, with extensive experience in <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>MySQL</span> database design and optimization. I leverage <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Tailwind CSS</span> to create responsive, accessible interfaces with exceptional user experience.
              </p>
              
              <div>
                <h3 className={`text-xl font-semibold mb-5 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>Technical Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                      className={`flex items-center gap-2 px-4 py-3 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm hover:shadow-md transition-all duration-300`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <div className={`p-2 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        {skill.icon}
                      </div>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-900'} font-medium`}>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-900'} leading-relaxed pt-4`}>
                When I'm not coding, you can find me hiking in nature or experimenting with new cooking recipes. I believe in continuous learning and staying updated with the latest industry trends.
              </p>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-1 rounded-2xl shadow-xl">
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 h-full`}>
                  <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    <FiAward className="text-indigo-500" />
                    <span>Professional Experience</span>
                  </h3>
                  
                  <div className="space-y-8">
                    {experience.map((exp, index) => (
                      <motion.div 
                        key={index}
                        whileHover={{ x: 5 }}
                        className="border-l-4 border-indigo-500 pl-5 py-1 relative group"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.2 }}
                      >
                        <div className="absolute -left-[18px] top-0 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                          {index + 1}
                        </div>
                        <h4 className={`font-bold text-lg ${isDark ? 'text-gray-200 group-hover:text-indigo-400' : 'text-gray-800 group-hover:text-indigo-600'} transition-colors`}>
                          {exp.role}
                        </h4>
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm font-medium`}>
                          {exp.company} • {exp.period}
                        </p>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mt-2`}>
                          {exp.description}
                        </p>
                        {exp.achievements && (
                          <ul className="mt-3 space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li 
                                key={i} 
                                className={`flex items-start gap-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-800'}`}
                                whileHover={{ x: 2 }}
                                transition={{ duration: 0.2 }}
                              >
                                <span className="text-indigo-500 mt-1 text-lg">•</span>
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className={`absolute -bottom-8 -left-8 w-20 h-20 rounded-full ${isDark ? 'bg-indigo-400/20' : 'bg-indigo-400/10'} -z-10`}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className={`absolute -top-8 -right-8 w-16 h-16 rounded-full ${isDark ? 'bg-purple-400/20' : 'bg-purple-400/10'} -z-10`}
                animate={{
                  y: [0, 10, 0],
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;