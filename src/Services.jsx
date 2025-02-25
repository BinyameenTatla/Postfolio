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
          Frontend development is the practice of building the visual and interactive components of a website or web application that users interact with directly. It involves using technologies like HTML, CSS, and JavaScript to create responsive, user-friendly designs and interfaces. Frontend developers work to ensure that a website looks good, is easy to use, and functions smoothly across different devices and browsers. They may also utilize frameworks and libraries like React, Angular, or Vue.js to enhance functionality and efficiency in the development process.
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
          Figma is a popular cloud-based design tool used for creating user interfaces, wireframes, prototypes, and collaborative design projects. It allows multiple designers to work on the same project in real-time, making it ideal for team-based design work. Figma supports vector graphics, making it versatile for designing both static and interactive elements. It's widely used for UI/UX design, as well as web and mobile app designs, due to its intuitive interface and extensive plugin support.
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
  A landing page is a standalone web page designed with a specific focus, often created for marketing or advertising purposes. It serves as the entry point for visitors, guiding them toward a particular action, such as signing up, making a purchase, or downloading content. Typically, a landing page is optimized for conversions, featuring a clear call-to-action (CTA), compelling visuals, and concise, engaging copy. It’s often linked from ads, emails, or social media posts to drive traffic and achieve a specific goal..
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
