import React, { useState } from "react";
import { motion } from "framer-motion"; // Ensure you have the correct package installed
import "../../public/fonts.css";
import emailjs from "@emailjs/browser";
import { contact } from "../assets";
import toast, { Toaster } from 'react-hot-toast';

const textVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_lvvlnas",
        "template_qk1e32a",
        {
          from_name: form.name,
          to_name: "priyanshu sharma",
          from_email: form.email,
          to_email: "priyanshus8282@gmail.com",
          message: form.message,
        },
        "zWaJxBEjFPbt12kal"
      )
      .then(
        (response) => {
          setLoading(false);
          console.log('SUCCESS!', response.status, response.text);
          toast.success("Thanks! I'll get back to you soon.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error('FAILED...', error);
          toast.error("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 via-white to-blue-50 flex flex-col items-center justify-center font-sans">
      <Toaster /> {/* Add Toaster component to display toasts */}
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-auto sm:h-[500px] md:h-[600px] lg:h-[500px] xl:h-[500px] overflow-hidden">
        <img
          src={contact}
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            className="text-4xl font-extrabold text-white mb-4"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg text-white mt-4"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            Our team of experts is dedicated to providing innovative solutions
            to help your business thrive.
          </motion.p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col items-center font-sans py-11 px-5 w-full max-w-6xl">
        <div className="text-center mb-10">
          <motion.h1
            className="text-4xl font-extrabold mb-4 text-indigo-800"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            Get in touch
          </motion.h1>
          <motion.p
            className="text-gray-600"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            Have something to share with us? Let’s create what you have in mind.
            Send us your questions or queries, and we’ll revert back as soon as
            possible.
          </motion.p>
        </div>
        <motion.div
          className="rounded-lg w-full max-w-4xl bg-white shadow-lg p-8"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                placeholder="John Doe"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            {/* Address Input */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter Your Address
              </label>
              <input
                type="text"
                id="address"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                placeholder="123 Main Street"
                required
              />
            </div>
            {/* Mobile Number Input */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter Your Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                placeholder="+1 234-567-890"
                required
              />
            </div>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter Your Email ID
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                placeholder="you@example.com"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            {/* Message Input */}
            <div className="col-span-1 md:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enquiry / Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                placeholder="Write your message here..."
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 text-center ">
              <motion.button
                type="submit"
                className="bn5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? 'Sending...' : 'Send'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;