import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root container
const root = createRoot(rootElement);

// Render the main App component into the root container
root.render(
  <React.StrictMode> {/* Enable strict mode for highlighting potential problems in an application */}
    <App /> {/* Main App component */}
  </React.StrictMode>
);