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
    var newNode = new Node(value);
    var currentNode = list.tail;
    //if there is only one node which is tail
    if (list.head === null && list.tail === null ) {
      list.head = newNode;
      list.head.next = newNode;      
    }

    if (list.head === list.tail) {
      list.head.next = newNode;
    }

    // if (list.head = null){
    //   list.head.next = newNode;
    // }
    list.tail = newNode;


  };

  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

  list.contains = function(target) {
    for (var key in this.node) {
      if (this.node.value === target ) {
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
