class MyStack {
  constructor() {
    this.stack = [];
  }

  addToStack(elem) {
    this.stack.push(elem);
  }

  removeFromStack() {
    this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getSize() {
    return this.stack.length;
  }
}

const stack = new MyStack();

console.log(stack);
stack.addToStack(3);
stack.addToStack(5);
console.log(stack.getSize());
console.log(stack.isEmpty());
stack.removeFromStack();
stack.removeFromStack();
console.log(stack.getSize());
console.log(stack.isEmpty());
