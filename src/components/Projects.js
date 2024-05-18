import React, { useState } from 'react';
import './Projects.css';
import '../App.css';
import ProjectCard from './ProjectCard';
import projectData from './ProjectData';

const Projects = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('writeups');

    // Function to render projects based on the active category
    const renderProjects = (category) => {
        return projectData[category].map((project, index) => (
            <ProjectCard 
                key={index} 
                title={project.title} 
                description={project.description} 
                link={project.link} 
                className={`project-card ${category}`}
            />
        ));
    };

    return (
        <div className="App"> {/* Main container */}
            <main className="projects-section">
                <p>Projects</p>
                {/* Tabs for different project categories */}
                <div className="tabs">
                    <button onClick={() => setActiveTab('writeups')} className="tab writeups">Writeups</button>
                    <button onClick={() => setActiveTab('coding')} className="tab coding">Coding</button>
                    <button onClick={() => setActiveTab('otherProjects')} className="tab otherProjects">Other Projects</button>
                </div>
                {/* Container to display the projects based on the active tab */}
                <div className="projects-container">
                    {renderProjects(activeTab)}
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

export default Projects;