var LinkedList = function () {
  var obj = {};
  obj.head = {};
  obj.tail = {};


  obj.addToTail = function (value) {
    //if head is empty, both head and tail point to the same
    //value
    var newNode = Node();
    newNode.value = value;

    if (this.head.value === undefined) {
      //have both head and tail point to the value
      this.head = newNode;
    } 
    //when you add to tail, move the tail pointer to new node
    
    //and make the old tail point to the new one
    this.tail.next = newNode;
    this.tail = newNode;
  };

  obj.removeHead = function () {
    var removed = this.head;
    this.head = this.head.next;
    return removed.value;
  };

  obj.contains = function (value) {
    var currentObj = this.head;
    while (true) {
      if (currentObj.value === value) {
        return true;
      } 
      if (currentObj.next === null) {
        return false;
      }
      currentObj = currentObj.next;
    }
  };
  return obj;
};
var Node = function () {
  var obj = {};
  obj.value = null;
  obj.next = null;
  return obj;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

 //complexity of add: O(1)
 //comnplexity of removeHead: O(1)
 //complexity of contains: O(n)
