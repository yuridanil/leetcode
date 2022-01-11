/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
  return (Math.log2(n) * 10) % 10 === 0;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
