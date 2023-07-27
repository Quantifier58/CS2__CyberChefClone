export const textToHexDump = (text) => {
  let hexDump = '';
  for (let i = 0; i < text.length; i++) {
    const byte = text.charCodeAt(i).toString(16);
    hexDump += ('0' + byte).slice(-2) + ' ';
  }
  return hexDump.trim();
};