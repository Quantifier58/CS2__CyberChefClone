import React, { useState } from 'react';
import "./App.css";
import md2 from 'js-md2';
import md5 from 'js-md5';
import CryptoJS from 'crypto-js';
import { sha3_224 } from 'js-sha3';
import { sha3_256 } from 'js-sha3';
import { base32ToText } from "./DataFormat/FromBase32";
import { base45ToText } from "./DataFormat/FromBase45";
import { base58ToText } from './DataFormat/FromBase58';
import { base62ToText } from "./DataFormat/FromBase62";
import { base64ToText } from "./DataFormat/FromBase64";
import { base85ToText } from './DataFormat/FromBase85';
import { bcdToText } from './DataFormat/FromBCD';
import { binaryToText } from "./DataFormat/FromBinary"
import { charcodeToText } from "./DataFormat/FromCharcode"
import { decimalToText } from "./DataFormat/FromDecimal"
import { hexToText } from "./DataFormat/FromHex"
import { hexdumpToText } from "./DataFormat/FromHexdump"
import { htmlEntityToText } from "./DataFormat/FromHTMLentity"
import { octalToText } from "./DataFormat/FromOctal"
import { textToBase32 } from './DataFormat/ToBase32';
import { textToBase45 } from "./DataFormat/ToBase45"
import { textToBase58 } from "./DataFormat/ToBase58"
import { textToBase62 } from "./DataFormat/ToBase62";
import { textToBase64 } from "./DataFormat/ToBase64"
import { textToBase85 } from './DataFormat/ToBase85';
import { decimalToBcd } from "./DataFormat/ToBCD"
import { textToBinary } from "./DataFormat/ToBinary"
import { textToCharcode } from "./DataFormat/ToCharcode"
import { textToDecimal } from "./DataFormat/ToDecimal"
import { textToHex } from "./DataFormat/ToHex"
import { textToHexDump } from "./DataFormat/ToHexdump"
import { textToHtmlEntity } from "./DataFormat/ToHTMLentity"
import { textToOctal } from "./DataFormat/ToOctal"
import { urlDecode } from "./DataFormat/URLdecode"
import { urlEncode } from "./DataFormat/URLencode"
import { baconCipherDecode } from "./Encryption/bacondecode"
import { baconCipherEncode } from './Encryption/baconencode';
import { rot13Encrypt } from './Encryption/rot13';
import { rot47Encrypt } from './Encryption/rot47';
import { toMorseCode } from './Encryption/tomorsecode';
import { fromMorseCode } from './Encryption/frommorsecode';

