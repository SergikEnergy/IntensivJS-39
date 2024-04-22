const arr = [1, 2, 3, 4, 7, -10, 45];
const arr2 = [1, 7, 90, 4, 5, 80, -2];
const delay = 3000; // in ms

const logElemWithDelay = (arr, delay) => {
  arr.forEach((num) => {
    setTimeout(() => console.log(num), delay);
  });
};

// logElemWithDelay(arr, delay);

// if increase delay after each iteration (npt clear task declaring)
const logElemWithDelayIncrease = (arr, delay) => {
  arr.forEach((num, index) => {
    setTimeout(() => console.log(num), delay + index * delay);
  });
};

logElemWithDelayIncrease(arr2, delay);
