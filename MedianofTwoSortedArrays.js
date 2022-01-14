/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [];
    let i = 0;
    let j = 0;
    while ((i<nums1.length || j<nums2.length)) {
        if (nums1[i] < nums2[j] || j>=nums2.length)
            nums.push(nums1[i++]);
        else
            nums.push(nums2[j++]);
    }
    return ((nums.length % 2 > 0) ?
            nums[(nums.length - 1) / 2] :
            (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2);
};