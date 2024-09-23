const quickSort = (arr) => {

  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length/2)];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } if (arr[i] > pivot) {
      rightArr.push(arr[i])
    }
  }

  return [].concat(quickSort(leftArr), pivot, quickSort(rightArr));
}

const data = [2,1,3,0,4,5,9];

console.log(quickSort(data));