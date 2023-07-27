export const hexdumpToText = (hexdump) => {
    const lines = hexdump.trim().split('\n');
    let text = '';
  
    lines.forEach((line) => {
      const hexPart = line.trim().split(/\s+/).slice(1, 17); // Take only the hex part
      hexPart.forEach((hex) => {
        const asciiCode = parseInt(hex, 16);
        if (!isNaN(asciiCode)) {
          text += String.fromCharCode(asciiCode);
        }
      });
    });
  
    return text;
};
  