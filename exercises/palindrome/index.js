// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
// function palindrome(str) {
//   if(str.split('').reverse().join('') === str){
//     return true
//   }else return false
// }

// Solution 1 - cleaner //
function palindrome(str) {
  const reversed = str.split('').reverse().join('')
  
  return str === reversed
}


//Solution 2 not ideal //
//using the every array method, comparing the last to frist and first to last, not the best way because its doing twice the amount of work 
function palindrome(str) {
    return str.split('').every((char, i)=> {
      return char === str[str.length - i -1]
      //advanced array helper every 
      //every takes in the character and the index i 
    

    })
  }




module.exports = palindrome;
