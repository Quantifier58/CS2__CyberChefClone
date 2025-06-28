export const ToOctal = (text) => {
  return text.split('').map(char => 
    char.charCodeAt(0).toString(8)
  ).join(' ');
};
