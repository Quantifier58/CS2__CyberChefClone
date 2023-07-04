import React, { useState } from 'react';
import "./App.css";
function App() {
  const [conversionType, setConversionType] = useState('');
  const [inputText, setInputText] = useState('');

  const handleConversionClick = (type) => {
    setConversionType(type);
    setInputText('');
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    handleConversion(e.target.value);
  };

  const handleConversion = (text) => {
    let convertedText = '';

    switch (conversionType) {
      case 'toHex':
        convertedText = textToHex(inputText);
        break;
      case 'fromHex':
        convertedText = hexToText(inputText);
        break;
      case 'toBase32':
        convertedText = textToBase32(inputText);
        break;
      case 'fromBase32':
        convertedText = base32ToText(inputText);
        break;
      case 'toBase64':
        convertedText = textToBase64(inputText);
        break;
      case 'fromBase64':
        convertedText = base64ToText(inputText);
        break;
      case 'toHexDump':
        convertedText = textToHexDump(inputText);
        break;
      default:
        break;
    }

    return convertedText;
  };

  const textToHex = (text) => {
    let hex = '';
    for (let i = 0; i < text.length; i++) {
      hex += text.charCodeAt(i).toString(16);
    }
    return hex;
  };

  const hexToText = (hex) => {
    let text = '';
    for (let i = 0; i < hex.length; i += 2) {
      const byte = parseInt(hex.substr(i, 2), 16);
      text += String.fromCharCode(byte);
    }
    return text;
  };

  const textToBase32 = (text) => {
    const base32Charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let binaryString = '';
    let padding = '';
  
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i).toString(2);
      binaryString += '0'.repeat(8 - charCode.length) + charCode;
    }

    const remainder = binaryString.length % 5;
    if (remainder !== 0) {
      padding = '0'.repeat(5 - remainder);
      binaryString += padding;
    }

    let base32Text = '';
    for (let i = 0; i < binaryString.length; i += 5) {
      const group = binaryString.substr(i, 5);
      const index = parseInt(group, 2);
      base32Text += base32Charset[index];
    }

    base32Text += '='.repeat(padding.length / 5);
    return base32Text;
  };


  const base32ToText = (base32) => {
    const base32Charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let binaryString = '';
    let paddingCount = 0;

    base32 = base32.replace(/=/g, '');

    for (let i = 0; i < base32.length; i++) {
      const index = base32Charset.indexOf(base32[i]);
      const binary = index.toString(2).padStart(5, '0');
      binaryString += binary;
    }

    const lastChar = binaryString[binaryString.length - 1];
    if (lastChar === '0') {
      while (binaryString[binaryString.length - 1] === '0') {
        binaryString = binaryString.slice(0, -1);
        paddingCount++;
      }
    }

    let text = '';
    for (let i = 0; i < binaryString.length; i += 8) {
      const byte = binaryString.substr(i, 8);
      const charCode = parseInt(byte, 2);
      text += String.fromCharCode(charCode);
    }

    text += '='.repeat(paddingCount);

    return text;
  };


  const textToBase64 = (text) => {
    const base64Charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    let encodedText = '';

    let binaryString = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i).toString(2);
      binaryString += '0'.repeat(8 - charCode.length) + charCode;
    }

    const padding = binaryString.length % 6 === 2 ? '==' : binaryString.length % 6 === 4 ? '=' : '';
    binaryString += '0'.repeat(6 - binaryString.length % 6);
    for (let i = 0; i < binaryString.length; i += 6) {
      const group = binaryString.substr(i, 6);
      const index = parseInt(group, 2);
      encodedText += base64Charset[index];
    }

    encodedText += padding;

    return encodedText;
  };


  const base64ToText = (base64) => {
    const base64Charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let decodedText = '';

    base64 = base64.replace(/[^A-Za-z0-9+/=]/g, '');

    let binaryString = '';
    for (let i = 0; i < base64.length; i++) {
      const char = base64[i];
      const index = base64Charset.indexOf(char);
      if (index !== -1) {
        const binary = index.toString(2).padStart(6, '0');
        binaryString += binary;
      }
    }

    for (let i = 0; i < binaryString.length; i += 8) {
      const byte = binaryString.substr(i, 8);
      const charCode = parseInt(byte, 2);
      decodedText += String.fromCharCode(charCode);
    }

    return decodedText;
  };


  const textToHexDump = (text) => {
    let hexDump = '';
    for (let i = 0; i < text.length; i++) {
      const byte = text.charCodeAt(i).toString(16);
      hexDump += ('0' + byte).slice(-2) + ' ';
    }
    return hexDump.trim();
  };

  return (
    <div className="body">
      <div className="topbar"><h1>CyberChef Clone</h1></div>
      <div className="container">
      <div className="sidebar">
        <h2>Conversions</h2>
        <ul classNeme="SidebarList">
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('fromHex')}>From Hex</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toHex')}>To Hex</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toBase32')}>To Base32</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('fromBase32')}>From Base32</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toBase64')}>To Base64</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('fromBase64')}>From Base64</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toHexDump')}>To HexDump</li>
        </ul>
        <h2>Hashing</h2>
        <ul className="sidebarList">
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('fromHex')}>MD5</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toHex')}>SHA-1</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toBase32')}>SHA-256</li>
        </ul>
        <h2>Decryption</h2>
        <ul className="sidebarList">
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('fromHex')}>AES</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toHex')}>RSA</li>
        </ul>
      </div>
      <div className="content">
        <h3>Input: </h3>
        <div className="input-container">
          <input type="text" className="input-field" value={inputText} placeholder="Enter here" onChange={handleInputChange} />
        </div>
        <h3>Output:</h3>
        <div className="output-container">
          <textarea className="output-field" value={handleConversion(inputText)} readOnly />
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default App;
