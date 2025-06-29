export const atbashCipher = (text) => {
  return text.replace(/[a-zA-Z]/g, char => {
    if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode(90 - (char.charCodeAt(0) - 65));
    } else {
      return String.fromCharCode(122 - (char.charCodeAt(0) - 97));
    }
  });
};
