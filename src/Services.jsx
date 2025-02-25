import React from 'react';

export const Services = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1: Frontend Development */}
        <div className="service-card bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
          <h3 className="text-3xl font-semibold mb-4 text-blue-500">Frontend Development</h3>
          <p className="text-lg mb-6 text-gray-300">
            I create responsive and visually appealing websites using modern tools like React, JavaScript, and Tailwind CSS.
          </p>
          <a
            href="/frontend" // Link to Frontend page (replace with actual link)
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Learn More
          </a>
        </div>

        {/* Service 2: Figma Design */}
        <div className="service-card bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
          <h3 className="text-3xl font-semibold mb-4 text-blue-500">Figma React</h3>
          <p className="text-lg mb-6 text-gray-300">
            I specialize in crafting UI/UX designs that provide seamless and intuitive experiences using Figma.
          </p>
          <a
            href="/figma" // Link to Figma page (replace with actual link)
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Learn More
          </a>
        </div>

        {/* Service 3: Web Animation */}
        <div className="service-card bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
  <h3 className="text-3xl font-semibold mb-4 text-blue-500">Linkding Page</h3>
  <p className="text-lg mb-6 text-gray-300">
    A beautifully crafted and highly responsive page that showcases your link directory with ease and style.
  </p>
  <a
    href="/linkding" // Link to the actual Linkding page (replace with actual link)
    className="text-blue-500 hover:text-blue-700 font-medium"
  >
    Learn More
  </a>
</div>

      </div>
    </div>
  );
};
