export const toPigLatin = (text) => {
  return text.split(' ').map(word => {
    if (word.length === 0) return word;
    
    const vowels = 'aeiouAEIOU';
    if (vowels.includes(word[0])) {
      return word + 'way';
    } else {
      let consonantCluster = '';
      let i = 0;
      while (i < word.length && !vowels.includes(word[i])) {
        consonantCluster += word[i];
        i++;
      }
      return word.slice(i) + consonantCluster + 'ay';
    }
  }).join(' ');
};

export const fromPigLatin = (text) => {
  return text.split(' ').map(word => {
    if (word.endsWith('way')) {
      return word.slice(0, -3);
    } else if (word.endsWith('ay')) {
      const root = word.slice(0, -2);
      const lastConsonant = root.slice(-1);
      return lastConsonant + root.slice(0, -1);
    }
    return word;
  }).join(' ');
};
