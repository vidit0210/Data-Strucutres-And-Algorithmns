function averagePair(arr, avg) {
  let num = avg * 2;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === num) {
      return true;
    }

    if (arr[left] + arr[right] > num) {
      right--;
      //console.log(right);
    } else {
      left++;
      //console.log(left);
    }
  }
  return false;
}
console.log(averagePair([1, 2, 3], 2.5));
