import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">PortFolio</a>
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
