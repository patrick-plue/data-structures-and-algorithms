const { LinkedList } = require("./LinkedList");

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  // in a queue we add to the end of the queue - so just to the tail of the linkedlist;
  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
    } else {
      throw new Error("Queue is full!");
    }
  }

  // we remove always the first element in the line of the queue - so always the head elment of the linked list;
  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      return data;
    } else {
      throw new Error("Queue is empty!");
    }
  }

  // just because I am curious
  printFullQueue() {
    this.queue.printList();
  }
}

module.exports = { Queue };

const newQueue = new Queue();
for (let i = 0; i < 11; i++) {
  newQueue.enqueue(i);
}
newQueue.printFullQueue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.printFullQueue();
