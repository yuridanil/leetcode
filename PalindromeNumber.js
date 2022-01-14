/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) { // No queue
    if (x < 0) return false;
    let y = x;
    let r = 0;
    while (y > 0) {
        r = r * 10 + y % 10;
        y = Math.floor(y / 10);
    }
   
    return r == x;
};