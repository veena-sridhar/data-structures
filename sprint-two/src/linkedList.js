var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) {
    
    list.tail = {value: value};

  };

  list.removeHead = function() {
    delete list.head;
  };

  list.contains = function(target) {
    for(var key in this.node){
      if(this.node.value === target ){
        return true;
      }
    }
    return false;
  };

  return list;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
