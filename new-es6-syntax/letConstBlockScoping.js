// no hoisting when using let
console.log(productId);
let productId = 12;
//By using let we make sure that we declare a variable before we use it.


// there is now block scoping 
// we can redefine the variable in a block
let productId = 12;
{
    let productId = 2000;
}
console.log(productId); //12

{
    productId = 2000;
}
console.log(productId); //refernece error



function a() {
    p = 12;
} // temporal dead zone

let p = null;
a();
console.log(p); //12


let productId = 42;
for(let productId= 0; productId < 2; productId ++) {} // productId is scoped in for loop

const MARKUP_PCT;
console.log(MARKUP_PCT); // syntaxerror
//const is also block scoping