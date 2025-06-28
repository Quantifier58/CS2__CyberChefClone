import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Text Converter & Crypto Tools</h1>
        <p>
          A comprehensive web application for text conversion, encoding, hashing, and encryption operations.
          Built with React and modern web technologies.
        </p>
        
        <h2>Features</h2>
        <ul>
          <li>Base encoding/decoding (Base32, Base64, Base58)</li>
          <li>Number system conversions (Binary, Hexadecimal, Octal)</li>
          <li>Cryptographic hashing (MD5, SHA-1, SHA-256, Keccak)</li>
          <li>Text encryption (ROT13, ROT47, Bacon Cipher, Morse Code)</li>
        </ul>

        <h2>How to Use</h2>
        <p>
          Select a tool from the sidebar, enter your text in the input area, and see the converted result instantly.
          You can copy the output with a single click.
        </p>
      </div>
    </div>
  );
};

export default About;
