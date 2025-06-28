export const ToBinary = (text) => {
  return text.split('').map(char => 
    char.charCodeAt(0).toString(2).padStart(8, '0')
  ).join(' ');
};
