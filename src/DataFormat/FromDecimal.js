export const decimalToText = (decimal) => {
    let text = '';
    for (let i = 0; i < decimal.length; i++) {
      const decimalValue = parseInt(decimal[i], 10);
      text += String.fromCharCode(decimalValue);
    }
    return text;
};  