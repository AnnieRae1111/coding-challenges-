//subract second value from the first in each sub array and then add them

var number = function (busStops) {
  let difference = [];
  for (let i = 0; i < busStops.length; i++) {
    difference.push(busStops[i][0] - busStops[i][1]);
  }
  return difference.reduce((prev, curr) => prev + curr, 0);
};

//array of bustops
// var number = function (busStops) {
//   let total = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     // console.log(busStops[i][1], 'i at 1');
//     // console.log(busStops[i][0], 'i at 0');
//     total = Math.abs(busStops[i][1] - busStops[i][0]);
//     console.log(total, 'total');
//     sum = total.reduce((prev, curr) => prev + curr, 0);
//     console.log(sum, 'sum');
//   }
// };

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
