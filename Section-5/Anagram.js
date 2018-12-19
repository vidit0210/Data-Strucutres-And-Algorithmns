function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyOfStr1 = {};
  let frequencyOfStr2 = {};

  for (let char of str1) {
    frequencyOfStr1[char] = (frequencyOfStr1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequencyOfStr2[char] = (frequencyOfStr2[char] || 0) + 1;
  }
  for (let check in frequencyOfStr1) {
    // console.log(check);
    if (!(frequencyOfStr1[check] === frequencyOfStr2[check])) return false;
  }
  return true;
}
console.log(checkAnagram("cinema", "iceman"));
