import React from 'react';

// Sample data for projects
const projects = [
  {
    title: 'Project 1: Agriculture Project',
    description: (
      <div>
        <p>
          A full-stack web application built with <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
          This project allows users to order coffee online, view product details, and manage their cart. It integrates a modern design and
          smooth user interactions powered by <strong>React Router</strong> and <strong>Context API</strong> for state management.
        </p>
        <p>
          <strong>Technologies Used:</strong> React, Node.js, JavaScript, HTML, CSS, and responsive design with <strong>Tailwind CSS</strong>.
        </p>
      </div>
    ),
    link: 'https://binyameenagriculture.netlify.app',
    image: '/j.png', // Ensure this path is correct
  },
  {
    title: 'Project 2: Marketing Project',
    description: (
      <div>
        <p>
          A responsive landing page built with <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>JavaScript</strong>.
          This project showcases a simple, interactive burger menu with smooth animations and a clean design. It utilizes React to manage the user interface dynamically.
        </p>
        <p><br></br><br></br>
          <strong>Technologies Used:</strong> React, Tailwind CSS, JavaScript, HTML, CSS.
        </p>
      </div>
    ),
    link: 'https://binyameenmarketing.netlify.app',
    image: '/kk.png', // Ensure this path is correct
  },
  {
    title: 'Project 3: Gym Project',
    description: (
      <div>
        <p>
          An e-commerce website with a modern user interface built using <strong>React</strong> and <strong>Redux</strong>.
          This project allows users to browse gym products, view detailed descriptions, and manage their shopping cart. React is used to efficiently render dynamic components, while Redux helps manage global state for the cart and user data.
        </p>
        <p>
          <strong>Technologies Used:</strong> React, Redux, JavaScript, HTML, CSS.
        </p>
      </div>
    ),
    link: 'https://binyameengym.netlify.app',
    image: '/image.png', // Ensure this path is correct
  },
];

export const Project = () => {
  return (
    <div className="bg-gray-800 py-16 px-6 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <div className="text-gray-400 mb-6">{project.description}</div>
              <a
                href={project.link}
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Ensures security when opening a new tab
                className="inline-block text-[#2bd65e] font-semibold hover:text-blue-400 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 py-2 px-4 rounded-lg bg-transparent border-2 border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
