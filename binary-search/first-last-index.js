var searchRange = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let output = [-1, -1];
    if (nums[start] > target || nums[end] < target) {
        return [-1, -1]
    }

    let firstIndex = -1;
    let secondIndex = -1;

    // left search
    while (start <= end) {
      const mid = start + Math.floor((end - start) / 2);
      if (nums[mid] === target) {
          firstIndex = mid;
          end = mid - 1;
          continue;
      }
      if (target < nums[mid]) {
          end = mid - 1;
      }
      if (target > nums[mid]) {
          start = mid + 1;
      }
    }

    start = Math.floor(nums.length / 2);
    end = nums.length - 1;

    while (start <= end) {
      const mid  = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
          secondIndex = mid;
          start = mid + 1;
          continue;
      }
      if (target < nums[mid]) {
          end = mid - 1;
      }
      if (target > nums[mid]) {
          start = mid + 1;
      }
    }

    if (firstIndex > -1 && secondIndex === -1) {
        secondIndex = firstIndex;
    }

    return [firstIndex, secondIndex];

};


// const nums = [5,7,7,8,8,10];
// const target = 6;
// const nums = [1,3];
// const target = 1;
const nums = [0,0,0,1,2,3];
const target = 0;

const result = searchRange(nums, target);
console.log(result);