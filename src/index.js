import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import './global.css'
import MainLayout from './layouts/MainLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainLayout>
      <Home />
    </MainLayout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
