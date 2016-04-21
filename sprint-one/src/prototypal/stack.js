var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.myLength = 0;
  return obj;
};

var stackMethods = {
  push: function(value){
    this.storage[this.myLength] = value;
    this.myLength++;
  },
  pop: function(){
    var popped = this.storage[this.myLength-1];
    delete this.storage[this.myLength-1];
    this.myLength--;
    return popped;

  },
  size: function(){
    return this.myLength > 0 ? this.myLength : 0;
  }
};


