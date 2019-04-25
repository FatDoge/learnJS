function ArrayList() {
  const array = [];
  const swap = function(array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]]
  }
  this.insert = function(item) {
    array.push(item);
  }
  this.toString = function() {
    return array.join();
  }
}

