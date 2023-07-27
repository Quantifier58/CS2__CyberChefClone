export const base45ToText = (base45) => {
    const base45Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
    let number = 0;
    let count = 0;
    let binaryData = '';
  
    for (let i = 0; i < base45.length; i++) {
      const char = base45.charAt(i);
      const charValue = base45Chars.indexOf(char);
  
      if (charValue === -1) {
        throw new Error('Invalid character in Base45 encoding.');
      }
  
      number = (number * 45) + charValue;
      count++;
  
      if (count === 3) {
        const byte1 = (number >> 16) & 0xFF;
        const byte2 = (number >> 8) & 0xFF;
        const byte3 = number & 0xFF;
  
        binaryData += String.fromCharCode(byte1);
        binaryData += String.fromCharCode(byte2);
        binaryData += String.fromCharCode(byte3);
  
        number = 0;
        count = 0;
      }
    }
  
    if (count > 0) {
      const byte1 = (number >> 8) & 0xFF;
      const byte2 = number & 0xFF;
  
      binaryData += String.fromCharCode(byte1);
      binaryData += String.fromCharCode(byte2);
    }
  
    return binaryData;
};  