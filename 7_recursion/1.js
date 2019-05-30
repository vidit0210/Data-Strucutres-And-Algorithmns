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
console.log(power(2, 5));
