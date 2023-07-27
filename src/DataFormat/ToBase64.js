export const textToBase64 = (text) => {
    const base64Charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    let encodedText = '';

    let binaryString = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i).toString(2);
      binaryString += '0'.repeat(8 - charCode.length) + charCode;
    }

    const padding = binaryString.length % 6 === 2 ? '==' : binaryString.length % 6 === 4 ? '=' : '';
    binaryString += '0'.repeat(6 - binaryString.length % 6);
    for (let i = 0; i < binaryString.length; i += 6) {
      const group = binaryString.substr(i, 6);
      const index = parseInt(group, 2);
      encodedText += base64Charset[index];
    }

    encodedText += padding;

    return encodedText;
};