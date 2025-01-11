import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1E3A8A] to-[#6A1B9A] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Info */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">MyCompany</h2>
            <p className="mt-2 text-gray-300">Empowering Your Business with Cutting-Edge Technology</p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-end">
            <p className="mb-2 text-lg font-semibold">Follow us on</p>
            <div className="flex space-x-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <a href="mailto:info@mycompany.com" className="text-white hover:text-gray-300 transition duration-300">
              info@mycompany.com
            </a>
            <p className="text-gray-300">
              123 Software Street, Tech City, TX 45678
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-4 md:mt-0 text-gray-300">
            &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;