export const binaryToText = (binary) => {
    let text = '';
    for (let i = 0; i < binary.length; i += 8) {
      const binaryChunk = binary.slice(i, i + 8);
      const charCode = parseInt(binaryChunk, 2);
      text += String.fromCharCode(charCode);
    }
    return text;
};  