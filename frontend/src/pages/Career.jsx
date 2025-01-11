import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Career_Banner_desktop, career_image, job } from "../assets";

const textVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};



function Career() {
  const images = [job, Career_Banner_desktop, career_image];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
   
  };

  return (
    <div className="bg-custom bg-gradient-to-b from-blue-100 via-white to-blue-50">
      {/* Sliding Banner */}
      <div className="relative w-full h-auto sm:h-[500px] md:h-[600px] lg:h-[500px] xl:h-[500px] overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Career ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </Slider>
        <motion.div
          className="absolute top-8 left-8 p-4 bg-opacity-80 text-black"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            <Link to="/" className="hover:underline">Home</Link> &gt; <Link to="/career" className="hover:underline">Careers</Link>
          </h1>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-12">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-600 text-transparent bg-clip-text">
            Be Part of Our Vision
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Join us on a journey to create innovative solutions, shape the
            future, and make a positive impact on the world. Together, we can
            achieve greatness.
          </p>
        </div>

        {/* Job Openings Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-800">
            Exciting Opportunities Await
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            We are constantly growing and expanding our horizons. While we may
            not have open positions at this time, we encourage you to stay
            connected with us for future opportunities.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-indigo-800 text-center">
            What We Offer
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Empowering Culture",
                description:
                  "Our culture fosters innovation, collaboration, and personal growth.",
              },
              {
                title: "Professional Development",
                description:
                  "We invest in your future with training, workshops, and mentorship programs.",
              },
              {
                title: "Work-Life Harmony",
                description:
                  "Flexible schedules and wellness programs to support a balanced lifestyle.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-purple-100 to-indigo-100"
              >
                <h3 className="text-xl font-semibold text-indigo-900">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Instructions */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-indigo-800">
            Get in Touch with Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Interested in joining us? Send your resume and cover letter to{" "}
            <a
              href="mailto:careers@mycompany.com"
              className="text-blue-500 hover:underline"
            >
              careers@mycompany.com
            </a>
            . We are always eager to hear from passionate professionals like
            you.
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Don’t forget to follow us on social media for the latest updates and
            openings!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Career;