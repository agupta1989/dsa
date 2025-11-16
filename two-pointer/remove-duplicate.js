// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place 
// such that each unique element appears at most twice. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have 
// the result be placed in the first part of the array nums. More formally, 
// if there are k elements after removing the duplicates, then the first k elements
// of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

var removeDuplicates = function(nums) {
    if (nums.length <= 2) {
        return nums.length;
    }
    let write = 2; // slow pointer
    let read; // fast pointer
    for (read = 2; read < nums.length; read++) {
        // check if fast pointer is not equal to past slow pointer
        if (nums[read] !== nums[write - 2]) { // nums[read] = 2 and nums[write - 2 = 0] = 1
            nums[write] = nums[read]; // nums[2] = nums[3]
            write += 1;
        }
    }

    return write;
};

var nums = [1,1,1,2,2,3];

var k = removeDuplicates(nums);

console.log('result', nums, k);