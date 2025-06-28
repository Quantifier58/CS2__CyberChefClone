import bigInt from 'big-integer';

export const FromBase58 = (base58) => {
  try {
    const alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
   //  let result = '';
    let num = bigInt(0);
    
    // Convert base58 to big integer
    for (let i = 0; i < base58.length; i++) {
      const char = base58[i];
      const index = alphabet.indexOf(char);
      if (index === -1) throw new Error('Invalid Base58 character');
      num = num.multiply(58).add(index);
    }
    
    // Convert to bytes
    const bytes = [];
    while (num.greater(0)) {
      bytes.unshift(num.mod(256).toJSNumber());
      num = num.divide(256);
    }
    
    // Handle leading zeros
    for (let i = 0; i < base58.length && base58[i] === '1'; i++) {
      bytes.unshift(0);
    }
    
    return String.fromCharCode(...bytes);
  } catch (error) {
    throw new Error('Invalid Base58 input: ' + error.message);
  }
};
