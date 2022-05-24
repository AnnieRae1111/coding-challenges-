function lonelyInteger(a) {
  let sorted = a.sort();
  let occursOnce;
  console.log(sorted, 'sorted array');
  for (let i = 0; i < a.length; i++) {
    if (sorted[i] !== sorted[i + 1] && sorted[i] !== sorted[i - 1]) {
      occursOnce = sorted[i];
      console.log(occursOnce, 'this occurs once');
    }
  }
}

let array = [4, 4, 5, 6, 5, 6, 2];

console.log(lonelyInteger(array));

const alternating = (n) => {
  let string = '';
  for (let i = 0; i <= n; i++) {
    i % 2 === 0 ? (string += '+') : (string += '-');
  }
  return string;
};
console.log(alternating(666));
