import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations

export const Section1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Certificate data
  const certificate = {
    title: 'Frontend Developer Certificate',
    year: 2025,
    image: 'c.jfif', // Replace with actual image
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-800 py-16 px-6 text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Frontend Developer Certificate
      </motion.h2>

      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden max-w-md w-full">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-48 object-cover rounded-t-lg" // Full width image with rounded top corners
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4 text-center">{certificate.title}</h3>
            <p className="text-gray-400 mb-2 text-center">{certificate.institution}</p>
            <p className="text-gray-400 mb-6 text-center">{certificate.year}</p>
            <div className="flex justify-center">
              {/* Button to view certificate */}
              <button
                onClick={openModal} // Open the modal
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 transition duration-300"
              >
                View Certificate
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal for certificate */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={closeModal} // Close the modal
              className="absolute top-4 right-4 text-gray-600 font-bold text-lg"
            >
              X
            </button>
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-center mt-6">{certificate.title}</h3>
            <p className="text-gray-600 text-center mt-2">{certificate.institution}</p>
            <p className="text-gray-600 text-center">{certificate.year}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};
