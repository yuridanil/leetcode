/**
 * @param {number} n
 * @return {number}
 */
 var integerReplacement = function(n) {
  if (n === 1)
      return 0;
  else {
      if (n % 2 === 0) // even
          return integerReplacement(n / 2) + 1;
      else // odd
          return Math.min(integerReplacement(n + 1), integerReplacement(n - 1)) + 1;
  }
};

console.log(integerReplacement(8));
console.log(integerReplacement(7));
console.log(integerReplacement(4));
