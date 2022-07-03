// Smallest Common Multiple
/**
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both,
 * as well as by all sequential numbers in the range between these parameters.
 */

// Problem breakdown. 
// Step 1 first check with given list of number
// the number which is common divisible by all array element.

// const arr = [1,2,3,4,5,6];

// var i = 1;

// while(!found) {
//   var found = arr.every((a) => {
//     return i % a === 0;
//   });

//   if (found) {
//     console.log('found', i, found)
//   } else {
//     i += 1;
//   }
// }

// Step 2. Now try to find the range between given array

const range = [23, 18];

// Step 3, We will sort them in ascending order no matter whichever order they are in

const sorted = range.sort((a, b) => a - b);

// Step 4, Now we will find the range of numbers between 1st and 2nd element

let smaller = sorted[0];
const larger = sorted[1];
const newArrWithRange = [];
while (smaller <= larger) {
  newArrWithRange.push(smaller);
  smaller += 1;
}

// console.log(newArrWithRange);

// Now we sorted array with range, now we can go back to Step 1 and apply our logic there.

var i = 1;

while(!found && smaller <= larger) {
  // var found = i % smaller === 0
  // smaller += 1;
  var found = newArrWithRange.every((a) => {
    return i % a === 0;
  });
  if (found) {
    console.log('found', i, found)
  } else {
    i += 1;
  }
}