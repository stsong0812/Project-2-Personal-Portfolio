import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

/* Main application component */
const App = () => {
  return (
    <Router> {/* Router component for handling routes */}
      <Header /> {/* Header component */}
      <div className="section-container"> {/* Container for the main sections */}
        <Routes>
          <Route path="/" element={<Navigate to="/components/Home" />} /> {/* Redirect from root to /home */}
          <Route path="/home" element={<Home />} /> {/* Home component route */}
          <Route path="/about" element={<About />} /> {/* About component route */}
          <Route path="/projects" element={<Projects />} /> {/* Projects component route */}
          <Route path="/skills" element={<Skills />} /> {/* Skills component route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact component route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
