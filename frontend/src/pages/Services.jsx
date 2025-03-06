import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../public/fonts.css"; 

function Services() {
  const navigate = useNavigate();
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 1 } },
    hover: { scale: 1.05, rotateY: 10, transition: { duration: 0.5 } },
  };

  return (
    <div className="font-custom bg-custom bg-gradient-to-b from-blue-100 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h1 className="text-5xl font-extrabold text-blue-800 drop-shadow-md sm:text-5xl text-shadow-cyan">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-blue-600">
            We offer a wide range of services to meet your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Software Development */}
          <motion.div
            className="rounded-lg p-8 transition-shadow duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-blue-100 to-blue-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover="hover"
          >
            <img
              src="https://th.bing.com/th/id/OIP.h0H0954afvQ3m1JSEAch6wHaFW?w=294&h=212&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt="Software Development"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Software Development
            </h2>
            <p className="text-gray-700 mb-6">
              We provide custom software development, responsive design, e-commerce solutions, and web and mobile application development.
            </p>
            <h3 className="text-xl font-semibold text-blue-700">Services:</h3>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>Custom Software Development</li>
              <li>Responsive Design</li>
              <li>E-commerce Solutions</li>
              <li>Web and Mobile Application Development</li>
            </ul>
          </motion.div>

          {/* Cybersecurity (Website Pentesting) */}
          <motion.div
            className="rounded-lg p-8 transition-shadow duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-blue-100 to-blue-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover="hover"
          >
            <img
              src="https://www.impactqa.com/wp-content/uploads/2022/01/Penetration-Blog.jpg"
              alt="Cybersecurity"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Cybersecurity (Website Pentesting)
            </h2>
            <p className="text-gray-700 mb-6">
              We offer web application security testing, threat analysis, security audits, and data encryption solutions.
            </p>
            <h3 className="text-xl font-semibold text-blue-700">Services:</h3>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>Web Application Security Testing</li>
              <li>Analysis of threats like SQL Injection, XSS, and CSRF</li>
              <li>Security Audits and Reporting</li>
              <li>Data Encryption and Security Solutions</li>
            </ul>
          </motion.div>

          {/* Business Automation & BPO Solutions */}
          <motion.div
            className="rounded-lg p-8 transition-shadow duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-blue-100 to-blue-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover="hover"
          >
            <img
              src="https://th.bing.com/th/id/OIP.b3ZutFjRGcjXOArZT6xU5wHaE8?rs=1&pid=ImgDetMain"
              alt="Business Automation & BPO"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Business Automation & BPO Solutions
            </h2>
            <p className="text-gray-700 mb-6">
              Automate your workflows, improve efficiency, and enhance customer engagement with our business process outsourcing solutions.
            </p>
            <h3 className="text-xl font-semibold text-blue-700">Services:</h3>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>Process Automation</li>
              <li>Advanced Analytics and Reporting</li>
              <li>Customer Support and Call Center Solutions</li>
              <li>Data Entry and Processing</li>
              <li>Back-Office Support</li>
              <li>Technical Support and Help Desk Services</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
