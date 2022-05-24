//use two for loops to solve
//One loop will iterate through each one of the rows (in the big array) and the other one will iterate through each element in the smaller arrays (or the inner arrays).

//funciton accespts a 2D array/ matrix
//matrix : multiple arrays combined into one larger array

function diagonalDifference(matrix) {
  let n = matrix.length;
  let diagonalOne = 0;
  let diagonalTwo = 0;

  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      if (i === j) {
        diagonalOne += matrix[i][j];
      }
      if (i + j === n - 1) {
        //of the sum of the indexes i + j = the length of the array minus 1
        //some of i + j is always 2 in 3 * 3 matrix for the second diagonal
        //if i + j (which is 2 ) === n - 1 (which is also 2 ) that is the second diagonal
        diagonalTwo += matrix[i][j];
      }
    }
  }
  return Math.abs(diagonalOne - diagonalTwo);
}
