import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="preloader-content">
        <div className="loader"></div>
        <div className="preloader-subtitle">Initializing Crypto Tools...</div>
      </div>
    </div>
  );
};

export default Preloader;
