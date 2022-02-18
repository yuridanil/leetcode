/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    let na = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    while (j - i > 0) {
        if (!na.includes(s[i].toUpperCase()))
            i++;
        else if (!na.includes(s[j].toUpperCase()))
            j--;
        else if (s[i].toUpperCase() !== s[j].toUpperCase()) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama_"));
console.log(isPalindrome("b w  !b..,!@$"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
