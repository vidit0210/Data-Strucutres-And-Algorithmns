function plusMinus(arr) {
  let positive = 0,
    negative = 0,
    neutral = 0;

  let len = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positive++;
    if (arr[i] < 0) negative++;
    if (arr[i] == 0) neutral++;
  }
  console.log(positive / len);
  console.log(negative / len);
  console.log(neutral / len);
}
