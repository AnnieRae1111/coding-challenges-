// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//SOLUTION 1///
function reverse(str) {
  return str.split('').reverse().join('')
}



//SOLUTION 2//
function reverse(str) {
  let reversed = ""
  for(let character of str){
    reversed = character + reversed
  }
  return reversed
}

//Solution 3//
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev , '')
  //reduce takes all values in array and reduces to one value 
  //reduce takes arrow function, and starting argument = '' in this case 
  //function runs one time for every element in the array

  //reversed is our reversed string 
  
  }

module.exports = reverse;
