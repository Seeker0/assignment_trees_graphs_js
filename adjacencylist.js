const util = require('util');
const EDGE_LIST = require('./edgeList');
const edgeList = EDGE_LIST;

class Person {
  constructor({ id, name, data, next }) {
    this.id = id;
    this.name = name;
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.lastNode = null;
  }

  initialize(firstNode = null) {
    this.headNode = firstNode;
    this.lastNode = firstNode;
  }

  addFirstNode(data) {
    this.headNode = new Person(data);
    this.lastNode = this.headNode;
  }

  addNode(data) {
    if (!this.headNode) {
      this.addFirstNode(data);
    } else {
      const node = new Person(data);

      this.lastNode.next = node;

      this.lastNode = node;
    }
  }

  removeNode(index) {
    let counter = 0;
    let currentNode = this.headNode;
    let prevNode = null;

    while (counter < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      ++counter;
    }

    let nextNode = currentNode.next;

    currentNode.next = null;

    prevNode.next = nextNode;
  }

  findNode(id) {
    let currentNode = this.headNode;

    while (currentNode.id !== id) {
      currentNode = currentNode.next;
    }

    return currentNode.data;
  }

  insertNode(index, data) {
    let newNode = new Node(data, null);

    let prevNode = this.findNode(index);
    let nextNode = prevNode.next;

    newNode.next = nextNode;
    prevNode.next = newNode;
  }
  //O(n) traversal
  // Crawls and prints the list
  printList() {
    // Start at the head
    let currentNode = this.headNode;

    while (currentNode.next) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
    console.log(currentNode);
  }

  renderList() {
    let returnString = '';
    let currentNode = this.headNode;

    if (!currentNode) return returnString;

    while (currentNode.next) {
      returnString += `| ${JSON.stringify(currentNode.data)} `;
      currentNode = currentNode.next;
    }
    returnString += `| ${JSON.stringify(currentNode.data)} | `;
    return returnString;
  }

  reverseList() {
    let current = this.headNode;
    let next = current.next;
    let prev;
    while (current.next) {
      prev = current;
      current = next;
      next = current.next;
      if (!next) break;
      current.next = prev;
    }
    current.next = prev;
    this.headNode.next = null;
    let oldHead = this.headNode;
    this.headNode = this.lastNode;
    this.lastNode = oldHead;
  }
}

class AdjacencyList {
  constructor(edgeList) {
    this.edgeList = edgeList;
    this.hash = [];
  }
  createHash() {
    // for (i = 0; i < 20; i++) {
    //   this.hash.push([]);
    // }
    for (var i = 0; i < this.edgeList.length; i++) {
      let values = {
        person1: {
          id: this.edgeList[i][0].id,
          name: this.edgeList[i][0].name
        },
        person2: {
          id: this.edgeList[i][1].id,
          name: this.edgeList[i][1].name
        },
        weight: this.edgeList[i][2]
      };

      if (!this.hash[values.person1.id]) {
        this.hash[values.person1.id] = new LinkedList();
        this.hash[values.person1.id].initialize();
        this.hash[values.person1.id].addFirstNode({
          id: values.person1.id,
          name: values.person1.name,
          data: null
        });
        this.hash[values.person1.id].addNode({
          id: values.person2.id,
          name: values.person2.name,
          data: values.weight
        });
      } else {
        this.hash[values.person1.id].addNode({
          id: values.person2.id,
          name: values.person2.name,
          data: values.weight
        });
      }

      if (!this.hash[values.person2.id]) {
        this.hash[values.person2.id] = new LinkedList();
        this.hash[values.person2.id].initialize();
        this.hash[values.person2.id].addFirstNode({
          id: values.person2.id,
          name: values.person2.name,
          data: null
        });
        this.hash[values.person2.id].addNode({
          id: values.person1.id,
          name: values.person1.name,
          data: values.weight
        });
      } else {
        this.hash[values.person2.id].addNode({
          id: values.person1.id,
          name: values.person1.name,
          data: values.weight
        });
      }
    }
  }
  printAdjList() {
    this.hash.forEach(list => {
      let node = list.headNode;
      let string = `${node.name}     `;
      while (node.next) {
        node = node.next;
        string += `${node.name}(${node.data}), `;
      }
      console.log(string);
    });
  }

  edge_weight(id1, id2) {
    // let list = this.hash[id1];
    return this.hash[id1].findNode(id2);
  }
}

const Shizzle = new AdjacencyList(edgeList);
Shizzle.createHash();
// console.log(Shizzle.edge_weight(9, 14));
Shizzle.printAdjList();
