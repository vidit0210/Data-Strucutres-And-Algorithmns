// Think Twice Code Once!

// Write a function that takes in a string  and returns it's frequnecy Count

function frequncy_count(str) {
    map = {}
    str = str.toLowerCase().trim().split('')
    str.forEach(s => {
        if (/[a-z0-9]/.test(s)) {
            // if (s in map) {
            //     map[s] += 1
            // } else {
            //     map[s] = 1
            // }
            map[s] = map[s] + 1 || 1
        }
    });
    return map
}
console.log(frequncy_count('hheello hey123'))