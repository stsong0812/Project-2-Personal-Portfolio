import React from 'react';
import './Home.css';

// Home component with a default prop for dividerWidth
const Home = ({ dividerWidth = '80%' }) => {
  return (
    <div className="container">
      <main>
        <div className="intro-text">
          {/* Introduction text */}
          <p>Hello, my name is Steven!</p>
        </div>
        <div className="content">
          <div className="ascii">
            {/* ASCII art */}
            <pre>
              {`
                                               ,--.
 .--.--.     ,----..     ,---,               ,--.'|
/  /    '.  /   /   \\   '  .' \\          ,--,:  : |
|  :  /\\\`. / |   :     : /  ;   '.    ,\`--.'\`|  ' :
;  |  |--\`  .   |  ;. /:  :       \\   |   :  :  | |
|  :  ;_    .   ; /--\` :  |   /\\   \\  :   |   \\ | :
 \\  \\    \`. ;   | ;    |  :  ' ;.   : |   : '  '; |
  \`----.   \\|   : |    |  |  ;/  \\   \\'   ' ;.    ;
  __ \\  \\  |.   | '___ '  :  | \\  \\ ,'|   | | \\   |
 /  /\\\`--'  /'   ; : .'||  |  '  '--' '   : |  ; .'
'--'.     / '   | '/  :|  :  :        |   | \`\`--'  
  \`--'---'  |   :    / |  | ,'        '   : |      
             \\   \\ .'  \`--''          ;   |.'      
              \`---\`                   '---'       
              `}
            </pre>
          </div>

          <div className="description">
            {/* Description text */}
            <p>
              As a dedicated cybersecurity student, I am actively exploring various 
              opportunities and career paths within the field. My current 
              interest lies in pursuing a security analyst role.
            </p>
          </div>
        </div>
      </main>
      
      <footer>
        <div className="social-icons">
          {/* Social media links */}
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
        {/* Footer copyright text */}
        <p>Copyright &copy; 2024 Steven Song</p>
      </footer>
    </div>
  );
};

export default Home;
