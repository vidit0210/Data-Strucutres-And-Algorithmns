function diagonalDifference(arr) {
  let col = 0;
  let row = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    col += arr[i][i];
    row += arr[i][len - [i + 1]];
  }
  return Math.abs(col - row);
}
