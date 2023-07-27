export const base62ToText = (base62) => {
    const base62Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let number = 0;
  
    for (let i = 0; i < base62.length; i++) {
      const char = base62.charAt(i);
      const charValue = base62Chars.indexOf(char);
      
      if (charValue === -1) {
        throw new Error('Invalid character in Base62 encoding.');
      }
  
      number = (number * 62) + charValue;
    }
  
    let text = '';
    while (number > 0) {
      const byte = number % 256;
      text = String.fromCharCode(byte) + text;
      number = Math.floor(number / 256);
    }
  
    return text;
};  