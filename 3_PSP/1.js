// Problem Solving Approach 
// WAP to check = A[] = B[] B is A*A
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) return false;
        arr2.splice(correctIndex, 1)
    }
    return true;
}
console.log(same([1, 2, 4], [1, 16, 4, 17]))

// Naive Approach utilizes 0(n^2)

function same_fast(A, B) {
    A_map = {}
    B_map = {}
    if (A.length !== B.length) return false

    for (a of A) {
        A_map = ++A_map[a] || 1
    }
    for (b of A) {
        B_map = ++B_map[b] || 1
    }
    for (value in A_map) {
        // if (!(value ** 2 in B_map)) return false;
        // if (A_map[value] !== B_map[value ** 2]) return false
        if (A_map[value] !== B_map[value ** 2]) return false

    }
    return true;
}
console.log(same_fast([1, 2, 4], [1, 16, 4]))