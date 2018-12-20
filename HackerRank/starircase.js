function staircase(n) {
  let line = Array(n).fill(" ");
  // line[n] = "";
  for (let i = n - 1; i >= 0; i--) {
    line[i] = "#";
    console.log(line.join(""));
  }
}

// function staircase(n) {
//     let line = Array(n + 1).fill(" ");
//     line[n] = "";
//     for (let i = n - 1; i >= 0; i--) {
//       line[i] = "#";
//       console.log(line.join(" "));
//     }
//   }
console.log(staircase(6));
