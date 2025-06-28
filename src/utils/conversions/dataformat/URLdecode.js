export const URLdecode = (url) => {
  try {
    return decodeURIComponent(url);
  } catch (error) {
    throw new Error('Invalid URL encoded input: ' + error.message);
  }
};
