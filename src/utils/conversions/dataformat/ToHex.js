export const ToHex = (text) => {
  return text.split('').map(char => 
    char.charCodeAt(0).toString(16).padStart(2, '0').toUpperCase()
  ).join(' ');
};
