export const FromBCD = (bcd) => {
  try {
    const cleanBCD = bcd.replace(/\s/g, '');
    if (cleanBCD.length % 8 !== 0) throw new Error('BCD length must be multiple of 8');
    
    let result = '';
    for (let i = 0; i < cleanBCD.length; i += 8) {
      const byte = cleanBCD.substr(i, 8);
      const high = parseInt(byte.substr(0, 4), 2);
      const low = parseInt(byte.substr(4, 4), 2);
      
      if (high > 9 || low > 9) throw new Error('Invalid BCD digit');
      
      const decimal = high * 10 + low;
      result += String.fromCharCode(decimal);
    }
    
    return result;
  } catch (error) {
    throw new Error('Invalid BCD input: ' + error.message);
  }
};
