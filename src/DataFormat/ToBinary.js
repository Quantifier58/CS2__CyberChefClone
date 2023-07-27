export const textToBinary = (text) => {
    let binary = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const binaryCode = charCode.toString(2).padStart(8, '0');
      binary += binaryCode;
    }
    return binary;
};  