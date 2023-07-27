export const textToDecimal = (text) => {
    const decimalArray = [];
  
    for (let i = 0; i < text.length; i++) {
      const decimalCode = text.charCodeAt(i);
      decimalArray.push(decimalCode);
    }
  
    return decimalArray;
};
  