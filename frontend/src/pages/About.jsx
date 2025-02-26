import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useNavigate } from "react-router-dom";
import "../../public/fonts.css"; 
import {
  illustrations_01,
  illustrations_02,
  illustrations_03,
  illustrations_4, team_1
} from "../assets";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};


function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const calculateTransform = (x, y) => {
    const offsetX = (x - window.innerWidth / 2) / 20;
    const offsetY = (y - window.innerHeight / 2) / 20;
    return `translate(${offsetX}px, ${offsetY}px)`;
  };

  return (
    <div className="font-custom bg-custom bg-gradient-to-b from-blue-100 via-white to-blue-50 py-16" onMouseMove={handleMouseMove} >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            About Us
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
            Empowering businesses with cutting-edge software solutions.
          </p>
        </motion.div>

        {/* Values that Inspire Section */}
        <motion.div className="mb-12 flex flex-col md:flex-row items-center text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 1 }}>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Values that Inspire <br />Our Culture</h1>
        </motion.div>
        <motion.div
          className="mb-12 flex flex-col md:flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.img
            src={illustrations_01}
            alt="Illustration 1"
            className="w-full md:w-1/3 h-auto rounded-lg hover:scale-105 transform transition duration-300 mb-8 md:mb-0 md:mr-8"
            style={{ transform: calculateTransform(mousePosition.x, mousePosition.y) }}
          />
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Together for Journey</h2>
            <p className="mt-4 text-lg text-gray-700">
              We promise reliability, loyalty and trust with quality products.
              Our dedicated works are an extension for you & delivers a
              collaborative work experience. Empathy is our central value.
            </p>
          </div>
        </motion.div>

        {/* Committed for your Success Section */}
        <motion.div
          className="mb-12 flex flex-col md:flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="md:w-2/3 order-2 md:order-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Committed for your success</h2>
            <p className="mt-4 text-lg text-gray-700">
              We ensure dedication towards you and your goals like one of our
              own. With a can-do attitude and talented team, we take initiatives
              to deliver excellent and simple solutions.
            </p>
          </div>
          <motion.div className="flex flex-col md:w-1/3 space-y-8 md:ml-8 order-1 md:order-2">
            <motion.img
              src={illustrations_02}
              alt="Illustration 2"
              className="w-full h-auto rounded-lg hover:scale-105 transform transition duration-300"
              style={{ transform: calculateTransform(mousePosition.x, mousePosition.y) }}
            />
          </motion.div>
        </motion.div>

        {/* Skilled & Innovative Section */}
        <motion.div
          className="mb-12 flex flex-col md:flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.img
            src={illustrations_03}
            alt="Illustration 3"
            className="w-full md:w-1/3 h-auto rounded-lg hover:scale-105 transform transition duration-300 mb-8 md:mb-0 md:mr-8"
            style={{ transform: calculateTransform(mousePosition.x, mousePosition.y) }}
          />
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Skilled & Innovative</h2>
            <p className="mt-4 text-lg text-gray-700">
              With innovation at our core, we craft products with minute
              details. We are artists of technology and create minimal solutions
              to complex problems.
            </p>
          </div>
        </motion.div>

        {/* Bold & Wise Section */}
        <motion.div
          className="mb-12 flex flex-col md:flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="md:w-2/3 order-2 md:order-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Bold & Wise</h2>
            <p className="mt-4 text-lg text-gray-700">
              We embrace risks. We undertake challenging projects with a bold
              and wise approach, making our contribution to impact human lives.
              We are always open to extraordinary thoughts.
            </p>
          </div>
          <motion.div className="flex flex-col md:w-1/3 space-y-8 md:ml-8 order-1 md:order-2">
            <motion.img
              src={illustrations_4}
              alt="Illustration 4"
              className="w-full h-auto rounded-lg hover:scale-105 transform transition duration-300"
              style={{ transform: calculateTransform(mousePosition.x, mousePosition.y) }}
            />
          </motion.div>
        </motion.div>

       

        {/* Contact Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-700">
            Reach out to us at{" "}
            <a
              href="mailto:info@mycompany.com"
              className="text-blue-500 underline hover:text-blue-700"
            >
              info@mycompany.com
            </a>{" "}
            for any queries or collaborations.
          </p>
          <button className="mt-6 px-6 py-3  bn29" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default About;