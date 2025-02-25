import React from 'react';
import { FaJs, FaReact, FaHtml5, FaCss3Alt, FaGithub, FaBootstrap } from 'react-icons/fa'; // Importing icons
import { SiTailwindcss } from 'react-icons/si'; // Importing Tailwind CSS icon

export const Section = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Container for the icons */}
      <div className="flex space-x-10 animate-marquee py-6">
        {/* JS Icon */}
        <div className="text-5xl text-yellow-500">
          <FaJs />
        </div>

        {/* React Icon */}
        <div className="text-5xl text-cyan-500">
          <FaReact />
        </div>

        {/* HTML Icon */}
        <div className="text-5xl text-red-500">
          <FaHtml5 />
        </div>

        {/* CSS Icon */}
        <div className="text-5xl text-blue-500">
          <FaCss3Alt />
        </div>

        {/* GitHub Icon */}
        <div className="text-5xl text-black">
          <FaGithub />
        </div>

        {/* Tailwind CSS Icon */}
        <div className="text-5xl text-sky-500">
          <SiTailwindcss />
        </div>

        {/* Bootstrap Icon */}
        <div className="text-5xl text-purple-500">
          <FaBootstrap />
        </div>
      </div>

      {/* CSS animation for continuous scrolling */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};
