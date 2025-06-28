export const FromDecimal = (decimal) => {
  try {
    return decimal.split(' ').map(dec => {
      const num = parseInt(dec, 10);
      if (isNaN(num) || num < 0 || num > 255) throw new Error('Invalid decimal value');
      return String.fromCharCode(num);
    }).join('');
  } catch (error) {
    throw new Error('Invalid decimal input: ' + error.message);
  }
};
