export const ToBase45 = (text) => {
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:';
  let result = '';
  
  for (let i = 0; i < text.length; i += 2) {
    let x;
    if (i + 1 < text.length) {
      x = text.charCodeAt(i) + text.charCodeAt(i + 1) * 256;
      result += alphabet[x % 45];
      result += alphabet[Math.floor(x / 45) % 45];
      result += alphabet[Math.floor(x / (45 * 45))];
    } else {
      x = text.charCodeAt(i);
      result += alphabet[x % 45];
      result += alphabet[Math.floor(x / 45)];
    }
  }
  
  return result;
};
