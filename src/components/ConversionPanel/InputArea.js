import React from 'react';
import './InputArea.css';

const InputArea = ({ value, onChange, placeholder, onClear }) => {
  return (
    <div className="input-section">
      <div className="section-header">
        <h3>Input</h3>
        <div className="section-actions">
          <span className="char-count">{value.length} chars</span>
          <button className="clear-btn" onClick={onClear}>Clear</button>
        </div>
      </div>
      <textarea
        className="input-field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={12}
      />
    </div>
  );
};

export default InputArea;
