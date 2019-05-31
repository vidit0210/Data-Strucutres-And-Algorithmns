//Base Case Where Recursion Ends
//Different Input

function countDown(num) {
  if (num <= 0) return "All Done";
  console.log(num);
  return countDown(num - 1);
}

//Summ of N Numbers
function sumRange(num) {
  if (num <= 0) return 0;
  return num + sumRang(num - 1);
}

// console.log(sumRange(100));

function Factorial(num) {
  if (num == 1) return num;
  return num * Factorial(num - 1);
}

// console.log(Factorial(5));

function power(num, value) {
  if (value == 0) return 1;
  return num * power(num, value - 1);
}
// console.log(power(2, 5));

//Collect Odd values
function collectOddValues(arr) {
  let newArr = [];
  if (arr.length == 0) return;
  if (!(arr[0] % 2 == 0)) newArr.push(arr[0]);
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

// console.log(collectOddValues([2, 3, 4, 5, 6, 7]));

function productOfArray(arr) {
  if (arr.length == 0) return 1;
  arr = arr[0] * productOfArray(arr.slice(1));
  return arr;
}

function fib(n) {
  if (n <= 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}
console.log(fib(4));
