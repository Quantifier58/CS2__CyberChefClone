import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import darkLogo from '../../assets/dark-logo.png'; // Your dark theme logo
import lightLogo from '../../assets/light-logo.png'; // Your light theme logo
import './Header.css';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="app-title">DaemonByte</h1>
        </div>
        
        <div className="header-center">
          <div className="logo">
            <img
              src={isDarkMode ? darkLogo : lightLogo}
              alt="App Logo"
              className="logo-image"
            />
          </div>
        </div>
        
        <div className="header-right">
          <nav className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
