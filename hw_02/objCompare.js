const obj1 = { here: { is: 'on', other: '3' }, object: 'Y' };

const obj2 = { here: { is: 'on', other: '2' }, object: 'Y' };

//JSON
const deepEqual = (obj1, obj2) => {
  if (!obj1 && !obj2) {
    return false;
  }
  if (obj1 === obj2) {
    return true;
  }
  return JSON.stringify(obj1) === JSON.stringify(obj2);
  //but when keys will be in different order - it doesn't worked
};

//for loop
const deepEqual2 = (obj1, obj2) => {
  if (!obj1 && !obj2) {
    return false;
  }

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return obj1 === obj2;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual2(obj1[key], obj2[key])) return false;
  }

  return true;
};

const object1 = {
  key1: {
    key2: {
      key3: 'Value 1',
    },
    key4: 'Sibling Value 1',
  },
};

const object2 = {
  key1: {
    key4: 'Sibling Value 1',
    key2: {
      key3: 'Value 1',
    },
  },
};

// console.log(deepEqual2(object1, object2));
