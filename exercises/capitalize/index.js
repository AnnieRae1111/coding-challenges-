// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//Solution 1 // best Solution///

function capitalize(str) {
  let words = [];
  for (let word of str.split(' ')) {
    //splitting the string by a space to get an array of words
    //getting the first index of the word and uppercase it
    //add that to rest of the word, minus the 0 index... slice at index 1
    //push that into the new array and then return that array with join
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}

//Solution 2///
//slightly weaker because you have to hard code always capitalizing the first character

function capitalize(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      //if the letter to the left is a " " add that to the result and uppercase it
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;
