import React from 'react';
import './ProjectCard.css';

// ProjectCard component that takes in title, description, and link as props
const ProjectCard = ({ title, description, link }) => {
    return (
        <div className="project-card">
            {/* Display the project title */}
            <p className="project-title">{title}</p>
            
            {/* Display the project description */}
            <p className="project-description">{description}</p>
            
            {/* Link to view the project, opening in a new tab */}
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
            </a>
        </div>
    );
};

export default ProjectCard;