var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    const insertIndex = 0;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if (nums[mid] < target) {
            start = mid + 1;
        }
        if (nums[mid] > target) {
            end = mid - 1;
        }
    }
};

const nums = [1,3,5,6];
const target = 4; // 5; //7; // 5, 4

const result = searchInsert(nums, target);

console.log('result', result);