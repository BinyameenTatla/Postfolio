import React from "react";
import { motion } from "framer-motion";

export const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const services = [
    {
      title: "Frontend Development",
      link: "/frontend",
      description:
        "Building responsive, interactive, and modern websites using HTML, CSS, JavaScript, and frameworks like React. I ensure smooth, user-friendly experiences across all devices.",
    },
    {
      title: "Figma React",
      link: "/figma",
      description:
        "Designing clean and effective user interfaces using Figma, then bringing them to life in React. Seamless collaboration and pixel-perfect UI/UX delivery.",
    },
    {
      title: "Landing Page",
      link: "/linkding",
      description:
        "Creating high-converting, visually appealing landing pages with strong calls-to-action, perfect for campaigns, promotions, and product showcases.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-20 px-6 text-center">
      <motion.h2
        className="text-5xl font-bold mb-16 text-blue-500"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My Services
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 text-left"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              {service.title}
            </h3>
            <p className="text-gray-300 text-base mb-6">{service.description}</p>
            <a
            
              className="text-blue-400 hover:text-blue-600 font-medium transition duration-200"
            >
              Read Now
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
