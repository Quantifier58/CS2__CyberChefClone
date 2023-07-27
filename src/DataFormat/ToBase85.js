export const textToBase85 = (text) => {
    let base85 = '';
    let currentBlock = 0;
    let blockCount = 0;
  
    for (let i = 0; i < text.length; i++) {
      currentBlock = (currentBlock << 8) | text.charCodeAt(i);
      blockCount += 1;
  
      if (blockCount === 4) {
        let encodedBlock = currentBlock;
        let encodedText = '';
  
        for (let j = 0; j < 5; j++) {
          const encodedChar = encodedBlock % 85;
          encodedText = String.fromCharCode(encodedChar + 33) + encodedText;
          encodedBlock = Math.floor(encodedBlock / 85);
        }
  
        base85 += encodedText;
        currentBlock = 0;
        blockCount = 0;
      }
    }
  
    if (blockCount > 0) {
      const remainingBytes = 4 - blockCount;
      currentBlock <<= 8 * remainingBytes;
  
      let encodedBlock = currentBlock;
      let encodedText = '';
  
      for (let i = 0; i < 5; i++) {
        const encodedChar = encodedBlock % 85;
        encodedText = String.fromCharCode(encodedChar + 33) + encodedText;
        encodedBlock = Math.floor(encodedBlock / 85);
      }
  
      base85 += encodedText.slice(0, 5 - remainingBytes);
    }
  
    return base85;
};
  