import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const ProgressBar = ({ percentage, color, text }) => {
  return (
    <div className="relative w-full bg-gray-700 h-3 rounded-full overflow-hidden">
      <div
        className="h-full transition-all duration-700"
        style={{
          width: `${percentage}%`,
          backgroundColor: color,
        }}
      ></div>
      <div className="absolute inset-0 flex justify-center items-center text-xs font-bold text-white">
        {text}
      </div>
    </div>
  );
};

const SkillCard = ({ icon, title, description, percentage, color, iconColor }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="mb-4 flex justify-center text-6xl" style={{ color: iconColor }}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2" style={{ color: iconColor }}>{title}</h3>
    <p className="text-gray-400 text-sm mb-4">{description}</p>
    <ProgressBar percentage={percentage} color={color} text={`${Math.round(percentage)}%`} />
  </motion.div>
);

export const MySkills = () => {
  const [skills, setSkills] = useState({
    html: 0,
    css: 0,
    js: 0,
    react: 0,
    node: 0,
    tailwind: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSkills((prev) => ({
        html: Math.min(prev.html + Math.random() * 4, 95),
        css: Math.min(prev.css + Math.random() * 4, 95),
        js: Math.min(prev.js + Math.random() * 4, 80),
        react: Math.min(prev.react + Math.random() * 4, 86),
        node: Math.min(prev.node + Math.random() * 4, 75),
        tailwind: Math.min(prev.tailwind + Math.random() * 4, 80),
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold text-blue-500 mb-12">My Skills</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        <SkillCard
          icon={<FaHtml5 />}
          title="HTML"
          description="HTML structures web content effectively."
          percentage={skills.html}
          color="#F16529"
          iconColor="#F16529"
        />
        <SkillCard
          icon={<FaCss3Alt />}
          title="CSS"
          description="CSS styles the look and layout of web pages."
          percentage={skills.css}
          color="#2965F1"
          iconColor="#2965F1"
        />
        <SkillCard
          icon={<FaJsSquare />}
          title="JavaScript"
          description="JavaScript adds interactivity and logic."
          percentage={skills.js}
          color="#F7DF1E"
          iconColor="#F7DF1E"
        />
        <SkillCard
          icon={<FaReact />}
          title="React"
          description="React builds efficient, component-based UIs."
          percentage={skills.react}
          color="#61DAFB"
          iconColor="#61DAFB"
        />
        <SkillCard
          icon={<FaNodeJs />}
          title="Node.js"
          description="Node.js handles server-side JavaScript."
          percentage={skills.node}
          color="#68A063"
          iconColor="#68A063"
        />
        <SkillCard
          icon={<SiTailwindcss />}
          title="Tailwind CSS"
          description="Tailwind CSS builds fast and modern designs."
          percentage={skills.tailwind}
          color="#38B2AC"
          iconColor="#38B2AC"
        />
      </div>
    </div>
  );
};
