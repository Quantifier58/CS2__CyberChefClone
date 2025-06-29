export const toNATO = (text) => {
  const natoMap = {
    'A': 'Alfa', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo',
    'F': 'Foxtrot', 'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliett',
    'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November', 'O': 'Oscar',
    'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango',
    'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'X-ray', 'Y': 'Yankee',
    'Z': 'Zulu', ' ': '/'
  };
  
  return text.toUpperCase().split('').map(char => natoMap[char] || char).join(' ');
};

export const fromNATO = (text) => {
  const reverseNatoMap = {
    'ALFA': 'A', 'BRAVO': 'B', 'CHARLIE': 'C', 'DELTA': 'D', 'ECHO': 'E',
    'FOXTROT': 'F', 'GOLF': 'G', 'HOTEL': 'H', 'INDIA': 'I', 'JULIETT': 'J',
    'KILO': 'K', 'LIMA': 'L', 'MIKE': 'M', 'NOVEMBER': 'N', 'OSCAR': 'O',
    'PAPA': 'P', 'QUEBEC': 'Q', 'ROMEO': 'R', 'SIERRA': 'S', 'TANGO': 'T',
    'UNIFORM': 'U', 'VICTOR': 'V', 'WHISKEY': 'W', 'X-RAY': 'X', 'YANKEE': 'Y',
    'ZULU': 'Z', '/': ' '
  };
  
  return text.toUpperCase().split(' ').map(word => reverseNatoMap[word] || word).join('');
};
