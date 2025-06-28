import React from 'react';
import './ToolInfo.css';

const ToolInfo = ({ toolId }) => {
  const toolDescriptions = {
    // Base Encoding
    'toBase32': 'Encode text to Base32 format using RFC 4648 standard',
    'fromBase32': 'Decode Base32 encoded text back to original format',
    'toBase45': 'Encode text to Base45 format (used in QR codes)',
    'fromBase45': 'Decode Base45 encoded text back to original format',
    'toBase58': 'Encode text to Base58 format (used in Bitcoin addresses)',
    'fromBase58': 'Decode Base58 encoded text back to original format',
    'toBase62': 'Encode text to Base62 format (alphanumeric encoding)',
    'fromBase62': 'Decode Base62 encoded text back to original format',
    'toBase64': 'Encode text to Base64 format (MIME encoding)',
    'fromBase64': 'Decode Base64 encoded text back to original format',
    'toBase85': 'Encode text to Base85/Ascii85 format',
    'fromBase85': 'Decode Base85/Ascii85 encoded text back to original format',
    
    // Number Systems
    'toBinary': 'Convert text to binary representation (0s and 1s)',
    'fromBinary': 'Convert binary representation back to text',
    'toDecimal': 'Convert text to decimal ASCII values',
    'fromDecimal': 'Convert decimal ASCII values back to text',
    'toHex': 'Convert text to hexadecimal representation',
    'fromHex': 'Convert hexadecimal representation back to text',
    'toOctal': 'Convert text to octal representation',
    'fromOctal': 'Convert octal representation back to text',
    'toBCD': 'Convert text to Binary Coded Decimal format',
    'fromBCD': 'Convert Binary Coded Decimal back to text',
    
    // Data Format
    'toCharcode': 'Convert text to character code values',
    'fromCharcode': 'Convert character code values back to text',
    'toHexdump': 'Create a hexadecimal dump of the input text',
    'fromHexdump': 'Convert hexadecimal dump back to original text',
    'toHTMLentity': 'Convert text to HTML entity encoding',
    'fromHTMLentity': 'Convert HTML entities back to text',
    'urlEncode': 'Encode text for safe URL transmission',
    'urlDecode': 'Decode URL-encoded text back to original format',
    
    // Hashing
    'md5': 'Generate MD5 hash of the input text (128-bit)',
    'sha1': 'Generate SHA-1 hash of the input text (160-bit)',
    'sha256': 'Generate SHA-256 hash of the input text (256-bit)',
    'keccak256': 'Generate Keccak-256 hash (used in Ethereum)',
    
    // Encryption & Ciphers
    'rot13': 'Apply ROT13 cipher (Caesar cipher with 13-character shift)',
    'rot47': 'Apply ROT47 cipher (ASCII printable character rotation)',
    'baconencode': 'Encode text using Bacon\'s cipher (steganographic method)',
    'bacondecode': 'Decode Bacon\'s cipher back to original text',
    'toMorseCode': 'Convert text to Morse code representation',
    'fromMorseCode': 'Convert Morse code back to text',
  };

  const description = toolDescriptions[toolId] || 'Select a tool from the sidebar to see its description and start converting your text.';

  return (
    <div className="tool-info">
      <p className="tool-description">{description}</p>
    </div>
  );
};

export default ToolInfo;
