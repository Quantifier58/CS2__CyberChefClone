export const ToBase64URLSafe = (text) => {
  try {
    const encoded = btoa(text).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    return encoded;
  } catch (error) {
    throw new Error('Unable to encode to Base64 URL-safe: ' + error.message);
  }
};

export const FromBase64URLSafe = (text) => {
  try {
    const padding = '='.repeat((4 - text.length % 4) % 4);
    const base64 = text.replace(/-/g, '+').replace(/_/g, '/') + padding;
    return atob(base64);
  } catch (error) {
    throw new Error('Invalid Base64 URL-safe input: ' + error.message);
  }
};
