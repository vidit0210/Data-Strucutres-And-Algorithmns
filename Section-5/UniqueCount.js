function uniqueCount(arr) {
  let Count = 1;
  let first = 0;
  let second = 1;
  if (arr.length === 0) {
    return 0;
  }
  while (second < arr.length) {
    if (arr[first] === arr[second]) {
      second++;
    } else {
      first = second;
      second = second + 1;
      Count++;
    }
  }
  return Count;
}

console.log(uniqueCount([]));
