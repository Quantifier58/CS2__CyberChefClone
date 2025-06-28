export const ToHexdump = (text) => {
  let result = '';
  const bytesPerLine = 16;
  
  for (let i = 0; i < text.length; i += bytesPerLine) {
    const offset = i.toString(16).padStart(8, '0').toUpperCase();
    let hexPart = '';
    let asciiPart = '';
    
    for (let j = 0; j < bytesPerLine; j++) {
      if (i + j < text.length) {
        const byte = text.charCodeAt(i + j);
        hexPart += byte.toString(16).padStart(2, '0').toUpperCase() + ' ';
        asciiPart += (byte >= 32 && byte <= 126) ? text[i + j] : '.';
      } else {
        hexPart += '   ';
        asciiPart += ' ';
      }
      
      if (j === 7) hexPart += ' ';
    }
    
    result += `${offset}  ${hexPart} |${asciiPart}|\n`;
  }
  
  return result.trim();
};
