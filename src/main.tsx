import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { initializeGoogleAnalytics } from './utils/analytics';
import './index.css';

// Initialize Google Analytics
const gtagId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
if (gtagId) {
  initializeGoogleAnalytics(gtagId);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
