/**
 * Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
 * Note that elements beyond the length of the original array are not written. Do the above modifications to the input array
 * in place and do not return anything.
 */

var duplicateZeros = function(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    var element = arr[i];
    if (element === 0) {
      i = i+1;
      arr.splice(i, 0, element);
    }
  }

  var diff = arr.length - length;
  for (var i = 0; i < diff; i++) {
    arr.pop();
  }
};

var arr = [1,0,2,3,0,4,5,0]; // [1,0,0,2,3,0,0,4]

duplicateZeros(arr);

console.log(arr);