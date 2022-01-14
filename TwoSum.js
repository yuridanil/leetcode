/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let set = new Set();
    for (let i=0; i<nums.length; i++) {
        if ((nums[i]) in set)
            return [i, set[nums[i]]];
        set[target - nums[i]] = i;
    }
};
