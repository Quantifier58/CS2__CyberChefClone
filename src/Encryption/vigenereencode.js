export function vigenereEncode(plaintext, keyword) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encodedText = '';
  
    const expandedKey = keyword.repeat(Math.ceil(plaintext.length / keyword.length)).slice(0, plaintext.length);
  
    for (let i = 0; i < plaintext.length; i++) {
      const plaintextChar = plaintext[i].toUpperCase();
      const keyChar = expandedKey[i].toUpperCase();
  
      if (alphabet.includes(plaintextChar)) {
        const plaintextPosition = alphabet.indexOf(plaintextChar);
        const keyPosition = alphabet.indexOf(keyChar);
        const encodedPosition = (plaintextPosition + keyPosition) % 26;
  
        const encodedChar = alphabet[encodedPosition];
        encodedText += plaintext[i] === plaintextChar ? encodedChar : encodedChar.toLowerCase();
      } else {
        encodedText += plaintext[i];
      }
    }
  
    return encodedText;
};  