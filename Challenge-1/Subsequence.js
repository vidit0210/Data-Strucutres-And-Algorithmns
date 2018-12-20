function isSubsequence(str1, str2) {
  for (let j = 0; j < str1.length - 1; j++) {
    for (let i = 0; i < str2.length - 1; i++) {
      if (str1[j] + str1[j + 1] == str2[i] + str2[i + 1]) {
        return true;
      }
    }
  }
  return false;
}
console.log(isSubsequence("abc", "abracadabra"));
