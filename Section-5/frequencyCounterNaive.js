function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  //O(n)
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); //O(n)
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}
//Total - O(n^2);
console.log(same([1, 2, 3, 4], [1, 4, 9]));
