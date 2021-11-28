const string = " component with noWrap to workaround this issue";

const findLengthOfLastWord = (arg) => {
  const arr = arg.split(' ').filter(elem => elem);
  const lastElement = arr[arr.length - 1];
  return { word: lastElement, length: lastElement.length};
}

const obj = findLengthOfLastWord(string);

console.log('length of last word ', obj.word, ' and the length is ', obj.length );