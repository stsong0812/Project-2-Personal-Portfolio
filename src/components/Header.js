import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    /* Header section containing the site title and navigation links */
    <header>
      {/* Home link styled as the site title */}
      <Link to="/home" className="home-link">
        <p>/Steven Song</p>
      </Link>
      {/* Navigation links to different pages */}
      <nav>
        <Link to="/home">/Home</Link>
        <Link to="/about">/About</Link>
        <Link to="/projects">/Projects</Link>
        <Link to="/skills">/Skills</Link>
        <Link to="/contact">/Contact</Link>
      </nav>
    </header>
  );
};

export default Header;