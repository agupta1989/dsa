/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // brute force
    // for (let i = 0;i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] === nums[j]) {
    //             return nums[i];
    //         }
    //     }
    // }

    // optimal
    let slow = 0;
    let fast = 0;

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast) {
          break;
        }
    }

    let slow2=0;

    while (true) {
        slow = nums[slow];
        slow2 = nums[slow2];
        if (slow === slow2) {
          break;
        }
    }

    return slow   
};

const nums = [3,1,3,4,2];

const duplicate = findDuplicate(nums);

console.log(duplicate)