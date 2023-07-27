export function xorBinaryStrings(binaryStr1, binaryStr2) {
    let result = '';
    for (let i = 0; i < binaryStr1.length; i++) {
      result += binaryStr1[i] === binaryStr2[i] ? '0' : '1';
    }
    return result;
};  