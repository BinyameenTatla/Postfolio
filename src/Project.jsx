import React from 'react';

const projects = [
  {
    title: 'Project 1: E-commerce',
    description: 'A full-stack app for sustainable farming built with React, Node.js, MongoDB, and Tailwind CSS.',
    link: 'https://clientbinyameen.netlify.app',
    image: '/jj.png',
  },
  {
    title: 'Project 2: Marketing Agency',
    description: 'A sleek, responsive landing page for a digital marketing agency using React and Tailwind CSS.',
    link: 'https://binyameenmarketing.netlify.app',
    image: '/kk.png',
  },
  {
    title: 'Project 3: Gym Store',
    description: 'An e-commerce site for gym gear with Redux-powered state management and React UI.',
    link: 'https://binyameengym.netlify.app',
    image: '/image.png',
  },
];

export const Project = () => {
  return (
    <div className="bg-gray-800 py-16 px-4 text-white text-center">
      <h2 className="text-4xl font-bold mb-12">My Projects</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-5">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 text-sm font-medium rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
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