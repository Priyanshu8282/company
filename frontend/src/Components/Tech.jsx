import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaJava, FaBug } from 'react-icons/fa';
import '../../public/fonts.css';
import { motion } from "framer-motion"; 

function Tech() {
  const technologies = [
    { icon: <FaHtml5 className="text-6xl text-orange-600" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-6xl text-blue-600" />, name: "CSS3" },
    { icon: <FaJs className="text-6xl text-yellow-600" />, name: "JavaScript" },
    { icon: <FaReact className="text-6xl text-cyan-600" />, name: "React" },
    { icon: <FaNodeJs className="text-6xl text-green-600" />, name: "Node.js" },
    { icon: <FaDatabase className="text-6xl text-indigo-600" />, name: "MongoDB" },
    { icon: <FaAws className="text-6xl text-orange-500" />, name: "AWS" },
    { icon: <FaDocker className="text-6xl text-blue-500" />, name: "Docker" },
    { icon: <FaJava className="text-6xl text-red-600" />, name: "Java" },
    { icon: <FaPython className="text-6xl text-blue-400" />, name: "Python" }
  ];
  const headerMotion = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const iconMotion = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 text-center mb-6 font-inter"
          initial="initial"
          animate="animate"
          variants={headerMotion}
        >
          Technologies
        </motion.h2>
        <motion.p
          className="text-xl font-medium text-gray-700 text-center mb-8"
          initial="initial"
          animate="animate"
          variants={headerMotion}
        >
          Our Expertise in Various Technologies
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="relative group text-center"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={iconMotion}
            >
              <div className="transition-transform transform">
                {tech.icon}
              </div>
              <div className="mt-2 text-gray-900 text-lg font-semibold">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tech;