function App() {
  const [conversionType, setConversionType] = useState('');
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    handleConversion(e.target.value);
  };

  const handleConversionClick = (type) => {
    setConversionType(type);
    setInputText('');
  };

  const handleConversion = (text) => {
    let convertedText = '';

    switch (conversionType) {
      case 'fromBase32':
        convertedText = base32ToText(inputText);
        break;
      case 'fromBase45':
        convertedText = base45ToText(inputText);
        break;
      case 'fromBase58':
        convertedText = base58ToText(inputText);
        break;
      case 'fromBase62':
        convertedText = base62ToText(inputText);
        break;
      case 'fromBase64':
        convertedText = base64ToText(inputText);
        break;
      case 'fromBase85':
        convertedText = base85ToText(inputText);
        break;
      case 'frombcd':
        convertedText = bcdToText(inputText);
        break;
      case 'fromBinary':
        convertedText = binaryToText(inputText);
        break;
      case 'fromCharcode':
        convertedText = charcodeToText(inputText);
        break;
      case 'fromDecimal':
        convertedText = decimalToText(inputText);
        break;
      case 'fromHex':
        convertedText = hexToText(inputText);
        break;
      case 'fromHexdump':
        convertedText = hexdumpToText(inputText);
        break;
      case 'fromHtmlentity':
        convertedText = htmlEntityToText(inputText);
        break;
      case 'fromOctal':
        convertedText = octalToText(inputText);
        break;
      case 'toBase32':
        convertedText = textToBase32(inputText);
        break;
      case 'toBase45':
        convertedText = textToBase45(inputText);
        break;
      case 'toBase58':
        convertedText = textToBase58(inputText);
        break;
      case 'toBase62':
        convertedText = textToBase62(inputText);
        break;
      case 'toBase64':
        convertedText = textToBase64(inputText);
        break;
      case 'toBase85':
        convertedText = textToBase85(inputText);
        break;
      case 'tobcd':
        convertedText = decimalToBcd(inputText);
        break;
      case 'toBinary':
        convertedText = textToBinary(inputText);
        break;
      case 'toCharcode':
        convertedText = textToCharcode(inputText);
        break;
      case 'toDecimal':
        convertedText = textToDecimal(inputText);
        break;
      case 'toHex':
        convertedText = textToHex(inputText);
        break;
      case 'toHexDump':
        convertedText = textToHexDump(inputText);
        break;
      case 'toHtmlentity':
        convertedText = textToHtmlEntity(inputText);
        break;
      case 'toOctal':
        convertedText = textToOctal(inputText);
        break;
      case 'urlDecode':
        convertedText = urlDecode(inputText);
        break;
      case 'urlEncode':
        convertedText = urlEncode(inputText);
        break;
      case 'bacondecode':
        convertedText = baconCipherDecode(inputText);
        break;
      case 'baconencode':
        convertedText = baconCipherEncode(inputText);
        break;
      case 'rot13':
        convertedText = rot13Encrypt(inputText);
        break;
      case 'rot47':
        convertedText = rot47Encrypt(inputText);
        break;
      case 'toMorseCode':
        convertedText = toMorseCode(inputText);
        break;
      case 'fromMorseCode':
        convertedText = fromMorseCode(inputText);
        break;
      case 'keccak224':
        convertedText = keccak224hash(inputText);
        break;
      case 'keccak256':
        convertedText = keccak256hash(inputText);
        break;
      case 'md2':
        convertedText = Md2Hash(inputText);
        break;
      case 'md5':
        convertedText = Md5Hash(inputText);
        break;
      case 'sha1':
        convertedText = sha1Hash(inputText);
        break;
      case 'sha224':
        convertedText = sha224Hash(inputText);
        break;
      case 'sha256':
        convertedText = sha256Hash(inputText);;
        break;
      default:
        break;
    }

    return convertedText;
  };
  
  const keccak224hash = () => {
    const result = sha3_224(inputText);
    return result;
  };

  const keccak256hash = () => {
    const result = sha3_256(inputText);
    return result;
  };

  const Md2Hash = () =>  {
    const result = md2(inputText).toString();
    return result;
  };
  
  const Md5Hash = () =>  {
    const result = md5(inputText).toString();
    return result;
  };

  const sha1Hash = () =>  {
    const result = CryptoJS.SHA1(inputText).toString();
    return result;
  };

  const sha224Hash = () =>  {
    const result = CryptoJS.SHA224(inputText).toString();
    return result;
  };

  const sha256Hash = () =>  {
    const result = CryptoJS.SHA256(inputText).toString();
    return result;
  };
  

  return (
    <>
    <div className="body">
      <div className="topbar"><h1>CyberChef Clone</h1></div>
      <div className="container">
      <div className="sidebar1">
        <h3>Data Format</h3>
        <ul classNeme="SidebarList">
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toHex')}>To Hex</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('fromHex')}>From Hex</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toHexDump')}>To HexDump</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('fromHexdump')}>From HexDump</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toBase32')}>To Base32</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('fromBase32')}>From Base32</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toBase45')}> To Base45 </li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('fromBase45')}>From Base45</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toBase58')}>To Base58</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('fromBase58')}>From Base58</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toBase62')}>To Base62</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('frombase62')}>From base62</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toBase64')}>To Base64</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('fromBase64')}>From Base64</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toBase85')}>To Base85</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('frombase85')}>From Base85</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('tobcd')}>To BCD</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('frombcd')}>From BCD</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toBinary')}>To Binary</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('fromBinary')}>From Binary</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toCharcode')}>To Charcode</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('fromCharcode')}>From Charcode</li>
        </ul>
      </div>
      <div className='sidebar2'>
        <ul className='sidebarList'>
          <p><br/></p>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toDecimal')}>To Decimal</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('fromDecimal')}>From Decimal</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toOctal')}>To Octal</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('fromOctal')}>From Octal</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('urlEncode')}>URL Encode</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('urlDecode')}>Url Decode</li>
        </ul>
        <h3>Encryption</h3>
        <ul className="sidebarList">
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('rot13')}>ROT13</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('rot47')}>ROT47</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('toMorseCode')}>To Morse Code</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('fromMorseCode')}>From Morse Code</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('baconencode')}>Bacon Cipher Encode</li>
          <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('bacondecode')}>Bacon Cipher Decode</li>
        </ul>
        <h3>Hashing</h3>
        <ul className="sidebarList">
        <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('md2')}>MD2</li>
        <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('md5')}>MD5</li>
        <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('sha1')}>SHA-1</li>
        <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('sha224')}>SHA-224</li>
        <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('sha256')}>SHA-256</li>
        <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('keccak224')}>Keccak-224</li>
        <li style={{cursor: 'pointer'}} onClick={() => handleConversionClick('keccak256')}>Keccak-256</li>
        </ul>
      </div>
      <div className="content">
        <h3>Input: </h3>
        <div className="input-container">
          <input type="text" className="input-field" value={inputText} placeholder="Enter here" onChange={handleInputChange} />
        </div>
        <div className='out'>
          <h3>Output:</h3>
          <div className="output-container">
            <textarea className="output-field" value={handleConversion(inputText)} readOnly />
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default App;
