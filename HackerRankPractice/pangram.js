// function pangrams(s) {
//   let alphabet = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'g',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z',
//   ];
//   let occurance = {};
//   let pangram;
//   for (let char of s.toLowerCase()) {
//     if (occurance[char]) {
//       occurance[char]++;
//     } else {
//       occurance[char] = 1;
//     }
//   }
//   console.log(occurance, 'occurance');
//   for (let char in alphabet) {
//     if (occurance[char] === 0) {
//       pangram = 'no pangram';
//     } else if (occurance[char] > 0) {
//       pangram = 'pangram';
//     }
//   }
//   console.log(pangram);
// }

// // function pangrams(s) {
// //   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// //   let lowercase = s.split('').join();

// //   console.log(lowercase, 'lowercase');
// //   if (lowercase.includes(alphabet) === true) {
// //     console.log('pangram');
// //   } else {
// //     console.log('no pangram');
// //   }
// // }

// function pangrams(s) {
//   let alphabet = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'g',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z',
//   ];
//   let occurance = {};
//   let pangram;
//   for (let char of s.toLowerCase()) {
//     if (occurance[char]) {
//       occurance[char]++;
//     } else {
//       occurance[char] = 1;
//     }
//   }
//   console.log(occurance, 'occurance');
//   for (let char in occurance) {
//     if (s[char] === 0) {
//       pangram = 'no pangram';
//     } else if (occurance[char] > 0) {
//       pangram = 'pangram';
//     }
//   }
//   console.log(pangram);
// }

function pangrams(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let regex = /\s/g;
  //looks for all white spaces in the string
  let lowercase = s.toLowerCase().replace(regex, '');
  //replace all white spaces with nothing

  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) {
      //index of returns -1 if it cant find an index of that letter
      return 'not pangram';
    }
  }

  return 'pangram';
}

pangrams(' promptly judged antique ivory buckles for the prize');
