function birthdayCakeCandles(ar) {
  ar = ar.sort();
  ar = ar.reverse();
  let count = 1;
  let max = ar[0];
  for (let i = 1; i < length; i++) {
    if (ar[i] === max) {
      count++;
    } else {
      return count;
    }
  }
  return count;
}
