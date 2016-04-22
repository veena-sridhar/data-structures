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

treeMethods.contains = function(target, flag) {
  // var flag = flag || false;
  // for (var i = 0; i < this.children.length; i++) {
  //   if (this.children[i].value === target) {
  //     flag = true;
  //   } else if (this.children[i].children.length > 0) {
  //     this.children[i].contains(target, flag);
  //   }
  // }
  // return flag;

  while (currentNode.children.length > 0){
    for (var i = 0; i < currentNode.children.length; i++) {
      if (currentNode.value === target){
        flag = true;
      }
      
    }

  }





};



/*
 * Complexity: What is the time complexity of the above functions?
 */
