// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

//Example
let n = 7;
let ar = [1, 2, 1, 2, 1, 3, 2];

// function socks(n, ar) {
//   console.log(ar.sort());
//   let pairs = 0;
//   for (let i = 0; i < ar.length && i < n; i += 2) {
//     if (ar[i] === ar[i + 1]) {
//       pairs++;
//     }
//   }
//   return console.log(pairs);
// }

function socks(n, ar) {
  let pairs = 0;
  let socks = {};
  for (let element of ar) {
    socks[element] = socks[element] + 1 || 1;
    if (socks[element] % 2 === 0) {
      pairs += 1;
    }
  }
  console.log(pairs, 'pairs');
}

socks(7, [1, 2, 1, 2, 1, 3, 2]);
