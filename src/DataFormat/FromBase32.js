export const base32ToText = (base32) => {
    const base32Charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let binaryString = '';
    let paddingCount = 0;

    base32 = base32.replace(/=/g, '');

    for (let i = 0; i < base32.length; i++) {
      const index = base32Charset.indexOf(base32[i]);
      const binary = index.toString(2).padStart(5, '0');
      binaryString += binary;
    }

    const lastChar = binaryString[binaryString.length - 1];
    if (lastChar === '0') {
      while (binaryString[binaryString.length - 1] === '0') {
        binaryString = binaryString.slice(0, -1);
        paddingCount++;
      }
    }

    let text = '';
    for (let i = 0; i < binaryString.length; i += 8) {
      const byte = binaryString.substr(i, 8);
      const charCode = parseInt(byte, 2);
      text += String.fromCharCode(charCode);
    }

    text += '='.repeat(paddingCount);

    return text;
};