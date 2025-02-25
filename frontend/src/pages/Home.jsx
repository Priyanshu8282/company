import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../Components/Hero';
import { FaCode, FaLaptopCode, FaMobileAlt, FaCloud, FaShieldAlt, FaUsers } from 'react-icons/fa';
import '../../public/fonts.css'; 
import Tech from '../Components/Tech';

const hoverAnimation = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
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
  { icon: <FaCode className="text-6xl text-black" />, title: "Web Development", description: "Building responsive and scalable web applications.", bgColor: "bg-blue-200" },
  { icon: <FaMobileAlt className="text-4xl text-black" />, title: "Mobile Development", description: "Creating user-friendly mobile applications for both Android and iOS platforms.", bgColor: "bg-purple-200" },
  { icon: <FaCloud className="text-4xl text-black" />, title: "Cloud Solutions", description: "Enhancing business operations with cloud-based solutions.", bgColor: "bg-pink-200" },
  { icon: <FaShieldAlt className="text-4xl text-black" />, title: "Cybersecurity", description: "Providing robust security solutions for your business.", bgColor: "bg-green-200" },
  { icon: <FaLaptopCode className="text-4xl text-black" />, title: "Software Consulting", description: "Offering expert software consulting services to help you make informed decisions.", bgColor: "bg-orange-200" },
  { icon: <FaUsers className="text-4xl text-black" />, title: "IT Support", description: "Providing reliable IT support to ensure your systems run smoothly.", bgColor: "bg-indigo-200" },
];

function Home() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      {/* Enhanced Services Section */}
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className={`p-8 rounded-lg shadow-lg text-center text-black ${service.bgColor} transition-transform transform hover:scale-105`}
                whileHover="hover"
                variants={hoverAnimation}
                initial="initial"
                animate="animate"
                transition="transition"
                {...leftMotion}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {hoveredService === index ? (
                  <>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="mt-4">{service.description}</p>
                  </>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Tech />

      {/* Mission, Vision, and Values Section */}
      <section className=" py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 font-inter"
            initial="initial"
            animate="animate"
            variants={headerMotion}
          >
            Our Mission, Vision, and Values
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-700 text-center"
            initial="initial"
            animate="animate"
            variants={headerMotion}
          >
            Guiding principles that drive our success.
          </motion.p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Our Mission", description: "Delivering exceptional software solutions." },
              { title: "Our Vision", description: "Becoming a leading software company known for innovation." },
              { title: "Our Values", description: "Integrity, professionalism, and quality in everything we do." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
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