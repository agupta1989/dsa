function fibonacci(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    if (i === 0 || i === 1) {
      arr.push(1);
    } else {
      const number = arr[i - 1] + arr[i - 2];
      if (number > num) {
        break;
      }
      arr.push(number);
    }
  }

  const output = arr.reduce((accum, value) => {
    if (value % 2 !== 0) {
      return accum + value;
    }
    return accum;
  }, 0);
  return output;
  // return arr;
}

const fibonacciArray = fibonacci(75025);

console.log(fibonacciArray)