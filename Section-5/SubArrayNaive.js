function sumOfSubArray(arr, num) {
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i] + arr[j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
console.log(sumOfSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
