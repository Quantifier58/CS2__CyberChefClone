export const base85ToText = (base85) => {
    let text = '';
    let currentBlock = 0;
    let blockCount = 0;
  
    for (let i = 0; i < base85.length; i++) {
      const charCode = base85.charCodeAt(i);
  
      if (charCode >= 33 && charCode <= 117) {
        const decodedChar = charCode - 33;
        currentBlock = (currentBlock * 85) + decodedChar;
        blockCount += 1;
  
        if (blockCount === 5) {
          for (let j = 3; j >= 0; j--) {
            const byte = (currentBlock >> (j * 8)) & 0xFF;
            text += String.fromCharCode(byte);
          }
  
          currentBlock = 0;
          blockCount = 0;
        }
      } else if (charCode === 122 && blockCount === 0) {
        text += '\x00\x00\x00\x00';
      } else if (charCode === 32 || charCode === 9  || charCode === 10 || charCode === 13) {
        continue;
      } else {
        throw new Error('Invalid character in Base85 encoding.');
      }
    }
  
    if (blockCount > 0) {
      currentBlock = currentBlock * (85 ** (5 - blockCount));
      for (let j = 3; j >= (5 - blockCount); j--) {
        const byte = (currentBlock >> (j * 8)) & 0xFF;
        text += String.fromCharCode(byte);
      }
    }
  
    return text;
};
  