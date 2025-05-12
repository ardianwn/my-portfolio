import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaAws, FaCode } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { SiCisco } from 'react-icons/si';

const certifications = [
  {
    title: 'Copyright Anti Jockey Assignment Application - Web-based Student Assignment Monitoring',
    issuer: 'Ministry of Law',
    date: 'Apr 16, 2025',
    credentialId: '000879382',
    link: 'https://hakcipta.dgip.go.id/legal/c/OTY4NzZhYTA2MjAzNWMwNzkyMDU3NWU2N2UyOGI5YmM=',
    icon: <FaCode key="haki" className="text-blue-400" />,
    features: [
      'Building authentication system, authorization, data validation, and activity tracking features.',
      'Design efficient data relations and queries for tasks and users.',
      'Create clean and responsive UI for monitoring dashboards.',
      'Manage access and develop internal APIs.',
      'Manage project versions and deploy to the server.'
    ]
  },
  {
    title: 'Copyright Web-based Student Practicum Monitoring Application',
    issuer: 'Ministry of Law',
    date: 'Apr 14, 2025',
    credentialId: '000878679',
    link: 'https://hakcipta.dgip.go.id/legal/c/NzViMjM3Y2FlYjRiYTg4NTUwMDQwNTU1YTQ2MDgwOTY=',
    icon: <FaCode key="haki" className="text-blue-400" />,
    features: [
      'Proficient in building web apps with authentication, routing, RESTful API, and database management (Eloquent, migration).',
      'Able to create responsive and clean UI with utility-first approach.',
      'Familiar with using Git for version control and deploy application to server.',
      'Writing structured code according to MVC pattern and Laravel standard.'
    ]
  },
  {
    title: 'Getting Started with Python Programming',
    issuer: 'Dicoding Indonesia',
    date: 'Jan 22, 2025',
    credentialId: 'MEPJQEQLJX3V',
    link: 'https://www.dicoding.com/certificates/MEPJQEQLJX3V',
    icon: <FaCode key="dicoding" className="text-blue-400" />,
    features: [
      'Writing code and understanding basic syntax',
      'Using branching and looping to control program flow',
      'Applying Object-Oriented Programming concepts (classes, objects, inheritance)',
      'Testing programs to ensure code quality',
      'Using Python libraries for various purposes (data, web scraping, machine learning)'
    ]
  },
  {
    title: 'Learn the Basics of Data Visualization',
    issuer: 'Dicoding Indonesia',
    date: 'Nov 10, 2024',
    credentialId: 'JLX14VY72X72',
    link: 'https://www.dicoding.com/certificates/JLX14VY72X72',
    icon: <FaCode key="dicoding" className="text-blue-400" />,
    features: [
      'Understand the concept of data visualization, media, and tools used, such as Google Sheets',
      'Use a spreadsheet application (Google Sheets) to process and prepare data for visualization',
      'Transform data into graphs, avoid common mistakes, and apply visual design principles such as Gestalt and Preattentive Attributes',
      'Understand how data visualization is applied in the world of programming'
    ]
  },
  {
    title: 'Architecting on AWS (Building Cloud Architecture on AWS)',
    issuer: 'Dicoding Indonesia',
    date: 'Jul 10, 2024',
    credentialId: 'GRX5OY0WRP0M',
    link: 'https://www.dicoding.com/certificates/GRX5OY0WRP0M',
    icon: <FaAws key="aws" className="text-orange-500" />,
    features: [
      'Hosting static websites with Amazon S3 and using Amazon EC2, EBS, RDS, DynamoDB for cloud architecture',
      'Creating and managing Amazon VPC, and network connections (VPN, Direct Connect)',
      'Automating deployments with AWS CloudFormation and managing scaling using EC2 Auto Scaling',
      'Implementing serverless architectures with AWS Lambda, API Gateway, and Fargate',
      'Planning for disaster mitigation and using AWS Storage Gateway for data recovery'
    ]
  },
  {
    title: 'Advanced Software Engineering Job Simulation',
    issuer: 'Forage',
    date: 'Juny 2024',
    credentialId: 'ecfRniPmrcjc6uHjc',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_ZicgAmF6GSxTJmpg5_1719665647037_completion_certificate.pdf',
    icon: <FaCode key="dicoding" className="text-blue-400" />,
    features: [
      'Data Munging',
      'Data Structures',
      'Relational Databases',
      'Software Architecture',
      'Unified Modeling Language (UML)'
    ]
  },
  {
    title: 'Beginner Back-End Learning with JavaScript',
    issuer: 'Dicoding Indonesia',
    date: 'Jun 25, 2024',
    credentialId: '07Z607Y4MZQR',
    link: 'https://www.dicoding.com/certificates/07Z607Y4MZQR',
    icon: <FaCode key="dicoding" className="text-blue-400" />,
    features: [
      'Understand client-server communication over HTTP and the architecture of RESTful APIs',
      'Master Node.js, including modularization, NPM, eventing, and filesystems',
      'Create RESTful APIs using Node.js and the Hapi framework',
      'Use Amazon EC2 to deploy applications and run RESTful APIs',
      'Use Postman to test and write automated test scenarios'
    ]
  },
  {
    title: 'Learn Cloud Basics and Gen AI on AWS',
    issuer: 'Dicoding Indonesia',
    date: 'Apr 17, 2024',
    credentialId: 'GRX5OG7V2P0M',
    link: 'https://www.dicoding.com/certificates/GRX5OG7V2P0M',
    icon: <FaAws key="aws" className="text-orange-500" />,
    features: [
      'Use Amazon EC2, Elastic Load Balancing, and other AWS compute services',
      'Manage AWS IAM, multi-factor authentication, and shared responsibility',
      'Manage virtual private networks, AWS Direct Connect, and hybrid architectures',
      'Use Amazon EBS, S3, EFS, and DynamoDB for storage and databases',
      'Use Amazon CloudWatch and AWS CloudTrail for monitoring'
    ]
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    date: 'Mar 15, 2024',
    credentialId: '8441ef798bff',
    link: 'https://www.credly.com/badges/2591dff1-4d73-423f-9ded-8441ef798bff/linked_in_profile',
    icon: <SiCisco key="cisco" className="text-blue-600" />,
    features: [
      'Cyber Best Practices',
      'Cybersecurity',
      'Network Vulnerabilities',
      'Privacy And Data Confidentiality',
      'Threat Detection'
    ]
  },
  {
    title: 'Learn to Create Front-End Web for Beginners',
    issuer: 'Dicoding Indonesia',
    date: 'Mar 11, 2024',
    credentialId: 'EYX403ELJPDL',
    link: 'https://www.dicoding.com/certificates/EYX403ELJPDL',
    icon: <FaCode key="dicoding" className="text-blue-400" />,
    features: [
      'Able to dynamically manipulate HTML elements using JavaScript.',
      'Mastering the application of events to create user interaction on web pages.',
      'Understand and use browser APIs such as localStorage and sessionStorage to store data on the client side.'
    ]
  },
  {
    title: 'Learn Basic Web Programming',
    issuer: 'Dicoding Indonesia',
    date: 'Feb 21, 2024',
    credentialId: '0LZ02MVYKX65',
    link: 'https://www.dicoding.com/certificates/0LZ02MVYKX65',
    icon: <FaCode key="dicoding" className="text-blue-400" />,
    features: [
      'Master HTML to build web page structure, including semantic elements, tables, and the difference between inline vs block.',
      'Able to use CSS to beautify the appearance of the web, including the use of selectors, colors, fonts, box models, and layouting.',
      'Able to create responsive layouts using Flexbox and media queries for mobile-friendly display.',
      'Understand the basic concept of website (client-server), and apply HTML and CSS techniques in real projects.'
    ]
  },
  {
    title: 'Learn Basic JavaScript Programming',
    issuer: 'Dicoding Indonesia',
    date: 'Oct 14, 2023',
    credentialId: 'EYX4YOYMJZDL',
    link: 'https://www.dicoding.com/certificates/EYX4YOYMJZDL',
    icon: <FaCode key="dicoding" className="text-blue-400" />,
    features: [
      'Master variables, data types, looping, and basic programming logic.',
      'Able to use Object, Array, Map, and Set to manage complex data.',
      'Able to write modular functions and understand OOP in JavaScript (class, method, property).',
      'Understand the concept of functions as values, lambdas, and higher-order functions.',
      'Managing errors and creating asynchronous processes (callback, promise, async/await).',
      'Setting up the development environment (Node.js, IDE) and using JavaScript modules.',
      'Using the Node Package Manager library and implementing automated testing for code.'
    ]
  },
  {
    title: 'Learn Basic Structured Query Language (SQL)',
    issuer: 'Dicoding Indonesia',
    date: 'Sep 25, 2023',
    credentialId: '6RPN4VJW5X2M',
    link: 'https://www.dicoding.com/certificates/6RPN4VJW5X2M',
    icon: <FaCode key="dicoding" className="text-blue-400" />,
    features: [
      'Understand data types, data types, and basic concepts of relational databases.',
      'Get to know and use various database management systems (DBMS) that are common in the industry',
      'Master basic SQL, including DDL (CREATE, ALTER), DML (SELECT, INSERT, UPDATE, DELETE), and constraints (primary key, unique, index).',
      'Skillfully write basic SQL queries to manage and retrieve data from the database.'
    ]
  },
  {
    title: 'Getting Started with Basic Programming to Become a Software Developer',
    issuer: 'Dicoding Indonesia',
    date: 'Sep 4, 2023',
    credentialId: 'MRZMLGKMLXYQ',
    link: 'https://www.dicoding.com/certificates/MRZMLGKMLXYQ',
    icon: <FaCode key="dicoding" className="text-blue-400" />,
    features: [
      'Understand the user requirements and technical specifications of the application.',
      'Develop application requirements and create an application workflow diagram.',
      'Understanding syntax, logic, and writing code with JavaScript (ES6).',
      'Be able to modify application interfaces using HTML5 and CSS3.',
      'Writing comments, applying standard writing styles, and creating technical documentation for application development.'
    ]
  },
  {
    title: 'Learn the Basics of Project Management',
    issuer: 'Dicoding Indonesia',
    date: 'Aug 1, 2023',
    credentialId: 'L4PQGJ112ZO1',
    link: 'https://www.dicoding.com/certificates/L4PQGJ112ZO1',
    icon: <FaCode key="dicoding" className="text-blue-400" />,
    features: [
      'Proficient in project cycles and methodologies (Waterfall, Agile, Lean, Six Sigma).',
      'Understand the roles and responsibilities of project managers and cross-functional collaboration.',
      'Know the project organization structure and the role of PMO.',
      'Able to effectively compile resumes and search for project management positions.'
    ]
  }
];

