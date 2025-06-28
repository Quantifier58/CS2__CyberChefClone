export const ToBase32 = (text) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  let bits = '';
  let result = '';
  
  // Convert each character to 8-bit binary
  for (let i = 0; i < text.length; i++) {
    bits += text.charCodeAt(i).toString(2).padStart(8, '0');
  }
  
  // Convert 5-bit chunks to Base32
  for (let i = 0; i < bits.length; i += 5) {
    const chunk = bits.substr(i, 5).padEnd(5, '0');
    result += alphabet[parseInt(chunk, 2)];
  }
  
  // Add padding
  while (result.length % 8 !== 0) {
    result += '=';
  }
  
  return result;
};
