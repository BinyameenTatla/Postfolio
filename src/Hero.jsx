import React, { useState, useEffect } from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Hero = () => {
  const [text, setText] = useState([
    "Hello!", // First line
    "I am Frontend Dev", // Second line
    "Name is Binyameen", // Third line
  ]); // Initial text as an array of strings
  const [bgColor, setBgColor] = useState("bg-gray-800"); // Initial background color
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false); // State to toggle description visibility 
  const [isAnimating, setIsAnimating] = useState(false); // To control animation 

  // Change text and background color every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate through the text array (Hello, I am Frontend Dev, and Name is Binyameen)
      setText((prevText) => {
        const newText = [...prevText];
        const firstLine = newText.shift(); // Remove the first element
        newText.push(firstLine); // Push it back at the end
        return newText;
      });

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
      <div className="hero-left w-full sm:w-1/2 text-center sm:text-left">
        {/* Display text with smooth transitions */}
        <h1 className={`text-3xl sm:text-4xl text-left justify-items-start md:text-5xl font-bold leading-relaxed mb-6`}>
          {/* Map through the text array to display each line */}
          {text.map((line, index) => (
            <div
              key={index}
              className={`transition-opacity duration-1000 ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 1000}ms` }} // Delay each line's appearance
            >
              {line}
              <br />
            </div>
          ))}
        </h1>

        {/* Description */}
        <p className={`text-lg sm:text-xl font-light opacity-90 mt-4 transition-opacity duration-500 ${isDescriptionVisible ? "opacity-100" : "opacity-0"}`}>
          I am a passionate Front-End Developer specializing in creating visually stunning and interactive web experiences. With expertise in HTML, CSS, JavaScript, React, and Node.js, I transform designs into seamless, responsive interfaces that are both beautiful and functional. I focus on delivering clean, efficient code while ensuring a delightful user experience across all devices.
        </p>

        <br /><br />

        {/* Contact Me Button */}
        <div className="flex lg:justify-start sm:justify-center justify-center mt-6">
          <a 
            href="https://wa.me/923187841428?text=Hello,%20I'd%20like%20to%20connect!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 focus:ring-4 focus:ring-green-300 transition duration-300"
          >
            Contact Me Now
          </a>
        </div>

        {/* Social Media Links (Icons) */}
        <div className="flex lg:justify-start sm:justify-center justify-center space-x-6 mt-6">
          <a href="https://twitter.com/BTatla59778" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#fff] hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/BinyameenTatla" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#fff] hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#fff] hover:text-blue-600">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="hero-right w-full sm:w-1/2 flex justify-center sm:justify-end mt-6 sm:mt-0">
        <img
          src="lk.jfif"
          alt="Your Image"
          className="w-64 h-64 sm:w-64 sm:h-64 md:w-56 md:h-56 rounded-full object-cover shadow-xl"
        />
      </div>
    </div>
  );
};
