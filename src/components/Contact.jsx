import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaFileAlt, FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { HiOutlineCheckCircle, HiOutlineExclamationCircle } from 'react-icons/hi';

const Contact = ({ _darkMode }) => {
  const isDark = _darkMode;
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.sendForm(
      'service_fgrrlmc', 
      'template_eoa4n4s', 
      form.current, 
      'ooya6D_qUpO3n9YHc'
    )
    .then((_result) => {
      setMessage({ text: 'Message sent successfully! I will get back to you soon.', type: 'success' });
      form.current.reset();
    }, (_error) => {
      setMessage({ text: 'Failed to send message. Please try again or contact me directly at my email.', type: 'error' });
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    });
  };

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-indigo-50/70 to-white/70'} relative overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className={`absolute -top-20 right-20 w-72 h-72 rounded-full ${isDark ? 'bg-indigo-700/10' : 'bg-indigo-300/10'} blur-3xl`}
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
          className={`absolute bottom-40 -left-20 w-80 h-80 rounded-full ${isDark ? 'bg-purple-700/10' : 'bg-purple-300/10'} blur-3xl`}
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
              Get In Touch
            </span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>Contact Information</h3>
                
                <div className="space-y-5">
                  <motion.div 
                    className={`flex items-start gap-5 p-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl shadow-md hover:shadow-lg transition-shadow border`}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`p-3 ${isDark ? 'bg-indigo-900/50' : 'bg-indigo-100'} rounded-lg`}>
                      <FiMail className={`${isDark ? 'text-indigo-400' : 'text-indigo-600'} text-xl`} />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>Email</h4>
                      <a 
                        href="mailto:ardianwahyunizar614@gmail.com" 
                        className={`${isDark ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-800 hover:text-indigo-600'} transition-colors`}
                      >
                        ardianwahyunizar614@gmail.com
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className={`flex items-start gap-5 p-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl shadow-md hover:shadow-lg transition-shadow border`}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`p-3 ${isDark ? 'bg-purple-900/50' : 'bg-purple-100'} rounded-lg`}>
                      <FiMapPin className={`${isDark ? 'text-purple-400' : 'text-purple-600'} text-xl`} />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>Location</h4>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-800'}`}>Blitar, IDN</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className={`flex items-start gap-5 p-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl shadow-md hover:shadow-lg transition-shadow border`}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`p-3 ${isDark ? 'bg-green-900/50' : 'bg-green-100'} rounded-lg`}>
                      <FiPhone className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl`} />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>Phone</h4>
                      <a 
                        href="tel:+6281917382133" 
                        className={`${isDark ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-800 hover:text-indigo-600'} transition-colors`}
                      >
                        +62 (819) 1738-2133
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div>
                <h4 className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'} mb-4`}>Connect With Me</h4>
                <div className="flex gap-4">
                  {[
                    { name: 'Github', icon: <FaGithub className="w-5 h-5" />, url: 'https://github.com/ardianwn' },
                    { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/ardian-wahyu-nizar-034625172/' },
                    { name: 'TikTok', icon: <FaTiktok className="w-5 h-5" />, url: 'https://www.tiktok.com/@ardian.wn' },
                    { name: 'Resume', icon: <FaFileAlt className="w-5 h-5" />, url: 'https://drive.google.com/file/d/1eCe8A5Eqj_Gv4FzlQMS2pGUpg-1oAfL7/view?usp=sharing' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 ${isDark ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-100 hover:bg-gray-50'} rounded-lg shadow-md hover:shadow-lg transition-all border group`}
                      aria-label={social.name}
                    >
                      <span className="sr-only">{social.name}</span>
                      <motion.div 
                        className={`${isDark ? 'text-gray-400 group-hover:text-indigo-400' : 'text-gray-600 group-hover:text-indigo-600'} transition-colors`}
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      >
                      {social.icon}
                      </motion.div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl shadow-xl p-8 border relative overflow-hidden`}
            >
              <div className={`absolute -right-16 -bottom-16 w-32 h-32 ${isDark ? 'bg-indigo-400/20' : 'bg-indigo-400/10'} rounded-full blur-xl`}></div>
              <div className={`absolute -left-16 -top-16 w-32 h-32 ${isDark ? 'bg-purple-400/20' : 'bg-purple-400/10'} rounded-full blur-xl`}></div>
            
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-gray-200' : 'text-gray-800'} relative z-10`}>Send Me a Message</h3>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className={`block font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>Your Name</label>
                    <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.01 }}>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      required
                        className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-white'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                    />
                    </motion.div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className={`block font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>Your Email</label>
                    <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.01 }}>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      required
                        className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-white'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                    />
                    </motion.div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className={`block font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>Your Message</label>
                    <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.01 }}>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                        className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-white'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none`}
                    ></textarea>
                    </motion.div>
                  </div>
                </div>
                
                {message.text && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-3 p-4 rounded-lg ${
                      message.type === 'success' 
                        ? `${isDark ? 'bg-green-900/30 text-green-300 border-green-800' : 'bg-green-50 text-green-700 border-green-200'} border` 
                        : `${isDark ? 'bg-red-900/30 text-red-300 border-red-800' : 'bg-red-50 text-red-700 border-red-200'} border`
                    }`}
                  >
                    {message.type === 'success' ? (
                      <HiOutlineCheckCircle className="text-xl flex-shrink-0 mt-0.5" />
                    ) : (
                      <HiOutlineExclamationCircle className="text-xl flex-shrink-0 mt-0.5" />
                    )}
                    <span>{message.text}</span>
                  </motion.div>
                )}
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-medium disabled:opacity-70 transition-all shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;