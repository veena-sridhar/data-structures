var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.myLength = 0;
  return obj;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.myLength] = value;
    this.myLength++;
  },
  dequeue: function () {
    var dequeued = this.storage[0];
    delete this.storage[0];
    this.myLength--;
    for (var key in this.storage){
      this.storage[key-1] = this.storage[key];
      delete this.storage[key];
    }
    return dequeued;
  },
  size: function(){
    return this.myLength > 0 ? this.myLength : 0;
  }
};


