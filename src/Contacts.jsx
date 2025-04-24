import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Adding Framer Motion for better animations

export const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(''); // To track the status of the form submission

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission (simulated)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email) {
      setFormStatus('Please fill out all required fields.');
      return;
    }

    // Here you would usually send the data to your server
    console.log(formData);
    setFormStatus('Message Sent Successfully!');
    setFormData({ name: '', email: '', message: '' }); // Clear the form fields after submission
  };

  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <motion.h2
        className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeInUp"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-4">
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-4 bg-gray-800 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              initial={{ scale: 1 }}
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-4 bg-gray-800 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              initial={{ scale: 1 }}
              whileFocus={{ scale: 1.05 }}
            />
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="p-4 bg-gray-800 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              initial={{ scale: 1 }}
              whileFocus={{ scale: 1.05 }}
            />
          </div>
          <div className="text-center">
            <motion.button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 transition duration-300"
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </form>

        {/* Display form submission status */}
        {formStatus && (
          <motion.div
            className={`mt-6 text-center ${formStatus.includes('Successfully') ? 'text-green-500' : 'text-red-500'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {formStatus}
          </motion.div>
        )}
      </div>
    </div>
  );
};
