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

treeMethods.contains = function(target) {
  //current node that we're going to inspect. Starts with parent node;
  var currentNode = currentNode || this;
  //flag if we found something or not
  var flag = flag || false;
  var helperFunction = function (currentNode) {
    for (var i = 0; i < currentNode.children.length; i++) {
    //loop through all children of current node

      //base case: this level has the value
      if (currentNode.children[i].value === target) {
        flag = true;
      }

      //recursive case inspect children
      if (currentNode.children[i].children.length > 0) {
        var result = helperFunction(currentNode.children[i]);
        if (result === true) {
          flag = true;
        }
      }

    }
    
  };
  helperFunction(currentNode);
  return flag;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
