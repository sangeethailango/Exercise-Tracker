import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> is the parent component, which will store all other components. 
    All <Routes> component must nested inside this component */}
    <BrowserRouter>                    
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
