export const ToHTMLentity = (text) => {
  const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    ' ': '&nbsp;'
  };
  
  return text.replace(/[&<>"' ]/g, char => entityMap[char] || char);
};
