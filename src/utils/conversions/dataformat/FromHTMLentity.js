export const FromHTMLentity = (html) => {
  const entityMap = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&nbsp;': ' ',
    '&copy;': '©',
    '&reg;': '®',
    '&trade;': '™'
  };
  
  let result = html;
  
  // Replace named entities
  for (const [entity, char] of Object.entries(entityMap)) {
    result = result.replace(new RegExp(entity, 'g'), char);
  }
  
  // Replace numeric entities
  result = result.replace(/&#(\d+);/g, (match, num) => {
    return String.fromCharCode(parseInt(num, 10));
  });
  
  // Replace hex entities
  result = result.replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });
  
  return result;
};
