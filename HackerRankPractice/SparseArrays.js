let strings = ['ab', 'ab', 'abc'];
let queries = ['ab', 'abc', 'bc'];

// function matchingStrings(strings, queries) {
//   let matching = [];
//   let notMatching = [];
//   for (let i = 0; i < strings.length; i++) {
//     for (let j = 0; j < queries.length; j++) {
//       if (strings[i] === queries[j]) {
//         matching.push((strings[i], queries[j]));
//         console.log(matching, 'matching');

//         // } else if (queries[j] !== strings[i]) {
//         //   notMatching.push(queries[j]);
//         //   console.log(notMatching, 'not matching');
//         // // }
//         // console.log(queries[j], 'strings and queries');
//       } else {
//         notMatching.push(queries[j]);
//         console.log(notMatching, 'not matching');
//       }
//     }
//   }
// }

function matchingStrings(strings, queries) {
  const occurrences = {};
  const result = new Array(queries.length);
  strings.forEach((str) => {
    if (occurrences[str]) {
      occurrences[str]++;
    } else {
      occurrences[str] = 1;
    }
    console.log(occurrences, 'occurences map');
  });
  queries.forEach((q, index) => {
    if (occurrences[q]) {
      result[index] = occurrences[q];
    } else {
      result[index] = 0;
    }
  });
  console.log(result);
}

matchingStrings(strings, queries);
