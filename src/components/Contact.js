import React from 'react';
import './Contact.css';
import '../App.css';

const Contact = () => {
  return (
    <div className="App">
      {/* Main section */}
      <main className="contact-section">
        <p>Contact Me</p>
        <div className="contact-methods">
          <p>You can reach me through the following methods:</p>
          <br></br>
          {/* List of contact methods */}
          <ul>
            <li>Email: <a href="mailto:stevensong0812@gmail.com">stevensong0812@gmail.com</a></li>
            <li>Phone: <a href="tel:+12135278402">+1 (213) 527-8402</a></li>
            <li>Discord: <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">scanttk</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/stsong0812/" target="_blank" rel="noopener noreferrer">linkedin.com/in/stsong0812</a></li>
            <li>Twitter: <a href="https://x.com/scanttk" target="_blank" rel="noopener noreferrer">twitter.com/scanttk</a></li>
          </ul>
        </div>
      </main>

      {/* Footer section with social media links and copyright information */}
      <footer>
        <div className="social-icons">
          {/* GitHub profile */}
          <a href="https://github.com/stsong0812" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          {/* LinkedIn profile */}
          <a href="https://www.linkedin.com/in/stsong0812/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          {/* Twitter profile */}
          <a href="https://twitter.com/stsong0812" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        {/* Copyright information */}
        <p>Copyright &copy; 2024 Steven Song</p>
      </footer>
    </div>
  );
};

export default Contact;