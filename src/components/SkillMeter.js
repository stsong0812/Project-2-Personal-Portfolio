import React from 'react';
import './SkillMeter.css';

/* Component to display a skill meter */
const SkillMeter = ({ skill, level }) => {
  return (
    <div className="skill-meter"> {/* Main container for the skill meter */}
      <p>{skill}</p> {/* Skill name */}
      <div className="meter"> {/* Container for the meter bar */}
        <div className="fill" style={{ width: `${level}%` }}></div> {/* Fill element within the meter bar */}
      </div>
    </div>
  );
};

export default SkillMeter;