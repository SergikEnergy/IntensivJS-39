//create onject counter

const counter = {};

const counter2 = { count: 0 };

const counter3 = new Object(); //empty

const counter4 = Object.defineProperties(
  {},
  {
    prop1: {
      value: 'count',
      configurable: true,
      enumerable: false,
      writable: true,
    },
    prop2: {
      value: 'user',
    },
  }
);
const counter4v2 = Object.create({}, { count: { configurable: true, writable: false, enumerable: true } });

const counter5 = Object.fromEntries(Array.from({ length: 3 }).fill(['key', 'some value']));
// console.log(counter5);

const counter6 = Object.create(null); //empty object - doesn't inherit all Object.prototype functionality

const counter7 = Object.create(counter5); //create new copy - not DEEP from counter5

function makeObject(initial) {
  return {
    count: initial,
  };
}

const counter8 = makeObject(0);
// console.log(counter8);

function Counter(count) {
  (this.count = count), (this.add = () => this.count++);
  this.sub = () => this.count--;
} //now the same with class notation

const counter9 = new Counter(0); //always called with new!!!

// console.log(counter9);
// counter9.add();
// console.log(counter9);

const child1 = {
  counterTrue: true,
};

const child2 = {
  counterFalse: false,
};

const counter10 = Object.assign({}, child1, child2);

const counter11 = {
  get count() {
    return this._count;
  },
  set count(value) {
    if (value) this._count = value;
  },
};
