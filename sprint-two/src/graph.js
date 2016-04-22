

// ------------------------
// Instantiate a new graph
var Graph = function() {
  var storage = [];
  var edgeStorage = [];
  this.storage = storage;
  this.edgeStorage = edgeStorage;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage.push(node);

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === node) {
      this.storage.splice(i, 1);
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    for (var i = 0; i < this.edgeStorage.length; i++) {
      if (this.edgeStorage[i] == [fromNode, toNode]) {
        return true;
      }
    }
    return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //possibility 1: this.edgeStorage.push({fromNode: toNode});
  //possibility 2: this.edgeStorage.push({from: fromNode, to: toNode})
  this.edgeStorage.push([fromNode, toNode]);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


