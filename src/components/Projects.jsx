import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaDigitalOcean, FaGlobe, FaLaravel,  FaCalendarAlt } from 'react-icons/fa';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { SiBootstrap, SiCodeigniter, SiCpanel, SiGoogleearth, SiLeaflet, SiMysql, SiReact, SiTailwindcss, SiThreedotjs, SiVite } from 'react-icons/si';

// Import different screenshots for each project using @ alias
import DroneSimulation from '@/assets/images/dronesimulasi.png';
import Nawasena from '@/assets/images/nawasena.png';
import Olivia from '@/assets/images/olivia.png';
import ProjectTracker from '@/assets/images/projecttracker.png';
import PSIK from '@/assets/images/psik.png';
import TravelBudget from '@/assets/images/travelbudget.png';
import WebGis from '@/assets/images/webgis.png';

const projects = [
  {
    title: 'Project Tracker',
    description: 'Fully featured Project Tracker with Github OAuth, Student Activity Chart, and admin dashboard built with Laravel Breeze and Tailwind.',
    tags: ['Laravel', 'MySQL', 'Tailwind CSS','VPS','DigitalOcean'],
    github: 'https://github.com/ardianwn/project-monitoring',
    live: 'http://104.248.116.143/login', 
    features: [
      'Data visualization with Chart.js',
      'Responsive UI with Tailwind CSS',
      'MySQL database optimization',
      'Mobile Responsive',
      'DigitalOcean deployment'
    ],
    icons: [
      <FaLaravel key="laravel" className="text-red-500" />,
      <FaDigitalOcean key="digitalocean" className="text-blue-400" />,
      <SiMysql key="mysql" className="text-blue-600" />,
      <SiTailwindcss key="tailwind" className="text-cyan-400" />
    ],
    image: ProjectTracker,
    imageAlt: 'Project Tracker Report Page'
  },
  {
    title: 'Indonesia Vocational Olympiad 2025 registration system',
    description: 'Participant registration with live chat feature for real-time communication between participants and organizers, as well as file management, and efficient registration status notification.',
    tags: ['Laravel', 'MySQL', 'Tailwind CSS','VPS','DigitalOcean'],
    github: 'https://github.com/ardianwn/olivia-dashboard',
    live: 'http://olivia10.xyz/',
    features: [
      'OAuth with Google',
      'Live Chat Feature',
      'Notification System',
      'Export to PDF/Excel',
      'Mobile Responsive'
    ],
    icons: [
      <FaLaravel key="laravel" className="text-red-500" />,
      <FaDigitalOcean key="digitalocean" className="text-blue-400" />,
      <SiMysql key="mysql" className="text-blue-600" />,
      <SiTailwindcss key="tailwind" className="text-cyan-400" />
    ],
    image: Olivia,
    imageAlt: 'Login Page OLIVIA X 2025'
  },
  {
    title: 'Blitar Travel Budgeting',
    description: 'Travel Budgeting application with Geographical Information System feature, built with Laravel 12.',
    tags: ['Laravel', 'Leaflet Js','MySQL', 'Tailwind CSS'],
    github: 'https://github.com/ardianwn/tbudget-laravel12',
    live: 'https://youtu.be/jbVBK3eJyCk?si=lJ4TlW3joE79AFti',
    features: [
      'Budgeting Calculator',
      'Tourist spot rating feature',
      'Interactive map with tourist location points',
      'Admin and user different features',
      'Mobile Responsive'
    ],
    icons: [
      <FaLaravel key="laravel" className="text-red-500" />,
      <SiLeaflet key="leaflet" className="text-green-400" />,
      <SiMysql key="mysql" className="text-blue-600" />,
      <SiTailwindcss key="tailwind" className="text-cyan-400" />
    ],
    image: TravelBudget,
    imageAlt: 'Dashboard Travel Budget'
  },
  {
    title: 'Company profile of PT NAWASENA BAWIKA INSAN NUSANTARA',
    description: 'Multi-Language Company Profile built with Laravel 12 and Tailwind.',
    tags: ['Laravel', 'Tailwind CSS','CPanel','Deployment'],
    github: 'https://github.com/ardianwn/nawasena-company',
    live: 'https://rempahnawasena.com/', 
    features: [
      'Japanese-English multilingual',
      'Responsive UI with Tailwind CSS',
      'Mobile Responsive',
      'CPanel deployment'
    ],
    icons: [
      <FaLaravel key="laravel" className="text-red-500" />,
      <SiCpanel key="cpanel" className="text-blue-400" />,
      <SiTailwindcss key="tailwind" className="text-cyan-400" />
    ],
    image: Nawasena,
    imageAlt: 'Nawasena Company profile'
  },
  {
    title: 'Drone Simulation',
    description: 'Using Three.js is a web-based drone flight simulation platform with interactive 3D visualization, manual and automatic control.',
    tags: ['ThreeJS', 'Vite', 'Tailwind CSS','UWB Positioning', 'Obstacle Avoidance', 'Autopilot'],
    github: 'https://github.com/ardianwn/drone-simulation-threejs',
    live: 'https://drone-simulation-threejs.vercel.app/',
    features: [
    'Manual control via keyboard',
    'Autopilot mode with custom waypoints',
    'Automatic patrol mode',
    'Automatic docking & charging',
    'Positioning based on UWB & visual systems',
    'Real-time obstacle avoidance',
    'Visual analysis of chicken distribution',
    'Monitoring of barn conditions'
    ],
    icons: [
      <SiThreedotjs key="threedots" className="text-blue-400" />,
      <SiVite key="vite" className="text-blue-400" />,
      <SiTailwindcss key="tailwind" className="text-cyan-400" />
    ],
    image: DroneSimulation,
    imageAlt: 'Drone Simulation'
  },
  {
  title: 'PLATFORM VISUALISASI DATA WebGIS Indonesia',
  description: 'An interactive web application that allows users to explore and visualize geographic and statistical data across Indonesia with a modern and responsive look, using technologies such as Leaflet.js for interactive maps.',
  tags: ['WebGIS', 'Geospatial Data', 'Data Visualization', 'Interactive Map', 'React', 'Leaflet.js'],
  github: 'https://github.com/ardianwn/webgis',
  live: 'https://webgis-eight.vercel.app/',
  features: [
    'Interactive map with geospatial data',
    'Real-time data updates',
    'Data layer integration',
    'Responsive design for all devices',
    'Customizable data visualizations',
    'Leaflet.js-based map rendering'
  ],
  icons: [
    <SiGoogleearth key="googleearth" className="text-green-500" />,
    <SiReact key="react" className="text-blue-500" />,
    <FaGlobe key="globe" className="text-blue-700" />,
    <SiLeaflet key="leaflet" className="text-green-400" />
  ],
    image: WebGis,
    imageAlt: 'WebGIS Indonesia'
  },
{
  title: 'Web Monitoring Karyawan Magang menggunakan CI4 dan Bootstrap',
  description: 'A web platform to monitor interns activities using the CodeIgniter 4 (CI4) framework and Bootstrap, and equipped with a calendar feature to facilitate efficient management of internship schedules and tasks.',
  tags: ['CI4', 'Bootstrap', 'Web Monitoring', 'Internship Management', 'Calendar Library'],
  github: 'https://github.com/ardianwn/psik',
  live: 'https://youtu.be/71MwjrTIkuc?si=XM8xCssY8W2WoY4H',
  features: [
    'Attendance Dashboard for admins and interns',
    'Daily activity logging with organized time',
    'Task schedule management with calendar feature',
    'Automatic notifications for task reminders',
    'Responsive on various devices',
    'Web-based intern data management'
  ],
  icons: [
    <SiCodeigniter key="ci4" className="text-yellow-500" />,
    <SiBootstrap key="bootstrap" className="text-info" />,
    <FaCalendarAlt key="calendar" className="text-green-400" />
  ],
  image: PSIK,
  imageAlt: 'Web intern monitoring interface'
  },
];

