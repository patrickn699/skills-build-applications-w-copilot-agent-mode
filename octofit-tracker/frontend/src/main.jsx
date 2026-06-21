import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// IMPORTANT: Define VITE_CODESPACE_NAME in frontend/.env.local when running in Codespaces.
// Example .env.local:
// VITE_CODESPACE_NAME=your-codespace-name

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
