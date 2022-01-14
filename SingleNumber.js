/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let s = new Set();
    for (i in nums) {
        if (s.has(nums[i]))
            s.delete(nums[i]);
        else
            s.add(nums[i]);
    }
    return s.values().next().value;
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));
