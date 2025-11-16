// const search = function(nums, target) {
//     let low = 0;
//     let mid; // = Math.floor(nums.length / 2);
//     let high = nums.length - 1;

//     while (low <= high) {
//         mid = low + Math.floor((high - low) / 2);
//         if (nums[mid] === target) {
//             return mid;
//         }
//         if (target > nums[mid]) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }

//     return -1;
// };

var search = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;

    while (start < end) {
        var mid = Math.floor((start + end) / 2);
        if (target === nums[mid]) {
            return mid;
        }
        if (target < nums[mid]) {
            end = mid - 1;
        }
        if (target > nums[mid]) {
            start = mid + 1;
        }
    }

    return -1;
};

const nums = [-1,0,3,5,9,12] // [5]; // 
const target = 9;

const result = search(nums, target);
console.log(result); // Output: 4