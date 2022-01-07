/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    let s = "";
    let r = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
    while (i >= 0 || j >= 0) {
        let n = parseInt(num1[i] || 0) + parseInt(num2[j] || 0) + r;
        s = (n % 10) + s;
        r = n < 10 ? 0 : 1;
        i--;
        j--;
    }
    if (r > 0)
      s = "1" + s;
    return s;
};

console.log(addStrings("584", "18"));
console.log(addStrings("18582506933032752", "366213329703"));
console.log(addStrings("11", "123"));
console.log(addStrings("456", "77"));
console.log(addStrings("55", "55"));
