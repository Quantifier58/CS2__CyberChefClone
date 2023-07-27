export function caesarBoxEncrypt(plaintext, key) {
    const cols = key;
    const rows = Math.ceil(plaintext.length / cols);
  
    // Initialize the grid with empty spaces
    const grid = new Array(rows).fill().map(() => new Array(cols).fill(' '));
  
    // Fill the grid with the plaintext
    let charIndex = 0;
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        if (charIndex < plaintext.length) {
          grid[row][col] = plaintext[charIndex++];
        }
      }
    }
  
    // Read the ciphertext from the grid
    let ciphertext = '';
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] !== ' ') {
          ciphertext += grid[row][col];
        }
      }
    }
  
    return ciphertext;
};  