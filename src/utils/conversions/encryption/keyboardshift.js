export const keyboardShiftRight = (text) => {
  const shiftMap = {
    'q': 'w', 'w': 'e', 'e': 'r', 'r': 't', 't': 'y', 'y': 'u', 'u': 'i', 'i': 'o', 'o': 'p', 'p': '[',
    'a': 's', 's': 'd', 'd': 'f', 'f': 'g', 'g': 'h', 'h': 'j', 'j': 'k', 'k': 'l', 'l': ';',
    'z': 'x', 'x': 'c', 'c': 'v', 'v': 'b', 'b': 'n', 'n': 'm', 'm': ','
  };
  
  return text.toLowerCase().split('').map(char => shiftMap[char] || char).join('');
};

export const keyboardShiftLeft = (text) => {
  const shiftMap = {
    'w': 'q', 'e': 'w', 'r': 'e', 't': 'r', 'y': 't', 'u': 'y', 'i': 'u', 'o': 'i', 'p': 'o', '[': 'p',
    's': 'a', 'd': 's', 'f': 'd', 'g': 'f', 'h': 'g', 'j': 'h', 'k': 'j', 'l': 'k', ';': 'l',
    'x': 'z', 'c': 'x', 'v': 'c', 'b': 'v', 'n': 'b', 'm': 'n', ',': 'm'
  };
  
  return text.toLowerCase().split('').map(char => shiftMap[char] || char).join('');
};
