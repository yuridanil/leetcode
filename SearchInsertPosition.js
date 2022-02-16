/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
var searchInsert = function(nums, target) {
    let l = -1;
    let r = nums.length;
    while (r - l > 1) {
        let m = Math.floor((l + r) / 2);
        if(nums[m] < target)
            l = m;
        else
            r = m;
    }
    return r;
};

console.log("res: ", searchInsert([1,3,5,6], 5));
console.log("res: ", searchInsert([1,3,5,6], 2));
console.log("res: ", searchInsert([1,3,5,6], 7));
