/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
    if (nums.length === 1) {
        return false;
    }

    // brute force approach, works on smaller input size
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i+1; j < nums.length; j++) {
    //         if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
    //             return true;
    //         }
    //     }
    // }

    let low = 0;
    const windowContainer = nums.slice(0, k);
    let high = windowContainer.length - 1;

    for (let i = 0; i < nums.length; i++) {
      if (windowContainer.includes(nums[i])) {
        return true;
      } else {
        windowContainer.shift(); // remove the first element
        low += 1;
        windowContainer.unshift(nums[low]);
        windowContainer.pop();
        high++;
        windowContainer.push(nums[high]);
      }
    }

    return false;
};

const nums = [1,0,1,1]; // [1,2,3,1,2,3]; 
const k = 1; // 2

const result = containsNearbyDuplicate(nums, k);
console.log(result); // Output: true