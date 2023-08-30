const { SimpleNode, Node } = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    // create a new head
    const newHead = new SimpleNode(data);
    // add the new head and move the current head to second position
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    //we start at the beginning to move through the nodes
    let tail = this.head;
    // if there is no tail this means there is no element so we can put the new element as head
    if (!tail) {
      this.head = new SimpleNode(data);
      // if there is a tail than we need to move through the nodes to get the current tail node
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      // when we got the current tail node we set the new node to be the new tail
      tail.setNextNode(new SimpleNode(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    // we add the second position as the new head and return the data from the removed head;
    // the removedHead has still a pointer to our head node but is not part of the linked list anymore.
    // Is this a problem?
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    // we move through the nodes and add their data to our output string until there is no next node
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    // if we have a current head than set the new node to its previous node and set the current head to be the next node of the new head
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    // if we have a current tail than set the new node to be its next node; and set the current tail to be the previous
    // node of the new tail;
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head) {
      this.head = newTail;
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    // put postion 2 to be the new head
    this.head = removedHead.getNextNode();
    if (this.head) {
      // set the previousNode of the new head to null because there should be no node before this one;
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead.data;
  }

  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return;
    }
    // get the node before the current tail and set its next node to null because it will be the new tail node;
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removeHead();
    }
    return removedTail.data;
  }

  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;
    // move through the nodes to find the searched node
    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      // moving through the nodes
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return null;
    }
    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();
      // change the pointer of the previous and the next node to point to each other so the searched node is not referenced in the list anymore
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove;
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";

    // move through the nodes and add their data to our output string until there is no next node;
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

module.exports = { DoublyLinkedList, LinkedList };
