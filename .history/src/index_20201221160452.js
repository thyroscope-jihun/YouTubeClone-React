import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import Youtube from './service/youtube';

const youtube = new Youtube('sdf');
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


