export const FromBase64 = (base64) => {
  try {
    return atob(base64);
  } catch (error) {
    throw new Error('Invalid Base64 input: ' + error.message);
  }
};
