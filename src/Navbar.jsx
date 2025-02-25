import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Binyameen</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {/* Use NavLink instead of Link */}
          <NavLink 
            to="/" 
            className="font-bold" 
            style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className="font-bold" 
            style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
          >
            Services
          </NavLink>
          <NavLink 
            to="/projects" 
            className="font-bold" 
            style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/Contacts" 
            className="font-bold" 
            style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button /* You can add toggle for mobile menu */ className="text-white">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};
