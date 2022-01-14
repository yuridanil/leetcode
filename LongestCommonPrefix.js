/**
 * @param {string[]} strs
 * @return {string}
 */

 var longestCommonPrefix = function(strs) {
    let p = strs[0];
    for (i=1; i<strs.length; i++) {
        p = p.substr(0, strs[i].length);
        for (j=1; j<=p.length; j++) {
            if (p.substr(0,j) != strs[i].substr(0,j)) {
                p = p.substr(0, j - 1);
            }
        }
    }
    return p;
};
