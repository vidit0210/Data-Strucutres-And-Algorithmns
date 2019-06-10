//A bubble Sort Algorithmn
//

const swap = (arr, index1, index2) => {
  return ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
};
function BubbleSort(arr) {
  let noSwaps;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // let temp = arr[i];
        // arr[i] = arr[j];
        // arr[j] = temp;
        swap(arr, i, j);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(BubbleSort([4, 2, 7, 1, 9, 6, 3]));
