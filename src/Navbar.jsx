import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink

export const Navbar = () => {
  // State to control whether the mobile menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Binyameen</span>
        </div>

        {/* Navigation Links for Desktop */}
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
            to="/contacts" 
            className="font-bold" 
            style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button (Hamburger Menu) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl"> {/* Set the font size to 3xl */} 
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i> {/* Change icon based on menu state */}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible when isMenuOpen is true) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <NavLink 
            to="/" 
            className="text-white font-bold" 
            style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className="text-white font-bold" 
            style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
          >
            Services
          </NavLink>
          <NavLink 
            to="/projects" 
            className="text-white font-bold" 
            style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/contacts" 
            className="text-white font-bold" 
            style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
