// Trees are not Linear
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insertNode(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) return undefined;
      if (value <= currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right == null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
  findNode(value) {
    let found = false;
    if (this.root === null) return false;
    let currentNode = this.root;
    while (currentNode && !found) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        found = true;
        return found;
      }
    }
    return false;
  }
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.left);
    }
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insertNode(10);
tree.insertNode(6);
tree.insertNode(15);
tree.insertNode(3);
tree.insertNode(8);
tree.insertNode(20);

let data = tree.BFS();
console.log(data);
