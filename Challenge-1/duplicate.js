function areThereDuplicates() {
  let f = {};
  for (let i = 0; i < arguments.length; i++) {
    f[arguments[i]] = (f[arguments[i]] || 0) + 1;
    if (f[arguments[i]] > 1) {
      return true;
    }
  }
  return false;
}
console.log(areThereDuplicates(1, 3, 2));
