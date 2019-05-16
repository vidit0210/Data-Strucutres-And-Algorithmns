function power(num, exponent) {
    if (exponent == 0) return 1;
    return num * power(num, exponent - 1)
}
console.log('power', power(2, 3))

function factorial(num) {
    if (num == 1) return 1;
    return num * factorial(num - 1)
}
console.log('factorial', factorial(4))

function productOfArray(arr) {
    if (arr.length == 0) return 1;
    return arr[0] * productOfArray(arr.slice(1))
}
console.log(productOfArray([1, 2, 3]))

function recursiveRange(num) {
    if (num == 1) return 1;
    return num + recursiveRange(num - 1)
}
console.log('RecursiveRange', recursiveRange(10))

function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}