export const textToBase45 = (text) => {
    const base45Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
    let result = '';
  
    for (let i = 0; i < text.length; i += 2) {
      const char1 = text.charCodeAt(i);
      const char2 = i + 1 < text.length ? text.charCodeAt(i + 1) : 0;
  
      const number = (char1 << 8) | char2;
  
      const base45Char1 = number % 45;
      const base45Char2 = ((number / 45) | 0) % 45;
  
      result += base45Chars.charAt(base45Char1);
      result += base45Chars.charAt(base45Char2);
    }
  
    return result;
};  