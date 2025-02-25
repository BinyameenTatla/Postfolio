import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Routers } from './Routers.jsx'; // Your Router setup

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Render the Routers component to handle routing */}
    <Routers />
  </StrictMode>,
);
