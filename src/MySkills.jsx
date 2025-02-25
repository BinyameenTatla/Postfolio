import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa"; // Icons for each skill

const ProgressBar = ({ percentage, color, text }) => {
  return (
    <div className="w-full bg-gray-300 h-3 rounded-lg overflow-hidden mt-4">
      <div
        className="h-full"
        style={{
          width: `${percentage}%`,
          backgroundColor: color,
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-sm font-semibold text-white">
        {text}
      </div>
    </div>
  );
};

export const MySkills = () => {
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [js, setJs] = useState(0);
  const [react, setReact] = useState(0);
  const [node, setNode] = useState(0);
  const [tailwind, setTailwind] = useState(0); // New state for Tailwind CSS

  // Update percentages automatically with slower intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setHtml((prev) => (prev >= 95 ? 95 : prev + Math.random() * 30)); // Slow progress for HTML
      setCss((prev) => (prev >= 95 ? 95 : prev + Math.random() * 30)); // Slow progress for CSS
      setJs((prev) => (prev >= 80 ? 80 : prev + Math.random() * 30)); // Slow progress for JS
      setReact((prev) => (prev >= 86 ? 86 : prev + Math.random() * 30)); // Slow progress for React
      setNode((prev) => (prev >= 75 ? 75 : prev + Math.random() * 30)); // Slow progress for Node
      setTailwind((prev) => (prev >= 80 ? 80 : prev + Math.random() * 30)); // Slow progress for Tailwind CSS
    }, 100); // Update every 100ms (slower updates)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-500">My Skills</h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* HTML Skill */}
          <div className="skill-card bg-gray-800 p-6 rounded-xl text-center transition-all duration-300 ease-in-out hover:scale-105 relative">
            <div className="hexagon bg-gray-800 p-6 flex justify-center items-center mb-4 mx-auto">
              <FaHtml5 className="text-6xl text-orange-500" />
            </div><br></br><br></br>
            <h3 className="text-2xl font-semibold mb-4 text-orange-500">HTML</h3>
            <p className="text-sm text-gray-400 mb-4">
              HTML is the foundation of web development, used to structure content on the web.
            </p>
            <ProgressBar percentage={html} color="#F16529" text={`${Math.round(html)}%`} />
          </div>

          {/* CSS Skill */}
          <div className="skill-card bg-gray-800 p-6 rounded-xl text-center transition-all duration-300 ease-in-out hover:scale-105 relative">
            <div className="hexagon bg-gray-800 p-6 flex justify-center items-center mb-4 mx-auto">
              <FaCss3Alt className="text-6xl text-blue-500" />
            </div><br></br><br></br>
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">CSS</h3>
            <p className="text-sm text-gray-400 mb-4">
              CSS is used for styling the visual presentation of web pages, including layout, colors, and fonts.
            </p>
            <ProgressBar percentage={css} color="#2965F1" text={`${Math.round(css)}%`} />
          </div>

          {/* JavaScript Skill */}
          <div className="skill-card bg-gray-800 p-6 rounded-xl text-center transition-all duration-300 ease-in-out hover:scale-105 relative">
            <div className="hexagon bg-gray-800 p-6 flex justify-center items-center mb-4 mx-auto">
              <FaJsSquare className="text-6xl text-yellow-500" />
            </div><br></br><br></br>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">JavaScript</h3>
            <p className="text-sm text-gray-400 mb-4">
              JavaScript is a programming language that allows you to implement complex features.
            </p>
            <ProgressBar percentage={js} color="#F7DF1E" text={`${Math.round(js)}%`} />
          </div>

          {/* React Skill */}
          <div className="skill-card bg-gray-800 p-6 rounded-xl text-center transition-all duration-300 ease-in-out hover:scale-105 relative">
            <div className="hexagon bg-gray-800 p-6 flex justify-center items-center mb-4 mx-auto">
              <FaReact className="text-6xl text-cyan-500" />
            </div><br></br>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-500">React</h3>
            <p className="text-sm text-gray-400 mb-4">
              React is a JavaScript library for building user interfaces, developed by Facebook.
            </p>
            <ProgressBar percentage={react} color="#61DAFB" text={`${Math.round(react)}%`} />
          </div>

          {/* Node.js Skill */}
          <div className="skill-card bg-gray-800 p-6 rounded-xl text-center transition-all duration-300 ease-in-out hover:scale-105 relative">
            <div className="hexagon bg-gray-800 p-6 flex justify-center items-center mb-4 mx-auto">
              <FaNodeJs className="text-6xl text-green-500" />
            </div><br></br>
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Node.js</h3>
            <p className="text-sm text-gray-400 mb-4">
              Node.js is a runtime environment for executing JavaScript code server-side, outside of a browser.
            </p>
            <ProgressBar percentage={node} color="#68A063" text={`${Math.round(node)}%`} />
          </div>

          {/* Tailwind CSS Skill */}
          <div className="skill-card bg-gray-800 p-6 rounded-xl text-center transition-all duration-300 ease-in-out hover:scale-105 relative">
            <div className="hexagon bg-gray-800 p-6 flex justify-center items-center mb-4 mx-auto">
              <div className="text-6xl text-teal-500">🌊</div> {/* Placeholder icon for Tailwind CSS */}
            </div><br></br>
            <h3 className="text-2xl font-semibold mb-4 text-teal-500">Tailwind CSS</h3>
            <p className="text-sm text-gray-400 mb-4">
              Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
            </p>
            <ProgressBar percentage={tailwind} color="#38B2AC" text={`${Math.round(tailwind)}%`} />
          </div>
        </div>
      </div>
    </div>
  );
};
