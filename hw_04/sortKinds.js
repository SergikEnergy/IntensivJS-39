// 1. bubble sorting O(n^2)
function sortBubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
const arr = [5, 10, -5, 0, 6, 14, -8, 25];
console.log(sortBubble(arr));

// 2. selection sorting O(n^2)
function sortSelection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
console.log(sortSelection(arr));

// 3. quick sort O(n*log(n)) - worth case - O(n^2)

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    const rotatePoint1 = arr[0];
    // non stable algorithm - if at the entry point is 0 element - worst case - because similar as usual loop - with O(n^2);
    // better start point set another value
    const index = Math.floor(Math.random() * arr.length); //in general it is the average middle
    //or simple middle of array Math.floor(arr.length/2);
    const rotatePoint = arr[index];

    const lessValues = arr.filter((elem, ind) => elem <= rotatePoint && ind !== index);
    const greaterValues = arr.filter((elem) => elem > rotatePoint);

    return [...quickSort(lessValues), rotatePoint, ...quickSort(greaterValues)];
  }
};
// this case is not best for the memory

console.log(quickSort(arr));

//quickSort2 - with less memory - change source array only - not create additional
//helper for return index
const partIndex = (arr, left, right) => {
  const baseElement = arr[Math.floor((left + right) / 2)];

  while (left <= right) {
    //check left part
    while (arr[left] < baseElement) left++;
    //check right part
    while (arr[right] > baseElement) right--;

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
};

// helper for quick sort
const quickSortHelper = (arr, start, end) => {
  if (arr.length < 2) {
    return arr;
  }

  //find index - for replacing elements
  const index = partIndex(arr, start, end);

  if (start < index - 1) {
    quickSortHelper(arr, start, index - 1);
  }

  if (index < end) {
    quickSortHelper(arr, index, end);
  }

  return arr;
};

const quickSort2 = (arr) => {
  return quickSortHelper(arr, 0, arr.length - 1);
};
const arr2 = [-5, -7, -3, -8, 10, -45, 0, 0, 56, 5, 4, 3];

console.log(quickSort2(arr2));
