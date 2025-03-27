import React from 'react';
import ReactDOM from 'react-dom/client';
import NoonWebCV from './pages/App'; // Ensure this path is correct
import './pages/App.css'; // Ensure this file exists
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NoonWebCV />
  </React.StrictMode>
);