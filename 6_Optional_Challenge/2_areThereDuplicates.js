function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
    let f = {};
    for (let i = 0; i < arguments.length; i++) {
        f[arguments[i]] = (f[arguments[i]] || 0) + 1;
        if (f[arguments[i]] > 1) {
            return true;
        }
    }
    return false;
}

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}