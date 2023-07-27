export function rot47Encrypt(text) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
  
      if (charCode >= 33 && charCode <= 126) {
        // For printable ASCII characters
        const encryptedCharCode = (charCode - 33 + 47) % 94 + 33;
        encryptedText += String.fromCharCode(encryptedCharCode);
      } else {
        // For non-printable characters, keep them as they are
        encryptedText += text[i];
      }
    }
    return encryptedText;
};  