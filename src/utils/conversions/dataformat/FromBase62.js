import bigInt from 'big-integer';

export const FromBase62 = (base62) => {
  try {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   //  let result = '';
    let num = bigInt(0);
    
    for (let i = 0; i < base62.length; i++) {
      const char = base62[i];
      const index = alphabet.indexOf(char);
      if (index === -1) throw new Error('Invalid Base62 character');
      num = num.multiply(62).add(index);
    }
    
    const bytes = [];
    while (num.greater(0)) {
      bytes.unshift(num.mod(256).toJSNumber());
      num = num.divide(256);
    }
    
    return String.fromCharCode(...bytes);
  } catch (error) {
    throw new Error('Invalid Base62 input: ' + error.message);
  }
};
