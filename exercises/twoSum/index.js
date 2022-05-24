// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
let nums = [3, 3, 4, 5, 6];
let target = 6;
//here you're both inner and outer loop start from 0th so in the case [3,2,4] and target 6 it will return [0,0] as 3 + 3 is equal to target, so to take care of same index element not being used twice created a difference of 1 between outer and inner loop

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

console.log(twoSum(nums, target));
