var mySqrt = function(x) {
    let low = 0;
    let high = x + 1; // because of x = 0
    // r^2 <= x
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        if (mid * mid > x) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low - 1;
};

const x = 4;
const result = mySqrt(x);
console.log('result', result);