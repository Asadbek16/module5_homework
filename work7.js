var array = [1, 2, 3, 0, null, "a", 4, 5];
var evenCount = 0, oddCount = 0, zeroCount = 0;

for (var i = 0; i < array.length; i++) {
  var element = array[i];

  if (typeof element === "number") {
    if (element === 0) {
      zeroCount++;
    } else if (element % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
}

console.log("Количество четных элементов: " + evenCount);
console.log("Количество нечетных элементов: " + oddCount);
console.log("Количество нулевых элементов: " + zeroCount);