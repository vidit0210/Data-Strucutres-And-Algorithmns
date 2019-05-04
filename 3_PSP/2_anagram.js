function anagram(str1, str2) {
    str1_map = {}
    str2_map = {}
    if (str1.length !== str2.length) return false
    for (s of str1) str1_map = ++str1_map[s] || 1

    for (s of str2) str2_map = ++str2_map[s] || 1

    for (s in str1_map) {
        if (str1_map[s] !== str2_map[s]) return false

    }
    return true;

}
console.log(anagram('aa', 'aaa'))