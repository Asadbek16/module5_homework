var array = [1, 1, 1, 1, 1];
var all = array.every(function(element) {
  return element === array[0];
});

console.log(all);