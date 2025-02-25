import React, { useState, useEffect } from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Hero = () => {
  const [text, setText] = useState("I’m Frontend Dev"); // Initial text
  const [bgColor, setBgColor] = useState("bg-gray-800"); // Initial background color
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false); // State to toggle description visibility 
  const [isAnimating, setIsAnimating] = useState(false); // To control animation 

  // Change text and background color every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle text between "I’m Frontend Dev" and "My name is Binyameen"
      setText(prevText => 
        prevText === "I’m Frontend Dev" 
          ? "Name is Binyameen" 
          : "I’m Frontend Dev"
      );

      // Change background color (you can add more colors to the array)
      const colors = ["bg-gray-800"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);

      // Trigger animation for description after text changes
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 3000); // Reset animation after 3 seconds
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); 

  // Show description after 3 seconds of text change
  useEffect(() => {
    setIsDescriptionVisible(true);
    // Reset description visibility after 6 seconds
    const descriptionTimer = setTimeout(() => {
      setIsDescriptionVisible(false);
    }, 6000); 

    return () => clearTimeout(descriptionTimer);
  }, [text]); 

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-12 text-white ${bgColor} transition-all duration-1000`}>
      {/* Left Section (Text) */}
      <div className="hero-left w-full sm:w-1/2 text-center sm:text-center">
        <h1 className="text-3xl sm:text-4xl text-left text-start  md:text-5xl font-bold leading-relaxed mb-6">
          {text}
        </h1>

        {/* Description */}
        <p
          className={`text-lg sm:text-xl font-light opacity-90 mt-4 transition-opacity duration-500 ${isDescriptionVisible ? "opacity-100" : "opacity-0"}`}
        >
          Passionate Frontend Developer specializing in React and Tailwind CSS. 
          Creating intuitive, responsive, and visually appealing web experiences. 
          Let’s collaborate and build something amazing together!
        </p>

        <br /><br />

        {/* Contact Me Button */}
        <div className="flex lg:justify-start sm:justify-center justify-center mt-6">
          <a href="#contact" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 transition duration-300">
            Contact Me
          </a>
        </div>

        {/* Social Media Links (Icons) */}
        <div className="flex lg:justify-start sm:justify-center justify-center space-x-6 mt-6">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#fff] hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#fff] hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#fff] hover:text-blue-600">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="hero-right w-full sm:w-1/2 flex justify-center sm:justify-end mt-6 sm:mt-0">
        <img
          src="lk.jfif"
          alt="Your Image"
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl"
        />
      </div>
    </div>
  );
};
