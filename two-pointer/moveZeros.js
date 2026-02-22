// move zeros to the end of the array
var moveZeroes = function(nums) {
  let start = 0;
  let end = 0;

  while (end < nums.length) {
    if (nums[end] === 0) {
        end++;
        continue;
    }
    let _temp = nums[start];
    nums[start] = nums[end];
    nums[end] = _temp;
    start++;
    end++;
  }
};


const arr = [0,0,2,0,1,0,3,12];

moveZeroes(arr);

console.log(arr);