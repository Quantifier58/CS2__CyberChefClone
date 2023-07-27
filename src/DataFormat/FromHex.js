export const hexToText = (hex) => {
    let text = '';
    for (let i = 0; i < hex.length; i += 2) {
      const byte = parseInt(hex.substr(i, 2), 16);
      text += String.fromCharCode(byte);
    }
    return text;
};