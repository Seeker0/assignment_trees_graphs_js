const util = require('util');

class BinaryNode {
  constructor(left, right, data) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

const rootNode = new BinaryNode(null, null, 7);

const binary_tree = [8, 10, 3, 1, 6, 14, 4, 7, 13];

class Tree {
  constructor(rootNode) {
    this.rootNode = rootNode;
  }

  addValue(value, currentNode = this.rootNode) {
    currentNode.data > value
      ? !currentNode.left
        ? (currentNode.left = new BinaryNode(null, null, value))
        : this.addValue(value, currentNode.left)
      : !currentNode.right
        ? (currentNode.right = new BinaryNode(null, null, value))
        : this.addValue(value, currentNode.right);
        
  }

  

  printTree() {
    console.log(util.inspect(Birch, false, null));
  }
}

const Birch = new Tree(rootNode);

const hydrate = arr => {
  arr.forEach(val => Birch.addValue(val));
};

hydrate(binary_tree);
console.log(util.inspect(Birch, false, null));
