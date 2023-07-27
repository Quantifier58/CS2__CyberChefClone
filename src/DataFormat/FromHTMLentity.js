export const htmlEntityToText = (htmlEntity) => {
    const tempElement = document.createElement('textarea');
    tempElement.innerHTML = htmlEntity;
    return tempElement.value;
};
  