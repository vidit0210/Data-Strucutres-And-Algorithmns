let _ = require("underscore");
function countUniqueValues(arr) {
  arr = arr.sort((a, b) => a - b);
  let i = 0;
  for (j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
console.log(countUniqueValues([1, 5, 5, 5, 6, 6, 7]));
console.log(_.uniq([1, 5, 5, 5, 6, 6, 7]).length);
