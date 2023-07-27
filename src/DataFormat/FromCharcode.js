export const charcodeToText = (charCodes) => {
    let text = "";
  
    for (let i = 0; i < charCodes.length; i++) {
      const char = String.fromCharCode(charCodes[i]);
      text += char;
    }
  
    return text;
};
  