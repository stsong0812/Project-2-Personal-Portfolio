import React from 'react';
import SkillMeter from './SkillMeter';
import './Skills.css';
import '../App.css';

/* Component to display the skills section */
const Skills = () => {
  // Object containing skills data
  const skills = {
    "Operating Systems": [
      { skill: "Windows (7-11)", level: 85 },
      { skill: "Linux (Ubuntu/Kali)", level: 80 },
    ],
    "Coding/Scripting": [
      { skill: "Python", level: 85 },
      { skill: "Bash", level: 70 },
      { skill: "HTML", level: 90 },
      { skill: "CSS", level: 80 },
      { skill: "JavaScript", level: 65 },
    ],
    "Tools": [
      { skill: "Splunk", level: 60 },
      { skill: "Suricata", level: 55 },
      { skill: "Metasploit", level: 50 },
      { skill: "Wireshark", level: 75 },
    ],
  };

  return (
    <div className="App"> {/* Main container */}
      <main className="skills-section">
        <p>Primary Skills</p>
        {/* Introduction paragraph */}
        <p style={{ marginBottom: '10px' }}>
          As of 2024 through schooling, certifications, and self-learning I have experience in:
        </p>
        {/* Container for the skills list */}
        <div className="skills-list">
          {Object.keys(skills).map((category) => (
            <ul key={category}>
              <p>{category}:</p> {/* Category heading */}
              {skills[category].map(({ skill, level }) => (
                <li key={skill}>
                  <SkillMeter skill={skill} level={level} /> {/* Skill meter component */}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </main>
      
      {/* Footer with social icons */}
      <footer>
        <div className="social-icons">
          <a href="https://github.com/stsong0812" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/stsong0812/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/scanttk" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p>Copyright &copy; 2024 Steven Song</p>
      </footer>
    </div>
  );
};

export default Skills;
