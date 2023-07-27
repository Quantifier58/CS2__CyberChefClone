export const textToBase58 = (text) => {
    const base58Chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    let base58 = '';
    let number = 0;
  
    for (let i = 0; i < text.length; i++) {
      number = (number * 256) + text.charCodeAt(i);
    }
  
    while (number > 0) {
      const remainder = number % 58;
      base58 = base58Chars.charAt(remainder) + base58;
      number = Math.floor(number / 58);
    }
  
    return base58 || '1';
};  