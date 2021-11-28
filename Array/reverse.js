var array = [1,2,3,4,5,6,7];

// inbuilt
// console.log('In-built', array.reverse());

// manual - 1
function swap(startIndex, endIndex) {
  var temp = array[startIndex];
  array[startIndex] = array[endIndex];
  array[endIndex] = temp;
};

// for (var i = 0; i < array.length; i++) {
//   var start = i;
//   var end = array.length - i - 1;
//   if (start !== end && start < end) {
//     swap(start, end);
//   }
// }

// console.log(array);

// Manual - 2
// var temp = []
// for (var i = 0; i < array.length; i++) {
//   temp [i] = array[array.length - i - 1];
// }

// console.log(temp);

// var greet = "Hi My Name is Aman Gupta.";

// function reverse(text) {
//   var greetArray = text.split("");
//   var temp = Array(greetArray.length);
//   for (var i = 0; i < greetArray.length; i++) {
//     temp [i] = greetArray[greetArray.length - i - 1];
//   }
//   return temp.join("");
// }

// var reversedGreet = reverse(greet);

// console.log(reversedGreet);
