// implement a custom array
// pretending that js has no array type

class ArrayList {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {}
}

const list = new ArrayList();
list.push("hello");
list.push("world");
list.pop();

console.log("list", list);
