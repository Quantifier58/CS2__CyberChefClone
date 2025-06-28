export const ToCharcode = (text) => {
  return text.split('').map(char => char.charCodeAt(0)).join(' ');
};
