var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.myLength = 0;
};
 
Queue.prototype.enqueue = function(value) {
  this.storage[this.myLength] = value;
  this.myLength++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[0];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  delete this.storage[this.myLength - 1];
  this.myLength--;
  return dequeued;
};

Queue.prototype.size = function() {
  return this.myLength > 0 ? this.myLength : 0;
};

