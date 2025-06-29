export const caesarEncrypt = (text, shift = 3) => {
  let result = '';
  for (let char of text) {
    if (char.match(/[a-zA-Z]/)) {
      const base = char <= 'Z' ? 65 : 97;
      result += String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
    } else {
      result += char;
    }
  }
  return result;
};

export const caesarDecrypt = (text, shift = 3) => {
  return caesarEncrypt(text, -shift);
};
