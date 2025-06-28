import md5 from 'js-md5';
import CryptoJS from 'crypto-js';
import { keccak256 } from 'js-sha3';

// Import from your existing dataformat files
import { FromBase32 } from '../utils/conversions/dataformat/FromBase32';
import { FromBase45 } from '../utils/conversions/dataformat/FromBase45';
import { FromBase58 } from '../utils/conversions/dataformat/FromBase58';
import { FromBase62 } from '../utils/conversions/dataformat/FromBase62';
import { FromBase64 } from '../utils/conversions/dataformat/FromBase64';
import { FromBase85 } from '../utils/conversions/dataformat/FromBase85';
import { FromBCD } from '../utils/conversions/dataformat/FromBCD';
import { FromBinary } from '../utils/conversions/dataformat/FromBinary';
import { FromCharcode } from '../utils/conversions/dataformat/FromCharcode';
import { FromDecimal } from '../utils/conversions/dataformat/FromDecimal';
import { FromHex } from '../utils/conversions/dataformat/FromHex';
import { FromHexdump } from '../utils/conversions/dataformat/FromHexdump';
import { FromHTMLentity } from '../utils/conversions/dataformat/FromHTMLentity';
import { FromOctal } from '../utils/conversions/dataformat/FromOctal';
import { ToBase32 } from '../utils/conversions/dataformat/ToBase32';
import { ToBase45 } from '../utils/conversions/dataformat/ToBase45';
import { ToBase58 } from '../utils/conversions/dataformat/ToBase58';
import { ToBase62 } from '../utils/conversions/dataformat/ToBase62';
import { ToBase64 } from '../utils/conversions/dataformat/ToBase64';
import { ToBase85 } from '../utils/conversions/dataformat/ToBase85';
import { ToBCD } from '../utils/conversions/dataformat/ToBCD';
import { ToBinary } from '../utils/conversions/dataformat/ToBinary';
import { ToCharcode } from '../utils/conversions/dataformat/ToCharcode';
import { ToDecimal } from '../utils/conversions/dataformat/ToDecimal';
import { ToHex } from '../utils/conversions/dataformat/ToHex';
import { ToHexdump } from '../utils/conversions/dataformat/ToHexdump';
import { ToHTMLentity } from '../utils/conversions/dataformat/ToHTMLentity';
import { ToOctal } from '../utils/conversions/dataformat/ToOctal';
import { URLdecode } from '../utils/conversions/dataformat/URLdecode';
import { URLencode } from '../utils/conversions/dataformat/URLencode';

// Import from your existing encryption files
import { bacondecode } from '../utils/conversions/encryption/bacondecode';
import { baconencode } from '../utils/conversions/encryption/baconencode';
import { frommorsecode } from '../utils/conversions/encryption/frommorsecode';
import { rot13 } from '../utils/conversions/encryption/rot13';
import { rot47 } from '../utils/conversions/encryption/rot47';
import { tomorsecode } from '../utils/conversions/encryption/tomorsecode';

export class ConversionService {
  static async convert(type, inputText) {
    if (!inputText.trim()) return '';
    
    try {
      switch (type) {
        // Base Encoding - From
        case 'fromBase32':
          return FromBase32(inputText);
        case 'fromBase45':
          return FromBase45(inputText);
        case 'fromBase58':
          return FromBase58(inputText);
        case 'fromBase62':
          return FromBase62(inputText);
        case 'fromBase64':
          return FromBase64(inputText);
        case 'fromBase85':
          return FromBase85(inputText);
          
        // Base Encoding - To
        case 'toBase32':
          return ToBase32(inputText);
        case 'toBase45':
          return ToBase45(inputText);
        case 'toBase58':
          return ToBase58(inputText);
        case 'toBase62':
          return ToBase62(inputText);
        case 'toBase64':
          return ToBase64(inputText);
        case 'toBase85':
          return ToBase85(inputText);
          
        // Number Systems - From
        case 'fromBinary':
          return FromBinary(inputText);
        case 'fromDecimal':
          return FromDecimal(inputText);
        case 'fromHex':
          return FromHex(inputText);
        case 'fromOctal':
          return FromOctal(inputText);
        case 'fromBCD':
          return FromBCD(inputText);
          
        // Number Systems - To
        case 'toBinary':
          return ToBinary(inputText);
        case 'toDecimal':
          return ToDecimal(inputText);
        case 'toHex':
          return ToHex(inputText);
        case 'toOctal':
          return ToOctal(inputText);
        case 'toBCD':
          return ToBCD(inputText);
          
        // Data Format
        case 'fromCharcode':
          return FromCharcode(inputText);
        case 'toCharcode':
          return ToCharcode(inputText);
        case 'fromHexdump':
          return FromHexdump(inputText);
        case 'toHexdump':
          return ToHexdump(inputText);
        case 'fromHTMLentity':
          return FromHTMLentity(inputText);
        case 'toHTMLentity':
          return ToHTMLentity(inputText);
        case 'urlDecode':
          return URLdecode(inputText);
        case 'urlEncode':
          return URLencode(inputText);
          
        // Encryption/Ciphers
        case 'rot13':
          return rot13(inputText);
        case 'rot47':
          return rot47(inputText);
        case 'baconencode':
          return baconencode(inputText);
        case 'bacondecode':
          return bacondecode(inputText);
        case 'toMorseCode':
          return tomorsecode(inputText);
        case 'fromMorseCode':
          return frommorsecode(inputText);
          
        // Hashing (using libraries)
        case 'md5':
          return md5(inputText).toString();
        case 'sha1':
          return CryptoJS.SHA1(inputText).toString();
        case 'sha256':
          return CryptoJS.SHA256(inputText).toString();
        case 'keccak256':
          return keccak256(inputText);
          
        default:
          throw new Error(`Unknown conversion type: ${type}`);
      }
    } catch (error) {
      throw new Error(`Conversion failed: ${error.message}`);
    }
  }
}
