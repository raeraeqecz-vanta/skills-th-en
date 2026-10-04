import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles-base.css';
import './styles-detail.css';
import './styles-type.css';

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
