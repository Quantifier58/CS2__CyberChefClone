export const base58ToText = (base58) => {
  const base58Chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let number = 0;

  for (let i = 0; i < base58.length; i++) {
    const char = base58.charAt(i);
    const charValue = base58Chars.indexOf(char);

    if (charValue === -1) {
      throw new Error('Invalid character in Base58 encoding.');
    }

    number = (number * 58) + charValue;
  }

  let text = '';
  while (number > 0) {
    const byte = number % 256;
    text = String.fromCharCode(byte) + text;
    number = Math.floor(number / 256);
  }

  return text;
};