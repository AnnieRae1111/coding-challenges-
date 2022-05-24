let ratings = [4, 2, 5, 1];
function minBias(ratings) {
  ratings.sort();
  let pair1 = [];
  let pair2 = [];
  for (let i = 0; i < ratings.length; i++) {
    let difference = Math.abs(ratings[i] - ratings[i + 1]);
    pair1.push(difference, 'difference');
    console.log(pair1, 'pair1');
  }
}

minBias(ratings);
