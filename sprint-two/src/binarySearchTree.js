var BinarySearchTree = function(value) {

  var obj = Object.create(searchTreeMethods);
  obj.left = null;
  obj.right = null;
  obj.value = value;
  // obj.storage = {};
  // obj.storage.left = null;
  // obj.storage.right = null;
  return obj;
};

var findParent = function (tree, value) {
  if (value > tree.value) {
    //RECURSIVE CASEright is occupied
    if (tree.right) {
      return findParent(tree.right, value);
    } else {
    //BASE CASE right is free
      return tree;        
    }
  }
  if (value < tree.value) {
    //RECURSIVE CASE left is occupied
    if (tree.left) {
      return findParent(tree.left, value);
    } else {
    //BASE CASE left is free
      return tree;        
    }

  }
  if (value === tree.value) {
    return 'match';
  }

  return tree;
};

searchTreeMethods = {

  insert: function (value) {
    //if it's an empty tree, just add it    
    if (this.value === undefined) {
      this.value = value;
      return;
    }
    // find the parent node
    var parentNode = findParent(this, value);

    //create new Node
    var newNode = {};
    newNode.value = value;
    newNode.left = null;
    newNode.right = null;


    // if it's bigger - assign to right
    if (value > parentNode.value) {
      parentNode.right = newNode;
    } 
    // if it's smaller - assign to left
    if (value < parentNode.value) {
      parentNode.left = newNode;
    } 


  },

  contains: function (value) {
    if (findParent(this, value) === 'match') {
      return true;
    }
    
    return false;
  },

  depthFirstLog: function (callback) {
    var obj = this;
    var innerFunction = function (obj) {
      callback(obj.value);
      if (obj.right) {
        innerFunction(obj.right);
      }
      if (obj.left) {
        innerFunction(obj.left);
      }
    };
    innerFunction(obj);
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
