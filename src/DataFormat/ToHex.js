export const textToHex = (text) => {
    let hex = '';
    for (let i = 0; i < text.length; i++) {
      hex += text.charCodeAt(i).toString(16);
    }
    return hex;
};