function plusMinus(arr) {
  let positive = [];
  let negative = [];
  let zero = [];
  for (let i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) === 1) {
      positive.push(arr[i]);
    } else if (Math.sign(arr[i]) === -1) {
      negative.push(arr[i]);
    } else if (arr[i] === 0) {
      zero.push(arr[i]);
    }
  }

  let positiveRatio = positive.length / arr.length;
  let negativeRatio = negative.length / arr.length;
  let zeroRatio = zero.length / arr.length;
  console.log(parseFloat(positiveRatio).toFixed(6));
  console.log(parseFloat(negativeRatio).toFixed(6), 'negative ratio');
  console.log(parseFloat(zeroRatio).toFixed(6), 'zero ratio');
}

// let test = [2, 3, 4, -5, 0, -6];

// console.log(plusMinus(test));

//// MIN MAX///

function plusMinus(arr) {
  let positive = [];
  let negative = [];
  let zero = [];
  for (let i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) === 1) {
      positive.push(arr[i]);
    } else if (Math.sign(arr[i] === -1)) {
      negative.push(arr[i]);
    } else if (arr[i] === 0) {
      zero.push(arr[i]);
    }

    let positiveRatio = positive.length / arr.length;
    let negativeRatio = negative.length / arr.length;
    let zeroRatio = zero.length / arr.lenth;

    console.log();
  }
}

//Min Max//

let arr = [1, 3, 5, 7, 9];

function miniMaxSum(arr) {
  arr.sort;
  let min = arr[0] + arr[1] + arr[2] + arr[3];
  let max = arr[1] + arr[2] + arr[3] + arr[4];
  console.log(`${min} ${max}`);
}

miniMaxSum(arr);
