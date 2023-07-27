export const textToOctal = (text) => {
    let octal = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const octalCode = charCode.toString(8);
      octal += octalCode;
    }
    return octal;
};  