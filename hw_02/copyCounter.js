const counter = {
  count: 0,
  user: 'Ivan',
};

const copy1 = {};
for (const key in counter) {
  copy1[key] = counter[key];
}

// console.log(copy1 === counter);

const copy2 = Object.assign({}, copy1); //not deep

const copy2v2 = Object.create(counter);

const copy3 = JSON.parse(JSON.stringify(counter)); //bad copy for method and nested methods

// console.log(copy3);
const copy4 = { ...counter }; //not deep

const copy5 = structuredClone(counter);
//global function structuredClone
/*
deep clone but see below
structuredClone is better than JSON - for Date, Set, Map,RegExp - can be converted unpredictable
structuredClone invalid for 
- function - DataCloneError for function
- DOM nodes - DataCloneError for DOM nodes
- descriptors, getters, setters from object
- ignore object prototype chain
- 
*/

//custom function - not ideal)

const objectCloneCreator = (initial) => {
  const isNullable = initial ?? null;
  const isNotObject = typeof initial !== 'object' || typeof initial == 'function';
  if (isNullable === null || isNotObject) return initial;
  const res = Object.create({});

  for (const key in initial) {
    res[key] = objectCloneCreator(initial[key]);
  }
  return res;
};

const counterOrigin = {
  count: 1,
  users: {
    first: 'Ivan',
    second: 'Serg',
  },
  address: { city: { street: 'street', home: 'home' } },
};

const counterOriginCopy = objectCloneCreator(counterOrigin);
console.log(counterOriginCopy);
console.log(counterOrigin === counterOriginCopy);
