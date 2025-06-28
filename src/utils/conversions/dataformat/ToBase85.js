export const ToBase85 = (text) => {
  const alphabet = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstu';
  let result = '';
  
  for (let i = 0; i < text.length; i += 4) {
    let value = 0;
    let count = Math.min(4, text.length - i);
    
    for (let j = 0; j < count; j++) {
      value = (value << 8) + text.charCodeAt(i + j);
    }
    
    for (let j = 0; j < count + 1; j++) {
      result = alphabet[value % 85] + result;
      value = Math.floor(value / 85);
    }
  }
  
  return result;
};
