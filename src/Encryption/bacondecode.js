export function baconCipherDecode(encodedText) {
  const baconCipher = {
    'AAAAA': 'A', 'AAAAB': 'B', 'AAABA': 'C', 'AAABB': 'D', 'AABAA': 'E', 'AABAB': 'F',
    'AABBA': 'G', 'AABBB': 'H', 'ABAAA': 'I/J', 'ABAAB': 'K', 'ABABA': 'L', 'ABABB': 'M',
    'BAAAA': 'W', 'BAAAB': 'X', 'BAABA': 'Y', 'BAABB': 'Z'
  };

  const chunkSize = 5;
  let decodedText = '';

  for (let i = 0; i < encodedText.length; i += chunkSize) {
    const chunk = encodedText.slice(i, i + chunkSize);
    const decodedChar = baconCipher[chunk] || ' ';
    decodedText += decodedChar;
  }

  return decodedText;
};
