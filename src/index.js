import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/index.css'
import './Css/style.css'
import './Scss/style.scss'
import App from './App';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
