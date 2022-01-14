/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) { // Stack
    let a = [];
    for (let c of s) {
        if (c == '{') a.push('}');
        else if (c == '[') a.push(']');
        else if (c == '(') a.push(')');
        else if(a.pop() != c)
            return false;
    }
    if (a.length > 0)
        return false;
    else
        return true;
};