import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social icons

export const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-6 mt-12">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Main Content: Left - Name & Description, Right - Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center">
          <div className="text-center sm:text-left">
            {/* Name with Increased Font Size */}
            <p className="text-2xl font-semibold">Binyameen</p>
            
            {/* Motivational Description */}
            <p className="text-sm mt-2 text-gray-400">
              Turn your ideas into reality.
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center sm:justify-end space-x-6 text-3xl mt-4 sm:mt-0">
          <a
  href="https://twitter.com/BTatla59778"
  target="_blank"
  rel="noopener noreferrer"
  class="hover:text-blue-400 transition duration-300"
>
              <FaTwitter />
            </a>
            <a
  href="https://www.linkedin.com/in/BinyameenTatla"
  target="_blank"
  rel="noopener noreferrer"
  className="text-3xl text-[#fff] hover:text-blue-600"
>
  <FaLinkedin />
</a>
                    <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#fff] hover:text-blue-600">
             <FaGithub />
           </a>
           <a
  href="https://www.instagram.com/binyameen"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-pink-500 transition duration-300"
>
  <FaInstagram />
</a>
          </div>
        </div>

        {/* Line Below */}
        <div className="border-t-2 border-gray-600 my-4"></div> {/* Line Below */}

        {/* Copyright Text */}
        <div className="text-center mt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Binyameen. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
