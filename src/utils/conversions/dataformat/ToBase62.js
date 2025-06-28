import bigInt from 'big-integer';

export const ToBase62 = (text) => {
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const bytes = Array.from(text).map(char => char.charCodeAt(0));
  
  let num = bigInt(0);
  for (const byte of bytes) {
    num = num.multiply(256).add(byte);
  }
  
  let result = '';
  while (num.greater(0)) {
    result = alphabet[num.mod(62).toJSNumber()] + result;
    num = num.divide(62);
  }
  
  return result || '0';
};