const Certifications = ({ _darkMode }) => {
  const isDark = _darkMode;
  const [showAll, setShowAll] = useState(false);
  const displayedCertifications = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section id="certifications" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-white/70 to-blue-50/70'} relative overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className={`absolute top-20 left-20 w-96 h-96 rounded-full ${isDark ? 'bg-blue-700/10' : 'bg-blue-300/10'} blur-3xl`}
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
          className={`absolute bottom-40 right-20 w-80 h-80 rounded-full ${isDark ? 'bg-emerald-700/10' : 'bg-emerald-300/10'} blur-3xl`}
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
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              My Certifications
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl shadow-lg overflow-hidden group border hover:shadow-xl transition-all duration-300`}
              >
                <div className={`h-full p-6 flex flex-col ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-blue-50/50'} transition-colors duration-300`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 ${isDark ? 'bg-gray-700' : 'bg-blue-100'} rounded-xl flex items-center justify-center p-3`}>
                      {cert.icon}
                    </div>
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className={`p-2 ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'} transition-colors`}
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  </div>
                  
                  <motion.h3 
                    className={`text-xl font-bold mb-2 ${isDark ? 'text-gray-200 group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} transition-colors duration-300`}
                    whileHover={{ x: 3 }}
                  >
                    {cert.title}
                  </motion.h3>
                  
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4`}>
                    <span className="font-medium">Issued by:</span> {cert.issuer}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'} mb-2`}>Skills Validated:</h4>
                    <ul className="space-y-1.5">
                      {cert.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className={`flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm`}
                          whileHover={{ x: 3 }}
                        >
                          <span className="w-3 h-3 mt-1 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-dashed border-gray-500/30">
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        <span className="font-medium">Earned:</span> {cert.date}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                        ID: {cert.credentialId}
                      </span>
                    </div>
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
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-8 py-3.5 border-2 ${
                isDark ? 'border-blue-400 text-blue-400 hover:bg-blue-900/30' : 'border-blue-600 text-blue-600 hover:bg-blue-50'
              } rounded-lg font-medium transition-colors`}
            >
              {showAll ? 'Show Less' : 'View All Certifications'}
              <motion.span 
                animate={{ y: [0, -4, 0, 4, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {showAll ? ' ↑' : '↓'}
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Decorative elements */}
          <motion.div 
            className="absolute left-1/4 -bottom-20 w-24 h-24 rounded-full bg-blue-400/10 dark:bg-blue-400/20 -z-10"
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
            className="absolute right-1/4 -top-10 w-20 h-20 rounded-full bg-emerald-400/10 dark:bg-emerald-400/20 -z-10"
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

export default Certifications;