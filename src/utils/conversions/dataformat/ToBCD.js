export const ToBCD = (text) => {
  let result = '';
  
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    const high = Math.floor(charCode / 10) % 10;
    const low = charCode % 10;
    
    result += high.toString(2).padStart(4, '0');
    result += low.toString(2).padStart(4, '0');
    result += ' ';
  }
  
  return result.trim();
};
