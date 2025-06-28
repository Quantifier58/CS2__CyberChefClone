import bigInt from 'big-integer';

export const ToBase58 = (text) => {
  const alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  const bytes = Array.from(text).map(char => char.charCodeAt(0));
  
  // Convert to big integer
  let num = bigInt(0);
  for (const byte of bytes) {
    num = num.multiply(256).add(byte);
  }
  
  // Convert to base58
  let result = '';
  while (num.greater(0)) {
    result = alphabet[num.mod(58).toJSNumber()] + result;
    num = num.divide(58);
  }
  
  // Handle leading zeros
  for (const byte of bytes) {
    if (byte === 0) {
      result = '1' + result;
    } else {
      break;
    }
  }
  
  return result || '1';
};
