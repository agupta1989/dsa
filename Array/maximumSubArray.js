var maxSubArray = function(nums) {
    let currentSum = -Infinity;
    let bestSum = -Infinity;
    if (nums.length == 1) {
        return nums[0];
    }
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        if (num > currentSum + num) {
            currentSum = num;
        } else {
            currentSum += num;
        }

        // currentSum = Math.max(num, currentSum + num);
        if (currentSum > bestSum) {
            bestSum = currentSum;
        }
    }

    return bestSum;
};
// [-2-1]
// const arr = [-2,1,-3,4,-1,2,1,-5,4];
// const arr = [1];
const arr = [5,4,-1,7,8];
// const arr = [1,2];
console.log(maxSubArray(arr));