export const bcdToText = (bcd) => {
    let text = '';
  
    for (let i = 0; i < bcd.length; i += 4) {
      const bcdDigit = parseInt(bcd.substr(i, 4), 2);
      text += bcdDigit.toString();
    }
  
    return text;
};  