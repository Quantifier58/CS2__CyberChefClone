export const frommorsecode = (morse) => {
  const morseMap = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
    '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
    '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
    '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
    '-.--': 'Y', '--..': 'Z', '-----': '0', '.----': '1', '..---': '2',
    '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7',
    '---..': '8', '----.': '9', '/': ' ', '.-.-.-': '.', '--..--': ',',
    '..--..': '?', '.----.': "'", '-.-.--': '!', '-..-.': '/', '-.--.' : '(',
    '-.--.-': ')', '.-...': '&', '---...': ':', '-.-.-.': ';', '-...-': '=',
    '.-.-.': '+', '-....-': '-', '..--.-': '_', '.-..-.': '"', '...-..-': '$',
    '.--.-.' : '@'
  };
  
  try {
    return morse.split(' ').map(code => {
      return morseMap[code] || code;
    }).join('');
  } catch (error) {
    throw new Error('Invalid Morse code input: ' + error.message);
  }
};
