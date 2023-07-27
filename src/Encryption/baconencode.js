export function baconCipherEncode(plaintext) {
    const baconCipher = {
      A: 'AAAAA', B: 'AAAAB', C: 'AAABA', D: 'AAABB', E: 'AABAA', F: 'AABAB',
      G: 'AABBA', H: 'AABBB', I: 'ABAAA', J: 'ABAAA', K: 'ABAAB', L: 'ABABA',
      M: 'ABABB', N: 'AABBA', O: 'AABBB', P: 'ABAAA', Q: 'ABAAB', R: 'ABABA',
      S: 'ABABB', T: 'ABBAA', U: 'ABBAB', V: 'ABBBA', W: 'BAAAA', X: 'BAAAB',
      Y: 'BAABA', Z: 'BAABB'
    };
  
    const plaintextUpper = plaintext.toUpperCase();
    let encodedText = '';
  
    for (let i = 0; i < plaintextUpper.length; i++) {
      const char = plaintextUpper[i];
      const encodedChar = baconCipher[char] || char;
      encodedText += encodedChar;
    }
  
    return encodedText;
};  