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
          {/* Website Design & Management */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover="hover"
          >
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Website Design & Management
            </h2>
            <p className="text-gray-700 mb-6">
              We provide custom website design, UX/UI design, website
              maintenance, and SEO-optimized website development.
            </p>
            <h3 className="text-xl font-semibold text-blue-700">Services:</h3>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>Custom Website Design</li>
              <li>UX/UI Design</li>
              <li>Website Maintenance and Updates</li>
              <li>SEO-Optimized Website Development</li>
            </ul>
          </motion.div>

          {/* Website Pentesting */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover="hover"
          >
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Website Pentesting (Cybersecurity)
            </h2>
            <p className="text-gray-700 mb-6">
              We offer web application security testing, threat analysis,
              security audits, and data encryption solutions.
            </p>
            <h3 className="text-xl font-semibold text-blue-700">Services:</h3>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>Web Application Security Testing</li>
              <li>Analysis of threats like SQL Injection, XSS, and CSRF</li>
              <li>Security Audits and Reporting</li>
              <li>Data Encryption and Security Solutions</li>
            </ul>
          </motion.div>

          {/* Business Automation */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover="hover"
          >
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Business Automation
            </h2>
            <p className="text-gray-700 mb-6">
              Automate your workflows and improve productivity with our
              tailor-made business solutions.
            </p>
            <h3 className="text-xl font-semibold text-blue-700">Services:</h3>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>Process Automation</li>
              <li>Custom Workflow Solutions</li>
              <li>Integration with Business Tools</li>
              <li>Advanced Analytics and Reporting</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;