import React, { useState } from 'react';
import './ToolCategory.css';

const ToolCategory = ({ title, tools, onToolSelect, selectedTool }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="tool-category">
      <div 
        className="category-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="category-title">{title}</h3>
        <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>
          
        </span>
      </div>
      {isExpanded && (
        <ul className="tool-list">
          {tools.map((tool) => (
            <li
              key={tool.id}
              className={`tool-item ${selectedTool === tool.id ? 'active' : ''}`}
              onClick={() => onToolSelect(tool.id)}
            >
              {tool.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToolCategory;
