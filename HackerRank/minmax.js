function miniMaxSum(arr) {
  arr = arr.sort();
  let min = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
  }
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    max += arr[i];
  }
  console.log(min);
  console.log(max);
}
