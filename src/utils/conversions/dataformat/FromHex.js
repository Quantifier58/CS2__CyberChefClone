export const FromHex = (hex) => {
  try {
    return hex.split(' ').map(hexValue => {
      if (!/^[0-9A-Fa-f]+$/.test(hexValue)) throw new Error('Invalid hex character');
      return String.fromCharCode(parseInt(hexValue, 16));
    }).join('');
  } catch (error) {
    throw new Error('Invalid hex input: ' + error.message);
  }
};
