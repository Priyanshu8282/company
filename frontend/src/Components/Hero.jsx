  import React from 'react';
  import { motion } from 'framer-motion';
  import { Link } from 'react-router-dom';
  import heroVideo from '../assets/hero.mp4'; // Assuming you have a hero video in your assets

  const fontAnimation = {
    initial: { fontSize: '2rem' },
    animate: { fontSize: ['2rem', '3rem', '2rem'], transition: { duration: 2, repeat: Infinity } },
  };

  function Hero() {
    return (
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] xl:h-[600px]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 bg-black bg-opacity-50">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            variants={fontAnimation}
          >
            Innovative Software Solutions
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Empowering Your Business with Cutting-Edge Technology
          </motion.p>
        
          
        </div>
      </div>
    );
  }

  export default Hero;