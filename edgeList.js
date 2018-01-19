// Person struct
class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class AdjacencyMatrix {
  constructor(edgeList) {
    this.edgeList = edgeList;
    this.matrix = [];
  }

  createMatrix() {
    for (i = 0; i < 20; i++) {
      this.matrix.push([]);
    }
    for (var i = 0; i < this.edgeList.length; i++) {
      let values = {
        person1: this.edgeList[i][0].id,
        person2: this.edgeList[i][1].id,
        weight: this.edgeList[i][2]
      };
      this.matrix[values.person1][values.person2] = values.weight;
      this.matrix[values.person2][values.person1] = values.weight;
    }
    console.log(this.matrix);
  }

  printEdgeList() {
    console.log(this.matrix);
  }
}

// An edge list of connections between people in the format
// [ORIGIN_PERSON, DESTINATION_PERSON, WEIGHT]
// Remember: This is an *undirected* graph.

const EDGE_LIST = [
  [new Person(1, 'Harry'), new Person(10, 'Alice'), 2],
  [new Person(1, 'Harry'), new Person(0, 'Bob'), 9],
  [new Person(1, 'Harry'), new Person(4, 'Michael'), 11],
  [new Person(1, 'Harry'), new Person(16, 'Peter'), 12],
  [new Person(2, 'Sally'), new Person(7, 'Dan'), 16],
  [new Person(2, 'Sally'), new Person(14, 'Mike'), 1],
  [new Person(2, 'Sally'), new Person(10, 'Alice'), 7],
  [new Person(3, 'Sam'), new Person(19, 'Boris'), 16],
  [new Person(4, 'Michael'), new Person(7, 'Dan'), 19],
  [new Person(4, 'Michael'), new Person(2, 'Sally'), 8],
  [new Person(4, 'Michael'), new Person(17, 'Andur'), 11],
  [new Person(4, 'Michael'), new Person(14, 'Mike'), 11],
  [new Person(5, 'Michelle'), new Person(3, 'Sam'), 9],
  [new Person(5, 'Michelle'), new Person(10, 'Alice'), 12],
  [new Person(5, 'Michelle'), new Person(6, 'Alok'), 12],
  [new Person(7, 'Dan'), new Person(19, 'Boris'), 13],
  [new Person(7, 'Dan'), new Person(10, 'Alice'), 11],
  [new Person(7, 'Dan'), new Person(5, 'Michelle'), 1],
  [new Person(8, 'Nick'), new Person(15, 'Adam'), 1],
  [new Person(8, 'Nick'), new Person(16, 'Peter'), 20],
  [new Person(8, 'Nick'), new Person(7, 'Dan'), 9],
  [new Person(8, 'Nick'), new Person(0, 'Bob'), 9],
  [new Person(9, 'Olga'), new Person(6, 'Alok'), 11],
  [new Person(9, 'Olga'), new Person(14, 'Mike'), 20],
  [new Person(9, 'Olga'), new Person(19, 'Boris'), 12],
  [new Person(10, 'Alice'), new Person(3, 'Sam'), 19],
  [new Person(11, 'Donald'), new Person(7, 'Dan'), 19],
  [new Person(12, 'Garrett'), new Person(10, 'Alice'), 15],
  [new Person(12, 'Garrett'), new Person(16, 'Peter'), 7],
  [new Person(12, 'Garrett'), new Person(17, 'Andur'), 16],
  [new Person(12, 'Garrett'), new Person(18, 'Tom'), 4],
  [new Person(13, 'Xin'), new Person(8, 'Nick'), 5],
  [new Person(13, 'Xin'), new Person(5, 'Michelle'), 3],
  [new Person(13, 'Xin'), new Person(18, 'Tom'), 12],
  [new Person(13, 'Xin'), new Person(15, 'Adam'), 17],
  [new Person(14, 'Mike'), new Person(12, 'Garrett'), 10],
  [new Person(15, 'Adam'), new Person(0, 'Bob'), 18],
  [new Person(15, 'Adam'), new Person(17, 'Andur'), 8],
  [new Person(16, 'Peter'), new Person(4, 'Michael'), 12],
  [new Person(16, 'Peter'), new Person(11, 'Donald'), 10],
  [new Person(16, 'Peter'), new Person(2, 'Sally'), 1],
  [new Person(17, 'Andur'), new Person(14, 'Mike'), 9],
  [new Person(17, 'Andur'), new Person(5, 'Michelle'), 17],
  [new Person(18, 'Tom'), new Person(14, 'Mike'), 9],
  [new Person(18, 'Tom'), new Person(16, 'Peter'), 14],
  [new Person(19, 'Boris'), new Person(2, 'Sally'), 5],
  [new Person(19, 'Boris'), new Person(18, 'Tom'), 3],
  [new Person(19, 'Boris'), new Person(12, 'Garrett'), 5],
  [new Person(19, 'Boris'), new Person(13, 'Xin'), 7]
];

const newEdgeList = new AdjacencyMatrix(EDGE_LIST);
newEdgeList.createMatrix();
newEdgeList.printEdgeList();

// Helper function to view the edge list
const printEdgeList = () => {
  let lines = [' -- Edge List -- '];
  EDGE_LIST.forEach(e => {
    lines.push(`${e[0].name} <-${e[2]}-> ${e[1].name}`);
  });
  console.log(lines.join('\n'));
};

// Uncomment the fillowing to display your edge list
// printEdgeList();

module.exports = EDGE_LIST;
