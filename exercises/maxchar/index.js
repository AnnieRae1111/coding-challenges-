// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxCharacter = '';

  //for each character of the sring, if we haven't seen the characater and index char, then that value  = 1
  //else if we do have that character at index char, add one to it
  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  console.log(charMap, 'character map');

  for (let char in charMap) {
    //for in to loop through an object
    //for each character in charmap
    if (charMap[char] > max) {
      //if the character at that index ([char]) is great than the max value ,
      //that new character (charMap[char]) is now the max
      max = charMap[char];
      maxCharacter = char;
    }
  }
  console.log(charMap);

  return maxCharacter;
}

module.exports = maxChar;

console.log(maxChar('hello there!'));
