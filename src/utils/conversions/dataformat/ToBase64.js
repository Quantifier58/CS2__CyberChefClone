export const ToBase64 = (text) => {
  try {
    return btoa(text);
  } catch (error) {
    throw new Error('Unable to encode to Base64: ' + error.message);
  }
};
