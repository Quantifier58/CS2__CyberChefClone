import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ConversionPanel from './components/ConversionPanel/ConversionPanel';
import About from './components/About/About';
import './App.css';

function App() {
  const [selectedTool, setSelectedTool] = useState('');

  return (
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
  );
}

export default App;
