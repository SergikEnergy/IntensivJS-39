class MyQueue {
  constructor() {
    this.queue = [];
  }

  addToQueue(elem) {
    this.queue.push(elem);
  }

  removeFromQueue() {
    this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  getSize() {
    return this.queue.length;
  }

  getQueue() {
    return this.queue;
  }
}

const queue = new MyQueue();

console.log(queue);
queue.addToQueue(3);
queue.addToQueue(5);
console.log(queue.getQueue());
console.log(queue.getSize());
console.log(queue.isEmpty());
queue.removeFromQueue();
console.log(queue.getQueue());
queue.removeFromQueue();
console.log(queue.getSize());
console.log(queue.isEmpty());
