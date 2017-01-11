let fn = function calc() {
    return 0;
}
console.log(fn.name); // calc

let fn2 = () => {

}
console.log(fn2.name); //fn2


let newFn = fn;
console.log(newFn.name); //calc   function name remains the same



class Calculator {
    constructor() {

    }
    add() {

    }
}

let c = new Calculator();
console.log(Calculator.name); //Calculator
console.log(c.add.name); //add
console.log(c.name); //undefined


//Function.name isn't writable 
// but it's configurable with Object.defineProperty()