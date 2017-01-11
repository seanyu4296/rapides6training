var price = 5.99,
    quantity = 10;

var productView = {
    price,
    quantity,
    calculateView() {
        return console.log("hello");
    },
    "sean yu"() {

    }
}
console.log(productView.calculateView()); //no need to write the function extension word
// without key word as if we were using an arrow function
//this key word = to the context
console.log(productView["sean yu"]());// it is valid

//DYNAMIC FIELD NAMES

var field = 'dynamicField'
var p = {
    [field + "sean"] : price
}
console.log(p); //dynamic fields is possible through brackets also works with methods

var sean = {
    get[field] () { return true},
    set[field] (value) {}
}

console.log(sean.dynamicField); //also works with getter and setters