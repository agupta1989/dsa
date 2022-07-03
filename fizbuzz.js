function fizzBuzz(n) {
  // Write your code here
  let i = 1;
  while (i <= n) {
      if (i % 3 === 0 && i % 5 === 0) {
          console.log('FizzBuzz');
      } else if (i % 3 === 0) {
          console.log('Fizz');
      } else if (i % 5 === 0) {
          console.log('Buzz');
      } else {
          console.log(i);
      }
      i++;
  }
}

fizzBuzz(15);