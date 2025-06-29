export const vigenereEncrypt = (text, key = 'KEY') => {
  if (!key) throw new Error('Key is required for Vigenère cipher');
  
  let result = '';
  let keyIndex = 0;
  const upperKey = key.toUpperCase();
  
  for (let char of text) {
    if (char.match(/[a-zA-Z]/)) {
      const base = char <= 'Z' ? 65 : 97;
      const shift = upperKey.charCodeAt(keyIndex % upperKey.length) - 65;
      result += String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
      keyIndex++;
    } else {
      result += char;
    }
  }
  return result;
};

export const vigenereDecrypt = (text, key = 'KEY') => {
  if (!key) throw new Error('Key is required for Vigenère cipher');
  
  let result = '';
  let keyIndex = 0;
  const upperKey = key.toUpperCase();
  
  for (let char of text) {
    if (char.match(/[a-zA-Z]/)) {
      const base = char <= 'Z' ? 65 : 97;
      const shift = upperKey.charCodeAt(keyIndex % upperKey.length) - 65;
      result += String.fromCharCode(((char.charCodeAt(0) - base - shift + 26) % 26) + base);
      keyIndex++;
    } else {
      result += char;
    }
  }
  return result;
};
