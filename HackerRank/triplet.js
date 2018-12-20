function compareTriplets(a, b) {
  let result = [];
  let a_sum = 0;
  let b_sum = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      a_sum++;
    } else if (b[i] > a[i]) {
      b_sum++;
    } else {
      continue;
    }
  }
  result.push(a_sum);
  result.push(b_sum);
  return result;
}
console.log(compareTriplets[([5, 6, 7], [3, 6, 10])]);
