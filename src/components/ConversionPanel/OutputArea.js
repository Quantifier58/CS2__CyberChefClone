import React, { useState } from 'react';
import './OutputArea.css';

const OutputArea = ({ value, isProcessing, onCopy }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
      onCopy();
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="output-section">
      <div className="section-header">
        <h3>Output</h3>
        <div className="section-actions">
          <span className="char-count">
            {isProcessing ? 0 : value.length} chars
          </span>
          <button 
            className={`copy-btn ${copySuccess ? 'success' : ''}`}
            onClick={handleCopy}
            disabled={!value || isProcessing}
          >
            {copySuccess ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      <textarea
        className="output-field"
        value={isProcessing ? 'Processing...' : value}
        readOnly
        rows={12}
      />
    </div>
  );
};

export default OutputArea;
