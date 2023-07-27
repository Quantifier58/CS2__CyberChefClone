export const textToHtmlEntity = (text) => {
    const tempElement = document.createElement('div');
    tempElement.innerText = text;
    return tempElement.innerHTML;
};
  