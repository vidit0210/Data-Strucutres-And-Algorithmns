function addUpto(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i
    }
    return total
}

function addUptoFast(n) {
    return n * (n + 1) / 2
}
console.log(addUpto(10))
console.log(addUptoFast(10))
// Checking the Code that works well even without  
sum_faster = (n) => n * (n + 1) / 2