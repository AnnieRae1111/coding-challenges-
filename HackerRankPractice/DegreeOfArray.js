let inputData = [1, 3, 2, 2, 3, 3, 3, 4, 4, 4, 4];

function writeOutput(inputData) {
  // console.log(inputData, 'is this a string?');
  // let inputToString = inputData.toString();
  // // console.log(inputToString, 'string?');
  let map = {};
  let max = 0;
  let maxCharacter = '';
  for (let char of inputData) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }
  for (let char in map) {
    if (map[char] > max) {
      max = map[char];
      maxCharacter = char;
    }
  }
  console.log(map, 'map');
  console.log(Object.keys(map), 'keys');
  console.log(maxCharacter, 'max character');

  let keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    for (let number in map) {
      if (map[number] === parseInt(keys[i])) {
        return `${map[number]} is the frequency`;
      }
    }
    // if (parseInt(keys[i]) === parseInt(maxCharacter)) {
    //   return console.log(keys[i], 'frequency');
    // }
  }
}

console.log(writeOutput(inputData));
