export const textToCharcode = (text) => {
    const charCodes = [];
  
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      charCodes.push(charCode);
    }
  
    return charCodes;
};
  