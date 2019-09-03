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
  checkAndMoveLeft(node){
    return node.left == null;
  }
  checkAndMoveRight(node){
      return node.right == null;
      
  }
  insertNode(value) {
    let newNode = new Node(value);
    if (this.root != null) {
      this.root = newNode(value);
      return;
    }
    if(newNode.value > )
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
