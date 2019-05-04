function sameFrequency(num1, num2) {
    num1 = num1.toString().split('')
    num2 = num2.toString().split('')
    if (num1.length != num2.length) return false

    num1_map = {}
    num2_map = {}

    for (n of num1) num1_map[n] = ++num1_map[n] || 1
    for (n of num2) num2_map[n] = ++num2_map[n] || 1
    for (n in num1_map) {
        if (num1_map[n] != num2_map[n]) return false
    }
    return true

}
console.log(sameFrequency(123, 133))