const Projects = ({ _darkMode }) => {
  const isDark = _darkMode;
  const [visibleProjects, setVisibleProjects] = useState(3); // Initially show 3 projects
  const [showAll, setShowAll] = useState(false);

  // Function to load more projects
  const loadMoreProjects = () => {
    setVisibleProjects(projects.length); // Show all projects
    setShowAll(true);
  };

  // Function to show less projects
  const showLessProjects = () => {
    setVisibleProjects(3); // Show only 3 projects
    setShowAll(false);
  };

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-white/70 to-indigo-50/70'} relative overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className={`absolute top-20 left-20 w-96 h-96 rounded-full ${isDark ? 'bg-indigo-700/10' : 'bg-indigo-300/10'} blur-3xl`}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 45, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className={`absolute bottom-40 right-20 w-80 h-80 rounded-full ${isDark ? 'bg-purple-700/10' : 'bg-purple-300/10'} blur-3xl`}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, -30, 0]
          }}
          transition={{ 
            duration: 15,
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
              Featured Projects
            </span>
          </motion.h2>
          
          <div className="space-y-20">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl shadow-xl overflow-hidden ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col group border hover:shadow-2xl transition-all duration-500`}
              >
                <div className="md:w-1/2 relative">
                  <div className={`h-full ${isDark ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-indigo-50 to-purple-50'} flex items-center justify-center p-8`}>
                    <div className={`w-full h-80 ${isDark ? 'bg-gray-600/50 border-gray-700' : 'bg-gray-300/50 border-gray-200'} rounded-lg flex items-center justify-center border overflow-hidden group-hover:shadow-lg transition-all duration-500 relative`}>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <img 
                        src={project.image} 
                        alt={project.imageAlt}
                        className="w-full h-full object-contain p-4"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {project.icons.map((icon, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        className={`${isDark ? 'bg-gray-700' : 'bg-white'} p-2.5 rounded-lg shadow-md`}
                      >
                        {icon}
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="md:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <motion.h3 
                      className={`text-2xl font-bold mb-3 ${isDark ? 'text-gray-200 group-hover:text-indigo-400' : 'text-gray-900 group-hover:text-indigo-600'} transition-colors duration-300`}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-900'} mb-5 leading-relaxed`}>
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'} mb-3`}>Key Features:</h4>
                      <ul className="space-y-2.5">
                        {project.features.map((feature, i) => (
                          <motion.li 
                            key={i} 
                            className={`flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-900'}`}
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="w-4 h-4 mt-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex-shrink-0"></span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          whileHover={{ y: -2 }}
                          className={`px-3 py-1.5 ${isDark ? 'bg-indigo-900/30 text-indigo-300' : 'bg-indigo-50 text-indigo-700'} rounded-full text-sm font-medium`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 flex-nowrap overflow-x-auto py-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`hitespace-nowrap flex items-center px-4 py-2 text-sm md:px-5 md:py-2.5 md:text-base ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg font-medium transition-colors ${project.github === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={(e) => project.github === '#' ? e.preventDefault() : null}
                    >
                      <FiGithub className="mr-2" /> View Code
                    </motion.a>
                    
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`hitespace-nowrap flex items-center px-4 py-2 text-sm md:px-5 md:py-2.5 md:text-base bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg ${project.live === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={(e) => project.live === '#' ? e.preventDefault() : null}
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {!showAll ? (
              <motion.button
                onClick={loadMoreProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-8 py-3.5 border-2 ${isDark ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-900/30' : 'border-indigo-600 text-indigo-600 hover:bg-indigo-50'} rounded-lg font-medium transition-colors`}
              >
                View All Projects
                <motion.span 
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </motion.button>
            ) : (
              <motion.button
                onClick={showLessProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-8 py-3.5 border-2 ${isDark ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-900/30' : 'border-indigo-600 text-indigo-600 hover:bg-indigo-50'} rounded-lg font-medium transition-colors`}
              >
                Show Less
                <motion.span 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↑
                </motion.span>
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;