function validAnagram(first, second) {
  let lookup = {};
  for (let i = 0; i < first.length; i++) {
    let char = first[i];
    lookup[char] = lookup[char] > 0 ? lookup[char]++ : 1;
  }
  for (let i = 0; i < second.length; i++) {
    let char = second[i];
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char]--;
    }
  }
  return true;
}
console.log(validAnagram("iceman", "cinema"));
