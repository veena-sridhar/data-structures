var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(); 
  child.value = value;
  // debugger;
  this.children.push(child);
  
};

treeMethods.contains = function(target, currentNode, flag) {
  //current node that we're going to inspect. Starts with parent node;
  var currentNode = currentNode || this;
  //flag if we found something or not
  var flag = flag || false;

  //loop through all children of current node
  for (var i = 0; i < currentNode.children.length; i++) {

    //base case: this level has the value
    if (currentNode.children[i].value === target) {
      flag = true;
    }

    //recursive case inspect children
    if (currentNode.children[i].children.length > 0) {
      var result = this.contains(target, currentNode.children[i], flag);
      if (result === true) {
        flag = true;
      }
    }

  }
  
  return flag;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
