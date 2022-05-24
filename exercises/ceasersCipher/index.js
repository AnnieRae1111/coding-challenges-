function ceaserCipher(s, k) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newString = '';
  for (let i = 0; i < s.length; i++) {
    return (newString += alphabet[i + k]);
  }
}

console.log(ceaserCipher('Hello are you there', 3));
