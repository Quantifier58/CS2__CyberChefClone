import React from 'react';
import ToolCategory from './ToolCategory';
import './Sidebar.css';

const Sidebar = ({ onToolSelect, selectedTool }) => {
  const toolCategories = [
    {
      title: 'Base Encoding',
      tools: [
        { id: 'toBase32', name: 'To Base32' },
        { id: 'fromBase32', name: 'From Base32' },
        { id: 'toBase45', name: 'To Base45' },
        { id: 'fromBase45', name: 'From Base45' },
        { id: 'toBase58', name: 'To Base58' },
        { id: 'fromBase58', name: 'From Base58' },
        { id: 'toBase62', name: 'To Base62' },
        { id: 'fromBase62', name: 'From Base62' },
        { id: 'toBase64', name: 'To Base64' },
        { id: 'fromBase64', name: 'From Base64' },
        { id: 'toBase85', name: 'To Base85' },
        { id: 'fromBase85', name: 'From Base85' },
      ]
    },
    {
      title: 'Number Systems',
      tools: [
        { id: 'toBinary', name: 'To Binary' },
        { id: 'fromBinary', name: 'From Binary' },
        { id: 'toDecimal', name: 'To Decimal' },
        { id: 'fromDecimal', name: 'From Decimal' },
        { id: 'toHex', name: 'To Hexadecimal' },
        { id: 'fromHex', name: 'From Hexadecimal' },
        { id: 'toOctal', name: 'To Octal' },
        { id: 'fromOctal', name: 'From Octal' },
        { id: 'toBCD', name: 'To BCD' },
        { id: 'fromBCD', name: 'From BCD' },
      ]
    },
    {
      title: 'Data Format',
      tools: [
        { id: 'toCharcode', name: 'To Character Code' },
        { id: 'fromCharcode', name: 'From Character Code' },
        { id: 'toHexdump', name: 'To Hex Dump' },
        { id: 'fromHexdump', name: 'From Hex Dump' },
        { id: 'toHTMLentity', name: 'To HTML Entity' },
        { id: 'fromHTMLentity', name: 'From HTML Entity' },
        { id: 'urlEncode', name: 'URL Encode' },
        { id: 'urlDecode', name: 'URL Decode' },
      ]
    },
    {
      title: 'Hashing',
      tools: [
        { id: 'md5', name: 'MD5' },
        { id: 'sha1', name: 'SHA1' },
        { id: 'sha256', name: 'SHA256' },
        { id: 'keccak256', name: 'Keccak256' },
      ]
    },
    {
      title: 'Encryption & Ciphers',
      tools: [
        { id: 'rot13', name: 'ROT13' },
        { id: 'rot47', name: 'ROT47' },
        { id: 'baconencode', name: 'Bacon Cipher Encode' },
        { id: 'bacondecode', name: 'Bacon Cipher Decode' },
        { id: 'toMorseCode', name: 'To Morse Code' },
        { id: 'fromMorseCode', name: 'From Morse Code' },
      ]
    },
    {
      title: 'CTF Specialized',
      tools: [
        { id: 'caesarEncrypt', name: 'Caesar Encrypt' },
        { id: 'caesarDecrypt', name: 'Caesar Decrypt' },
        { id: 'toBase64URLSafe', name: 'To Base64 URL-Safe' },
        { id: 'fromBase64URLSafe', name: 'From Base64 URL-Safe' },
        { id: 'atbash', name: 'Atbash Cipher' },
        { id: 'vigenereEncrypt', name: 'Vigenère Encrypt' },
        { id: 'vigenereDecrypt', name: 'Vigenère Decrypt' },
        { id: 'reverseText', name: 'Reverse Text' },
        { id: 'reverseWords', name: 'Reverse Words' },
        { id: 'toLeetspeak', name: 'To Leetspeak' },
        { id: 'fromLeetspeak', name: 'From Leetspeak' },
        { id: 'toNATO', name: 'To NATO Phonetic' },
        { id: 'fromNATO', name: 'From NATO Phonetic' },
        { id: 'keyboardShiftRight', name: 'Keyboard Shift Right' },
        { id: 'keyboardShiftLeft', name: 'Keyboard Shift Left' },
        { id: 'toPigLatin', name: 'To Pig Latin' },
        { id: 'fromPigLatin', name: 'From Pig Latin' },
        { id: 'toQRText', name: 'QR Code Info' },
        { id: 'fromQRText', name: 'From QR Code' }
      ]
    }

  ];

  return (
    <aside className="sidebar">
      {/* Removed sidebar-header section completely */}
      <div className="sidebar-content">
        {toolCategories.map((category, index) => (
          <ToolCategory
            key={index}
            title={category.title}
            tools={category.tools}
            onToolSelect={onToolSelect}
            selectedTool={selectedTool}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
