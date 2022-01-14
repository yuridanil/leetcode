/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if (numRows == 1) return s;
    let a = new Array(numRows);
    let n = 0;
    let i = 0;
    let di = 1;
    while (n < s.length) {
        a[i] = a[i] === undefined ? s[n] : a[i] + s[n];
        i+=di;
        if (i >= numRows-1 || i <= 0) di*=-1;
        n++;
    }
    return a.join("");
};
