import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Render the main App component into the root element
ReactDOM.render(
  <React.StrictMode> {/* Enable strict mode for highlighting potential problems in an application */}
    <App /> {/* Main App component */}
  </React.StrictMode>,
  document.getElementById('root') // The root element where the App component is rendered
);
