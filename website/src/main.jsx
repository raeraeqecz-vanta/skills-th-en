import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/01.css';
import './styles/02.css';
import './styles/03.css';
import './styles/04.css';

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
