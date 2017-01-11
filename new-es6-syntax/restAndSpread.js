var newPriceArray = Array(...[,,]);
console.log(newPriceArray); // [undefined,undefined]    trailing comma

var codeArray = ["A", ..."BCD", "E"];
console.log(codeArray); // ["A", "B", "C", "D", "E"]