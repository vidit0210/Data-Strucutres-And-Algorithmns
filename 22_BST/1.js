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
      if (value == currentNode.value) return undefined;
      if (value <= currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right == null) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
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
    if (!found) {
      return false;
    }
  }
}

let tree = new BinarySearchTree();
tree.insertNode(10);
tree.insertNode(5);
tree.insertNode(13);
tree.insertNode(11);
tree.insertNode(2);
tree.insertNode(16);
tree.insertNode(7);
tree.insertNode(7);

console.log(tree.findNode(7));
