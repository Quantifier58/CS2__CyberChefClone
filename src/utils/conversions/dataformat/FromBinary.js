export const FromBinary = (binary) => {
  try {
    return binary.split(' ').map(bin => {
      if (!/^[01]+$/.test(bin)) throw new Error('Invalid binary character');
      return String.fromCharCode(parseInt(bin, 2));
    }).join('');
  } catch (error) {
    throw new Error('Invalid binary input: ' + error.message);
  }
};
