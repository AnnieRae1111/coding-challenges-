//Given 2 arrays, create a funcion that let's the user know whether these two arrays contain any common items

//returns true or false

const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['a', 'e', 'f', 'g'];

//SOLUTOIN 1:
//O(a*b)-time
//O(1)-space complexity
// function commonItem(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] === array2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

//questions to ask:
//is time complexity or space compleixity more important
//will the array be very large?
//O(a*b)
//want to avoid nested forloops becuase not great time complexity
//this a solution but not the best one
//solution above is the brute force solution

//use a hashtable or javascript object to avoid using forloop

//Solution 3
//O(a + b)-time complexity
//O(a)- space complexity
//this is faster in terms of time but heavier in terms of space complexity
//this is good to talk about during interviews

function commonItem(arr1, arr2) {
  //create hashtable of arr1
  //compare the properties of hashtable to index of arr2
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  console.log(map, 'map');
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      console.log(true);
      //return true
    }
  }
  console.log(false);
  // return false;
}

commonItem(array1, array2);

//EVEN BETTER SOLUTION:
//using .some() method
//using built in js methods
//more readable and concise
//this is good if readability is more important

function commonItems3(array1, array2) {
  return array1.some((item) => array2.includes(item));
}
