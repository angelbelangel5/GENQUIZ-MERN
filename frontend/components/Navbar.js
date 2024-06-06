
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#genquiz">GenQuiz</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
