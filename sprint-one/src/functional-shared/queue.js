var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    storage: {},
    myLength: 0,
  };
  return _.extend(obj, queueMethods);
};

var queueMethods = {
  enqueue: function(){},
  dequeue: function(){},
  size: function(){
    return myLength > 0 ? myLength : 0;
  }
};


