export const rot47 = (text) => {
  return text.replace(/[!-~]/g, char => {
    return String.fromCharCode(33 + ((char.charCodeAt(0) - 33 + 47) % 94));
  });
};
