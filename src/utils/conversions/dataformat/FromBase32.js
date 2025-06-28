export const FromBase32 = (base32) => {
  try {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let bits = '';
    let result = '';
    
    // Remove padding and convert to uppercase
    const cleanBase32 = base32.replace(/=/g, '').toUpperCase();
    
    // Convert each character to 5-bit binary
    for (let i = 0; i < cleanBase32.length; i++) {
      const val = alphabet.indexOf(cleanBase32.charAt(i));
      if (val === -1) throw new Error('Invalid Base32 character');
      bits += val.toString(2).padStart(5, '0');
    }
    
    // Convert 8-bit chunks to characters
    for (let i = 0; i < bits.length; i += 8) {
      const byte = bits.substr(i, 8);
      if (byte.length === 8) {
        result += String.fromCharCode(parseInt(byte, 2));
      }
    }
    
    return result;
  } catch (error) {
    throw new Error('Invalid Base32 input: ' + error.message);
  }
};
