export const textToBase32 = (text) => {
    const base32Charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let binaryString = '';
    let padding = '';
  
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i).toString(2);
      binaryString += '0'.repeat(8 - charCode.length) + charCode;
    }

    const remainder = binaryString.length % 5;
    if (remainder !== 0) {
      padding = '0'.repeat(5 - remainder);
      binaryString += padding;
    }

    let base32Text = '';
    for (let i = 0; i < binaryString.length; i += 5) {
      const group = binaryString.substr(i, 5);
      const index = parseInt(group, 2);
      base32Text += base32Charset[index];
    }

    base32Text += '='.repeat(padding.length / 5);
    return base32Text;
};