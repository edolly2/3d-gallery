import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Script from './script';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <script src={Script}></script> */}
  </React.StrictMode>
);
