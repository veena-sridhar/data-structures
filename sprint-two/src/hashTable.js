

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.converter = getIndexBelowMaxForKey;
};

HashTable.prototype.insert = function(k, v) {
  
  var index = this.converter(k, this._limit);
  var storedInThisPosition = this._storage.get(index) || [];
  //check if there's already something in the position being
  //looked at
  for (var i = 0; i < storedInThisPosition.length; i++) {
    if (storedInThisPosition[i][0] === k && storedInThisPosition[i][1] === v) {
      return;
    } 

  }
  storedInThisPosition.push([k, v]);
  this._storage.set(index, storedInThisPosition);
  //if there is something
  //check if it has the same key/value pair that's being put in
    //if it does have the same key/value pair
    //return
    //if it does not
    //insert the key value pair

  //this._storage.set(index, v);



  //check how many items are actually stored in the array
  //it the number of stored items is greater than 75% of length, reindex
  // if (this._storage.length >= 0.75 * this._limit) {
  //   this.reindex();
  // }
};

HashTable.prototype.reindex = function() {
  //iterate through the size of the storage
  //copy to other array
  //recreate array
  // oldStorage = this._storage;
  // this.limit *= 2;
  // this._storage = [];
  // for (var i = 0; i < oldStorage.length; i++){
  //   this._storage.insert(this._storage.retrieve(oldStorage[index]));
  // }
  // //restore
  // this._storage.each(this.insert);
  //if it's not empty, insert


  //create new array
  //get the item
  //store it







};

HashTable.prototype.retrieve = function(k) {
  var index = this.converter(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = this.converter(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


