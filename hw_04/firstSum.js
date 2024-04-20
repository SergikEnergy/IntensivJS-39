/* Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total: */

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;

// 1. O(n^2)
const firstSum = (arr, total) => {
  for (let i = 0; i < arr.length; i++) {
    const left = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const right = arr[j];
      if (left + right === total) {
        return [left, right];
      }
    }
  }

  return [];
};

// console.log(firstSum(arr, total));

// 2. O(n)
const firstSum2 = (arr, total) => {
  let temp,
    obj = {};

  arr.forEach((elem, ind) => (obj[elem] = ind));

  for (let i = 0; i < arr.length; i++) {
    temp = total - arr[i];
    if (obj[temp]) return [arr[i], temp];
  }

  return [];
};

console.log(firstSum2(arr, total));

// 3. O(n(log(n)))
// array need to be sorted
const firstSum3 = (arr, total) => {
  const arrSorted = arr.toSorted((a, b) => a - b);
  let start = 0;
  let end = arrSorted.at(-1);

  while (start < end) {
    const sum = arrSorted[start] + arrSorted[end];
    if (sum === total) {
      return [arrSorted[start], arrSorted[end]];
    } else if (sum < total) {
      start++;
    } else {
      end--;
    }
  }

  return [];
};

// console.log(firstSum3(arr, total));
