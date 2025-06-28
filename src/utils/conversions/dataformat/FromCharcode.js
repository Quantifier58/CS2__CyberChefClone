export const FromCharcode = (charcode) => {
  try {
    return charcode.split(' ').map(code => {
      const num = parseInt(code, 10);
      if (isNaN(num)) throw new Error('Invalid character code');
      return String.fromCharCode(num);
    }).join('');
  } catch (error) {
    throw new Error('Invalid character code input: ' + error.message);
  }
};
