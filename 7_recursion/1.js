// first Excercis On Recursion

function countDown(num) {
    for (let i = num; i > 0; i--) {
        console.log(i)
    }
    console.log('All done')
}
// countDown(5)

function countDownRecursion(num) {
    if (num <= 0) {
        console.log('Recursion done')
        return
    }
    console.log(num)
    num--;
    countDownRecursion(num)

}

console.log(countDownRecursion(5))

function sumRange(num) {
    if (num == 1) return 1;
    return num + sumRange(num - 1)
}
console.log(sumRange(3))

//Factorial Recusrion

function Factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total
}
console.log(Factorial(4))

function FactorialRecursion(n) {
    if (n == 1) return 1
    console.log(n)
    return n * FactorialRecursion(n - 1)
}
console.log(FactorialRecursion(4))

function collectOddValues(arr) {
    let result = []

    if (arr.length == 0) return result;
    if (arr[0] % 2 !== 0) result.push(arr[0])
    result = result.concat(collectOddValues(arr.slice(1)))
    return result;

}
console.log(collectOddValues([1, 2, 3, 4, 5, 6]))