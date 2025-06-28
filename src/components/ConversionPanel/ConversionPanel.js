import React, { useState, useEffect, useCallback } from 'react';
import InputArea from './InputArea';
import OutputArea from './OutputArea';
import ToolInfo from './ToolInfo';
import { ConversionService } from '../../services/ConversionService';
import './ConversionPanel.css';

const ConversionPanel = ({ selectedTool }) => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConversion = useCallback(async (text) => {
    if (!selectedTool || !text.trim()) {
      setOutputText('');
      return;
    }

    setIsProcessing(true);
    try {
      const result = await ConversionService.convert(selectedTool, text);
      setOutputText(result);
    } catch (error) {
      setOutputText(`Error: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  }, [selectedTool]);

  useEffect(() => {
    if (selectedTool && inputText) {
      handleConversion(inputText);
    } else {
      setOutputText('');
    }
  }, [selectedTool, inputText, handleConversion]);

  const handleClear = () => {
    setInputText('');
    setOutputText('');
  };

  const handleCopy = () => {
    // Copy feedback handled in OutputArea
  };

  if (!selectedTool) {
    return (
      <div className="conversion-panel">
        <div className="welcome-message">
          <h2>Welcome to Text Converter & Crypto Tools</h2>
          <p>Select a tool from the sidebar to get started with text conversion, encoding, hashing, and encryption operations.</p>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Base Encoding</h3>
              <p>Convert between Base32, Base64, and Base58 formats</p>
            </div>
            <div className="feature-card">
              <h3>Number Systems</h3>
              <p>Convert between binary, hexadecimal, and octal</p>
            </div>
            <div className="feature-card">
              <h3>Hashing</h3>
              <p>Generate MD5, SHA-1, SHA-256, and Keccak hashes</p>
            </div>
            <div className="feature-card">
              <h3>Encryption</h3>
              <p>Apply ROT13, ROT47, Bacon cipher, and Morse code</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="conversion-panel">
      <ToolInfo toolId={selectedTool} />
      <div className="conversion-area">
        <InputArea
          value={inputText}
          onChange={setInputText}
          placeholder="Enter your text here..."
          onClear={handleClear}
        />
        <OutputArea
          value={outputText}
          isProcessing={isProcessing}
          onCopy={handleCopy}
        />
      </div>
    </div>
  );
};

export default ConversionPanel;
