//1 simple return the necessary object
function MakeCounter1(count) {
  return { counter: count };
}

function MakeCounter2(count) {
  this.counter = count;
}

function MakeCounter3(count) {
  if (!new.target) {
    return new MakeCounter3(count); //if called without new
  }
  this.counter = count;
}

function MakeCounter3(count) {
  if (!new.target) {
    return new MakeCounter3(count); //if called without new
  }
  this.counter = count;

  this.add = () => {
    this.counter++;
  };

  this.sub = () => {
    this.counter--;
  };
}

//2 class notation
class Counter {
  constructor(counterInitial) {
    this._counter = counterInitial;
  }
  get counter() {
    return this._counter;
  }
  set counter(value) {
    this._counter = value;
  }
}

const obj = new Counter(0);
console.log(obj);
