/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let m = new Map();
    for (let i=0; i<s.length; i++) {
        m.set(s[i], (m.get(s[i]) || 0) + 1 );
    }
    for (let i=0; i<t.length; i++) {
        if (m.has(t[i])) {
            m.set(t[i], m.get(t[i]) - 1);
            if (m.get(t[i]) === 0)
                m.delete(t[i]);
        } else
            return false;
    }
    return m.size === 0;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
