export function rot13Encrypt(text) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const charCode = text.charCodeAt(i);
  
      if (char >= 'A' && char <= 'Z') {
        // For uppercase letters
        const encryptedCharCode = ((charCode - 65 + 13) % 26) + 65;
        encryptedText += String.fromCharCode(encryptedCharCode);
      } else if (char >= 'a' && char <= 'z') {
        // For lowercase letters
        const encryptedCharCode = ((charCode - 97 + 13) % 26) + 97;
        encryptedText += String.fromCharCode(encryptedCharCode);
      } else {
        // For non-alphabetic characters, keep them as they are
        encryptedText += char;
      }
    }
    return encryptedText;
};  