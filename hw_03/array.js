// create array

const arr = [1, 3, 5, 6, -8, 5.6, 0, -56];

//get Sum of elements - element - numbers
// 1
const getSumElements = (arr) => {
  if (Array.isArray(arr)) {
    let res = 0;
    for (const item of arr) {
      res += item;
    }
    return res;
  }
};

console.log(getSumElements(arr));

// 2
const getSumElements2 = (arr) => {
  if (Array.isArray(arr)) {
    let res = 0;
    arr.forEach((elem) => (res += elem));
    return res;
  }
};

console.log(getSumElements2(arr));

// 3
const getSumElements3 = (arr) => (Array.isArray(arr) ? arr.reduce((acc, item) => (acc += item), 0) : null);

console.log(getSumElements3(arr));

//create array with strings

const arrStr = new Array('first', 'second', 'some string');

const separator = '';
const strFromArray = arrStr.join(separator);

console.log(strFromArray);

//find MAX and MIN from numbers array
const arrNums = [1, 2, 3, -60, -5.6, 0, 456];

//short - only for not nested array
const getMinMaxFromNumbersArray = (arr) => {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
};
console.log(getMinMaxFromNumbersArray(arrNums));

//loop implementation
const getMinMaxFromNumbersArray2 = (arr) => {
  let min = arr[0];
  let max = min;

  arr.forEach((elem) => {
    if (elem < min) min = elem;
    if (elem > max) max = elem;
  });

  return {
    min,
    max,
  };
};
console.log(getMinMaxFromNumbersArray2(arrNums));
