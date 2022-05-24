//there are two n-element arrays of integers, A and B. Permute them into some A' and B' such that the relation of
//A[i] + B[i] >= k
let A = [2, 3, 4];
let B = [7, 8, 9];
let k = 6;

function twoArrays(k, A, B) {
  A.sort();
  B.sort().reverse();
  let no = [];
  let yes = [];
  let answer;

  for (let number of A) {
    for (let i of B) {
      if (A[number] + B[i] >= k) {
        yes.push('yes');
      } else if (A[number] + B[i] < k) {
        no.push('no');
        // console.log(no, 'no array');
      }
    }
  }

  if (no.length > 0) {
    // console.log('no');
    answer = 'NO';
  } else {
    // console.log('yes');
    answer = 'YES';
  }
  return answer;
}

twoArrays(k, A, B);
