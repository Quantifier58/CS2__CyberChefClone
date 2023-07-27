export const base64ToText = (base64) => {
    const base64Charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let decodedText = '';

    base64 = base64.replace(/[^A-Za-z0-9+/=]/g, '');

    let binaryString = '';
    for (let i = 0; i < base64.length; i++) {
      const char = base64[i];
      const index = base64Charset.indexOf(char);
      if (index !== -1) {
        const binary = index.toString(2).padStart(6, '0');
        binaryString += binary;
      }
    }

    for (let i = 0; i < binaryString.length; i += 8) {
      const byte = binaryString.substr(i, 8);
      const charCode = parseInt(byte, 2);
      decodedText += String.fromCharCode(charCode);
    }

    return decodedText;
};