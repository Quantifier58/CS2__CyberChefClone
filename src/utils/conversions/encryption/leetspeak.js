export const toLeetspeak = (text) => {
  const leetMap = {
    'A': '4', 'E': '3', 'I': '1', 'O': '0', 'S': '5',
    'T': '7', 'B': '8', 'G': '6', 'L': '1', 'Z': '2'
  };
  
  return text.toUpperCase().split('').map(char => leetMap[char] || char).join('');
};

export const fromLeetspeak = (text) => {
  const reverseLeetMap = {
    '4': 'A', '3': 'E', '1': 'I', '0': 'O', '5': 'S',
    '7': 'T', '8': 'B', '6': 'G', '2': 'Z'
  };
  
  return text.split('').map(char => reverseLeetMap[char] || char).join('');
};
