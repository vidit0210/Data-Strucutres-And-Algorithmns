function maxSumArray(arr, num) {
    if (num > arr.length) return false;
    let max = -Infinity
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j]
        }
        if (temp > max) max = temp
        console.log(temp, max)

    }
    return max
}
// console.log(maxSumArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))

function maxSumArray2(arr, num) {
    if (num > arr.length) return null
    let tempSum = 0;
    let maxSum = 0;
    for (let i = 0; i < num; i++) maxSum += arr[i]
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i] // remove one from the left add one to the right
        console.log(tempSum)
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum

}
console.log(maxSumArray2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)) //O(n)