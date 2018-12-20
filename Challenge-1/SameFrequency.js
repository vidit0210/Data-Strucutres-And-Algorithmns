function sameFrequency(num1, num2) {
  if (num1.toString().length !== num2.toString().length) return false;
  if (num1 === num2) return true;
  let f1 = {};
  let f2 = {};
  while (num1 !== 0 && num2 !== 0) {
    let r1 = num1 % 10;
    num1 = parseInt(num1 / 10);
    f1[r1] = (f1[r1] || 0) + 1;

    let r2 = num2 % 10;
    num2 = parseInt(num2 / 10);
    f2[r2] = (f2[r2] || 0) + 1;
  }
  for (let val in f1) {
    if (!(f1[val] === f2[val])) return false;
  }

  return true;
}
console.log(sameFrequency(222, 222));
