import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container">
            {/* Main section*/}
            <section id="about">
                <p>About Me</p>
                <p>
                    {/* Description */}
                    My name is Steven and I am a student of California State University Fullerton pursuing a bachelor's in
                    Computer Science with a concentration on Cybersecurity. I am looking for any professional opportunities 
                    in the field to further my knowledge to get a start in my professional career.
                    <br></br><br></br>
                    I thoroughly enjoy learning about the different aspects of technology, and am captivated by the wide range of
                    knowledge required to thrive in the field. I have been studying programming, networking, operating systems, and 
                    cybersecurity for most of my academic career.
                    <br></br><br></br>
                    I spend a lot of my free time learning through resources such as TryHackMe, HackTheBox, BlueTeamOnline, and Udemy.
                    With beginner CTF opportunities through the Offensive Security Society Club at Cal State Fullerton. I am currently 
                    working on advancing my blue team skills, and expanding my portfolio while studying for the CompTIA Security+ Certification.
                </p>
            </section>

            {/* Footer section with social media links and copyright information */}
            <footer>
                <div className="social-icons">
                    {/*GitHub profile */}
                    <a href="https://github.com/stsong0812" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    {/*LinkedIn profile */}
                    <a href="https://www.linkedin.com/in/stsong0812/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    {/*Twitter profile */}
                    <a href="https://x.com/scanttk" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
                {/* Copyright information */}
                <p>Copyright &copy; 2024 Steven Song</p>
            </footer>
        </div>
    );
};

export default About;