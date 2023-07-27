export const decimalToBcd = (number) => {
    let bcd = '';
  
    while (number > 0) {
      const digit = number % 10;
      const binaryDigit = digit.toString(2).padStart(4, '0');
      bcd = binaryDigit + bcd;
      number = Math.floor(number / 10);
    }
  
    if (bcd === '') {
      bcd = '0000';
    }
  
    return bcd;
};
  