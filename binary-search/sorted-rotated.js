
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high)/2);
        console.log(mid)
        if (nums[mid] === target) {
            return mid;
        }
        // [4,5,6,1,2,3], target 6

        if (nums[low] <= nums[mid]) {
            if (target >= nums[low] && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            // Right half is sorted
            if (target > nums[mid] && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        // if (nums[low] > target) {
        //     low = mid + 1;
        //     continue;
        // }
        // if (nums[low] <= target) {
        //     high = mid - 1;
        // }

    }

    return -1;
};

// const nums = [4,5,6,7,0,1,2];
// const nums = [5,6,7,0,1,2,3,4];
// const nums = [1,3];
const nums = [4,5,6,1,2,3];
const target = 6;

const result = search(nums, target);

console.log('result', result);