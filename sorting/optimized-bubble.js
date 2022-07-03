function bubbleSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
        swapped = true;
        console.log(arr)
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

const arr = [10,9,8,7,3,2,1];

// [2,3,1,5,9]

const output = bubbleSort(arr.reverse());

console.log(output);