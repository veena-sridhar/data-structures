var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[length] = value;
    length++;

  };

  someInstance.dequeue = function() {
    var dequeued = storage[0];
    delete storage[0];
    length--;
    for (var key in storage){
      storage[key-1] = storage[key];
      delete storage[key];
    }
    return dequeued;
  };

  someInstance.size = function() {
    return length > 0 ? length : 0;
  };

  return someInstance;
};
