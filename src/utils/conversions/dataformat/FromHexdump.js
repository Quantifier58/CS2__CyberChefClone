export const FromHexdump = (hexdump) => {
  try {
    let result = '';
    const lines = hexdump.split('\n');
    
    for (const line of lines) {
      const hexPart = line.split('|')[0];
      const hexBytes = hexPart.match(/[0-9a-fA-F]{2}/g);
      
      if (hexBytes) {
        for (const hexByte of hexBytes) {
          result += String.fromCharCode(parseInt(hexByte, 16));
        }
      }
    }
    
    return result;
  } catch (error) {
    throw new Error('Invalid hexdump input: ' + error.message);
  }
};
