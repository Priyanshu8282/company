import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../Components/Hero';
import { FaCode, FaLaptopCode, FaMobileAlt, FaCloud, FaShieldAlt, FaUsers } from 'react-icons/fa';

const blurAnimation = {
  initial: { filter: 'blur(10px)' },
  animate: { filter: 'blur(0px)', transition: { duration: 1 } },
};

function Home() {
  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section className="bg-custom bg-gradient-to-b from-blue-100 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">Our Services</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaCode className="text-4xl text-blue-500" />, title: "Web Development", description: "Building responsive and scalable web applications tailored to your business needs." },
              { icon: <FaMobileAlt className="text-4xl text-blue-500" />, title: "Mobile Development", description: "Creating user-friendly mobile applications for both Android and iOS platforms." },
              { icon: <FaCloud className="text-4xl text-blue-500" />, title: "Cloud Solutions", description: "Offering cloud-based solutions to enhance your business operations and scalability." },
              { icon: <FaShieldAlt className="text-4xl text-blue-500" />, title: "Cybersecurity", description: "Providing robust cybersecurity solutions to protect your business from threats." },
              { icon: <FaLaptopCode className="text-4xl text-blue-500" />, title: "Software Consulting", description: "Offering expert software consulting services to help you make informed decisions." },
              { icon: <FaUsers className="text-4xl text-blue-500" />, title: "IT Support", description: "Providing reliable IT support to ensure your systems run smoothly." },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-extrabold text-gray-900">Our Mission, Vision, and Values</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Our Mission", description: "To deliver exceptional software solutions that exceed our clients' expectations and drive business success." },
              { title: "Our Vision", description: "To be the leading software company known for innovation, creativity, and excellence." },
              { title: "Our Values", description: "Integrity, professionalism, and a commitment to quality are at the core of everything we do." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                initial="initial"
                animate="animate"
                variants={blurAnimation}
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