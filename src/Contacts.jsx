import React, { useState } from 'react';

export const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
    // Here you would usually send the data to your server
    console.log(formData);
    alert('Message Sent!');
  };

  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeInUp">
        Contact me
      </h2>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-4 bg-gray-800 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-4 bg-gray-800 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="p-4 bg-gray-800 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
