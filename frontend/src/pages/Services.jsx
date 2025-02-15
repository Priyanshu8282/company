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
          {/* Web Development */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 transition-shadow duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-blue-100 to-blue-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover="hover"
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg"
              alt="Web Development"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Web Development
            </h2>
            <p className="text-gray-700 mb-6">
              We provide custom web development, responsive design, e-commerce solutions, and web application development.
            </p>
            <h3 className="text-xl font-semibold text-blue-700">Services:</h3>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>Custom Web Development</li>
              <li>Responsive Design</li>
              <li>E-commerce Solutions</li>
              <li>Web Application Development</li>
            </ul>
          </motion.div>

          {/* Website Pentesting */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 transition-shadow duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-blue-100 to-blue-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover="hover"
          >
              <img
              src="https://www.impactqa.com/wp-content/uploads/2022/01/Penetration-Blog.jpg"
              alt="Web Development"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
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
            className="bg-white rounded-lg shadow-lg p-8 transition-shadow duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-blue-100 to-blue-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover="hover"
          >
            <img
              src="https://th.bing.com/th/id/OIP.b3ZutFjRGcjXOArZT6xU5wHaE8?rs=1&pid=ImgDetMain"
              alt="Web Development"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
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