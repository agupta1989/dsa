// move zeros to the start of the array
var moveZeroes = function(nums) {
  let start = nums.length - 1;
  let end = nums.length - 1;

  while (start >= 0) {
    if (nums[end] === 0) {
      if (nums[start] > 0) {
        // swap
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        end--;
      }
      start--;
      continue;
    }
    end--;
    start--;
  }
};


const arr = [1,0,0,0,0,0,0,0,0,1]; // [0,0,2,0,0,1,3,12]

moveZeroes(arr);

console.log(arr);