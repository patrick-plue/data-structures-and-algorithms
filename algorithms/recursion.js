const { LinkedList } = require("../datastructures/LinkedList.js");

function nestedAdd(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (Array.isArray(current)) {
      sum += nestedAdd(current);
    } else {
      sum += current;
    }
  }
  return sum;
}

const recursiveFactorial = (n) => {
  if (n < 2) return 1;
  return n * recursiveFactorial(n - 1);
};

const iterativeFactorial = (n) => {
  result = 1;
  while (n > 0) {
    result *= n;
    n -= 1;
  }
  return result;
};

// const myList = new LinkedList();

// myList.addToHead("Node 1");
// myList.addToHead("Node 2");
// myList.addToHead("Node 3");
// myList.addToHead("Node 4");

// // Add checkpoint 2 code below:
// const myNodeRecursive = myList.findNodeIteratively("Node 2");
// console.log(myNodeRecursive);

console.log(recursiveFactorial(155));
console.log(iterativeFactorial(155));

module.exports = { nestedAdd };
