export const octalToText = (octal) => {
    let text = '';
    let octalCode = '';
  
    for (let i = 0; i < octal.length; i++) {
      const char = octal.charAt(i);
      if (char >= '0' && char <= '7') {
        octalCode += char;
        if (octalCode.length === 3) {
          const charCode = parseInt(octalCode, 8);
          text += String.fromCharCode(charCode);
          octalCode = '';
        }
      } else {
        // Ignore non-octal characters
        octalCode = '';
      }
    }
  
    return text;
};  