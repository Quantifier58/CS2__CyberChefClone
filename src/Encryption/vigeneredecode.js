export function vigenereDecode(ciphertext, keyword) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let decodedText = '';
  
    const expandedKey = keyword.repeat(Math.ceil(ciphertext.length / keyword.length)).slice(0, ciphertext.length);
  
    for (let i = 0; i < ciphertext.length; i++) {
      const ciphertextChar = ciphertext[i].toUpperCase();
      const keyChar = expandedKey[i].toUpperCase();
  
      if (alphabet.includes(ciphertextChar)) {
        const ciphertextPosition = alphabet.indexOf(ciphertextChar);
        const keyPosition = alphabet.indexOf(keyChar);
        const decodedPosition = (ciphertextPosition - keyPosition + 26) % 26;
  
        const decodedChar = alphabet[decodedPosition];
        decodedText += ciphertext[i] === ciphertextChar ? decodedChar : decodedChar.toLowerCase();
      } else {
        decodedText += ciphertext[i];
      }
    }
  
    return decodedText;
};  