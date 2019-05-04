// Write a function called Sorted Zero which returns,Takes in Sortes pair of integer and finds the first sum where the sum is zero

//Naive Solution -- O(n^2)

function sum_zero_naive(arr) {
    arr = arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == 0) return [arr[i], arr[j]]
        }
    }
    return undefined
}

// console.log(sum_zero_naive([-3, -2, -1, 0, 1, 2, 3]))

function sumZero(arr) {
    arr = arr.sort((a, b) => a - b)
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        sum = arr[left] + arr[right]
        if (sum === 0) return [arr[left], arr[right]]
        if (sum > 0) right--
        else left++

    }
    return undefined
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))