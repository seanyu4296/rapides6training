var a = () => 5.99;
console.log(typeof a); // return 5.99 typeof function


document.addEventListener('click', () => console.log(this);) // Window not #document


var invoice = {
    number: 123,
    process: () => console.log(this); // Window not 123
}


var invoice = {
    number: 1,
    process: function () {
        return () => console.log(this.number); //123 because the context is the function
    }
}
//you cannot a bind an arrow function to a new object
var newInvoice = {
    number: 456
}

invoice.process().bind(newInvoice)(); // 123
invoice.process().call(newInvoice); //123 same goes with .apply

console.log(a.hasProperty("prototype")); //false
