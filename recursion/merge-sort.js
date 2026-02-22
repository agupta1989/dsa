
const merge = (arr, start, mid, end) => {
  console.log("what is left ", left);
  console.log("what is right ", right);
  let low = 0; // for left
  let high = 0; // for right
  const tempArr = [];
  while (low <= start && high <= end) {
    if (arr[low] < arr[high]) {
      tempArr.push(arr[low])
      low+=1;
    }
    if (arr[low] > arr[high]) {
      tempArr.push(arr[high]);
      high+=1;
    }
  }

  while(low < start) {
    tempArr.push(arr[low]);
    low++;
  }

  while(high < end) {
    tempArr.push(arr[high]);
    high++;
  }

  return tempArr;
}

const split = (arr, start, end) => {
  if (start === end) {
    return;
  }
  const mid = start + Math.floor((end-start) / 2);

  split(arr, start, mid);
  console.log('left split ', start, mid)
  split(arr, mid + 1, end);
  console.log('right split', mid +1, end);
  merge(arr, start, mid, end);
}

// const arr = [3,2,4,1,6,5];
const arr = [5, 4, 4, 1, 1];

split(arr, 0, arr.length-1)