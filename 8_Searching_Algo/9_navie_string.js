//Number of time a smaller strings upload in a longer string
/*
define a Function with longer string and lower string
Loop over the Longer String
Loop over the shorter string
if the Characters don't match break our the inner loop
if characters do match,keep going
if you complete the inner loop nd find a match,increment the count of matches
return the count
 */
function naiveString(str, pattern) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] !== pattern[j]) break;
      if (j == pattern.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveString("Lorielollol loled", "lol"));
