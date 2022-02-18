/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    let m = new Map();
    let n = 0;
    for (e of s) {
        m.set(e, m.get(e) + 1 || 1);
        if (m.get(e) === 2) {
            n++;
            m.delete(e);
        }
    }
    return n * 2 + (m.size > 0 ? 1 : 0);
};

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("bb"));
