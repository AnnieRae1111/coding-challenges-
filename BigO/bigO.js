O(1); //means constant time :

function printFirst(arr) {
  console.log(arr[0]);
}

//print first item
//single operation , takes a constant amount of time
//doesn't matter how large the array is. always printing
//the first element
//size of input doesn't matter
//doesnt matter if we are doing it more than once. still O(1)

O(n); // where n represents size of input

function printElements(numbers, letters) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }

  for (let j = 0; i < letters.length; i++) {
    console.log(numbers[j]);
  }
}

//this function takes longer the bigger the input data is
//grows linearly
//if there were two parementers you are looping through would still
//be O(n)
//even though there are two loops it still is 0(n)

O(n2);
//nested loop
//three nest loops = O(n3)

O(a + b);

//logarithmic curve:
//more effecient than linear time
//reduce work by half with every step

//Binary Search : runs in logarythmic time
//look at middle item first and decide if that is smaller or larger
//narrow down search by half
//narrow down by half again
//narrow by half until you get to the number

//logarithmic time is more scalable than linear time

//Exponential Growth: opposite of logarithmic
// Grows exponentially, not scaleable
//not good!

//Growth Rates:
//Constant: O(1)
//Logarithmic : O(log n)
// Linear : O(n)
// Quadratic: O(n^2)
//Exponential: O(2^n)

//-------> Space Complexity:<-------//
//figured out simliarly to time complexity
//impt if you need alot of space/ scaleability

//---->ARRAYS<----//
//arrays are static
//o(n) to print an index of array
//fast
//have to alocate a large array
//copy old array and make larger array : O(n)

//array methods:
//indexOf: O(1)
//insert(): O(n)
//delete(): O(n)

//Dynamic Array: automatically grows when we need more space /insert more info than there is space for

//---->Linked List<----//
//most commonly used
//solve problems of arrays
//
