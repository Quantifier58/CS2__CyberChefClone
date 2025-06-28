export const FromBase45 = (base45) => {
  try {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:';
    let result = '';
    
    for (let i = 0; i < base45.length; i += 3) {
      let x = 0;
      let count = Math.min(3, base45.length - i);
      
      for (let j = 0; j < count; j++) {
        const char = base45[i + j];
        const index = alphabet.indexOf(char);
        if (index === -1) throw new Error('Invalid Base45 character');
        x += index * Math.pow(45, j);
      }
      
      if (count === 3) {
        result += String.fromCharCode(x % 256);
        result += String.fromCharCode(Math.floor(x / 256));
      } else if (count === 2) {
        result += String.fromCharCode(x);
      }
    }
    
    return result;
  } catch (error) {
    throw new Error('Invalid Base45 input: ' + error.message);
  }
};
