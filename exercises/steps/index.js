  // --- Directions
  // Write a function that accepts a positive number N.
  // The function should console log a step shape
  // with N levels using the # character.  Make sure the
  // step has spaces on the right hand side!
  // --- Examples
  //   steps(2)
  //       '# '
  //       '##'
  //   steps(3)
  //       '#  '
  //       '## '
  //       '###'
  //   steps(4)
  //       '#   '
  //       '##  '
  //       '### '
  //       '####'

const { startSession } = require("mongoose")

  // function steps(n) {
  //   for (let row = 0; row < n; row++) {
  //     let stair = '';

  //     for (let column = 0; column < n; column++) {
  //       if (column <= row) {
  //         stair += '#';
  //       } else {
  //         stair += ' ';
  //       }
  //     }
  //     console.log(stair);
  //   }
  // }



  //Alternate recurisve solution// 

  //only do this solution if you are specificially asked to do it recursively 
  function steps(n, row = 0, stair = '') {
    if(n === row){
      return
    }
    if(n === stair.length){
      //if we hit the end of a row 
      console.log(stair)
      return steps(n, row + 1)
    }
    
    if(stair.length <= row){
      stair += "#"
    }else{
      stair += " "
    }
    steps(n, row, stair)
  }

  //RECURSION: 
  //step 1: identify base case with recurisve function 
  //put base case first 
    //if(n === 0){
    //  return
  // }
  //step 2 call the function in itself with (n -1) or subract some type of number 

  function printNumber(n, dec = 1){
    //dec = decrement. default value of 1 
    //if dec is default 1, the code will always work. 
    //need reasonable default to safely handle recursion
    //when we call function again the arguments have to chagen. for Ex argument was n, now it needs to be n -1
    if(n === 0){
      return 
    }
    console.log(n)
    printNumber(n-dec)
  }

  printNumber(10)

  module.exports = steps;
