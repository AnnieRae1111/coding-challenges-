// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

//function returns the number of ways the bar can be divided
//how many segments it can be divided into

//Example
s = [2, 2, 1, 3, 2];
d = 4;
m = 2;

function birthday(s, d, m) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    let sub_array = s.slice(i, i + m);
    //slicing the array at the index of i up until i + months
    let sum = sub_array.reduce((prev, curr) => prev + curr);
    if (sum === d) counter++;
  }
  return console.log(counter);
}

birthday(s, d, m);
