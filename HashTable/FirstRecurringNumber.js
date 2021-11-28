const array = [5,2,1,4,7,1,5,8,9,6,3,2];

const findFirstRecurring = (array) => {
  const _tempMap = {};
  for (let i = 0; i < array.length; i++) {
    if (_tempMap[array[i]]) {
      return array[i];
    }
    _tempMap[array[i]] = true;
  }
};

const firstRecurringNumber = findFirstRecurring(array);

console.log('first recurring number is ', firstRecurringNumber);

