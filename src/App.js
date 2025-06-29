import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Preloader from './components/Preloader/Preloader';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ConversionPanel from './components/ConversionPanel/ConversionPanel';
import About from './components/About/About';
import './App.css';

function App() {
  const [selectedTool, setSelectedTool] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show preloader for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <ThemeProvider>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar onToolSelect={setSelectedTool} selectedTool={selectedTool} />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<ConversionPanel selectedTool={selectedTool} />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
