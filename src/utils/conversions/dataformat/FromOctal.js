export const FromOctal = (octal) => {
  try {
    return octal.split(' ').map(oct => {
      if (!/^[0-7]+$/.test(oct)) throw new Error('Invalid octal character');
      return String.fromCharCode(parseInt(oct, 8));
    }).join('');
  } catch (error) {
    throw new Error('Invalid octal input: ' + error.message);
  }
};
