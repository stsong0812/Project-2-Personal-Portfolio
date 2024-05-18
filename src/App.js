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
    <Router>
      <Header />
      <div className="section-container">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Make Home component serve the root path */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} /> {/* Adjusted fallback route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
