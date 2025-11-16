var removeDuplicates = function(nums) {
    if (nums.length <= 2) {
        return nums.length;
    }
    let write = 2;
    for (let read = 2; read < nums.length; read++) {
        if (nums[read] !== nums[write - 2]) {
            nums[write] = nums[read];
            write += 1;
        }
    }

    return write;
};


const nums = [0,0,1,1,1];

const newLength = removeDuplicates(nums);

console.log(newLength); // Output: 5