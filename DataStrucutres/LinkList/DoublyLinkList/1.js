class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //Push adds a value to the Front of the Link List
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
  pop() {
    if (!this.head) return undefined;
    let popedNode = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popedNode.prev;
      this.tail.next = null;
      popedNode.prev = null;
    }
    this.length--;
  }

  //Removing an Element from the begining of the link List

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.head.prev = null;
    this.length--;
    currentHead.next = null;
    return currentHead;
  }

  //Adds the Node in the Begining

  unshift(value) {
    let th;
  }

  getLength() {
    return this.length;
  }
}

dl = new DoubleLinkList();
dl.push(1);
dl.push(2);
dl.push(3);
dl.push(4);
console.log(dl.print());
dl.shift();
console.log(dl.print());
