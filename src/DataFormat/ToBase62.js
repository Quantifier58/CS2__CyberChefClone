export const textToBase62 = (text) => {
    const base62Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let base62 = '';
    let number = 0;
  
    for (let i = 0; i < text.length; i++) {
      number = (number * 256) + text.charCodeAt(i);
    }
  
    while (number > 0) {
      const remainder = number % 62;
      base62 = base62Chars.charAt(remainder) + base62;
      number = Math.floor(number / 62);
    }
  
    return base62 || '0'; 
};