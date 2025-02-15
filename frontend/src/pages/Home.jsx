import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../Components/Hero';
import { FaCode, FaLaptopCode, FaMobileAlt, FaCloud, FaShieldAlt, FaUsers } from 'react-icons/fa';
import '../../public/fonts.css'; 

const hoverAnimation = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const leftMotion = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const headerMotion = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const services = [
  { icon: <FaCode className="text-4xl text-white" />, title: "Web Development", description: "Building responsive and scalable web applications.", bgColor: "bg-blue-500" },
  { icon: <FaMobileAlt className="text-4xl text-white" />, title: "Mobile Development", description: "Creating user-friendly mobile applications for both Android and iOS platforms.", bgColor: "bg-green-500" },
  { icon: <FaCloud className="text-4xl text-white" />, title: "Cloud Solutions", description: "Enhancing business operations with cloud-based solutions.", bgColor: "bg-purple-500" },
  { icon: <FaShieldAlt className="text-4xl text-white" />, title: "Cybersecurity", description: "Providing robust security solutions for your business.", bgColor: "bg-red-500" },
  { icon: <FaLaptopCode className="text-4xl text-white" />, title: "Software Consulting", description: "Offering expert software consulting services to help you make informed decisions.", bgColor: "bg-yellow-500" },
  { icon: <FaUsers className="text-4xl text-white" />, title: "IT Support", description: "Providing reliable IT support to ensure your systems run smoothly.", bgColor: "bg-indigo-500" },
];

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 text-center font-inter"
            initial="initial"
            animate="animate"
            variants={headerMotion}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-700 text-center"
            initial="initial"
            animate="animate"
            variants={headerMotion}
          >
            We offer a wide range of services to meet your business needs.
          </motion.p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-lg shadow-lg text-center text-white ${service.bgColor}`}
                whileHover="hover"
                variants={hoverAnimation}
                initial="initial"
                animate="animate"
                transition="transition"
                {...leftMotion}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-4">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.h2 className="text-4xl font-extrabold text-gray-900 "  initial="initial"
            animate="animate"
            variants={headerMotion}>Our Mission, Vision, and Values</motion.h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{ title: "Our Mission", description: "Delivering exceptional software solutions." },
              { title: "Our Vision", description: "Becoming a leading software company known for innovation." },
              { title: "Our Values", description: "Integrity, professionalism, and quality in everything we do." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform"
                whileHover="hover"
                variants={hoverAnimation}
              >
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-4 text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;