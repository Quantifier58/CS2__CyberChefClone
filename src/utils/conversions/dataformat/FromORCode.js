export const fromQRText = (qrText) => {
  // Extract original text from QR code representation
  const match = qrText.match(/QR Code Data: (.+)/);
  return match ? match[1] : qrText;
};
