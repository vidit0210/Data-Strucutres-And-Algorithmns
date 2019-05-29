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
    let newHead = new Node(value);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
      newHead.prev = null;
    }
    this.length++;
  }
  get(index) {
    if (index < 0 || index > this.length - 1) return false;
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (index != count) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    if (index == 0) return this.unshift(value);
    if (index == this.length) return this.push(value);

    let newNode = new Node(value);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index == 0) return this.shift();
    if (index == this.length) return this.pop();

    let beforeNode = this.get(index - 1);
    let removeNode = beforeNode.next;
    beforeNode.next = removeNode.next;
    removeNode.prev = null;
    removeNode.next = null;
    this.length--;
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
dl.unshift(0);
console.log(dl.print());
dl.unshift(-1);
console.log(dl.print());
dl.insert(1, 100);
console.log(dl.print());
dl.remove(1);
console.log(dl.print());
