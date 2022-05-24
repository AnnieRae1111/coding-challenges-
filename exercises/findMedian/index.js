//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//Input: nums1 = [1,3], nums2 = [2]
//Output: 2.00000
//Explanation: merged array = [1,2,3] and median is 2.

let nums1 = [3];
let nums2 = [-2, -1];

function findMedian(nums1, nums2) {
  let merged = nums1.concat(nums2);
  // for (let i = 0; i < nums1.length; i++) {
  //   merged.push(nums1[i]);
  // }

  // for (let j = 0; j < nums2.length; j++) {
  //   merged.push(nums2[j]);
  // }

  let sorted = merged.sort((a, b) => {
    return a - b;
  });

  console.log(merged, 'sorted merged array');

  let median;

  if (merged.length % 2 !== 0) {
    let middleIndex = Math.floor(merged.length / 2);
    median = merged[middleIndex];
  } else {
    let middleIndex = Math.floor(merged.length / 2);
    median = (merged[middleIndex] + merged[middleIndex - 1]) / 2;
  }

  return median;
}

console.log(findMedian(nums1, nums2));
