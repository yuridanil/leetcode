/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let m = new Map();
    let n = 0;
    let x = 0;
    for (e of s)
        m.set(e, m.get(e) + 1 || 1);
    m.forEach( (v, k) => {
        if (v % 2 > 0)
            x = 1;
        n += v % 2 === 0 ? v : v - 1;
    });
    return n + x;
};

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("bb"));
