export const FromBase85 = (base85) => {
  try {
    const alphabet = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstu';
    let result = '';
    
    for (let i = 0; i < base85.length; i += 5) {
      let chunk = base85.substr(i, 5);
      if (chunk.length < 5) {
        chunk = chunk.padEnd(5, 'u');
      }
      
      let value = 0;
      for (let j = 0; j < 5; j++) {
        const index = alphabet.indexOf(chunk[j]);
        if (index === -1) throw new Error('Invalid Base85 character');
        value = value * 85 + index;
      }
      
      for (let j = 3; j >= 0; j--) {
        if (i + j < base85.length - (5 - chunk.length)) {
          result += String.fromCharCode((value >> (j * 8)) & 0xFF);
        }
      }
    }
    
    return result;
  } catch (error) {
    throw new Error('Invalid Base85 input: ' + error.message);
  }
};
