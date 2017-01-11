let eventSymbol = Symbol('calculate event');
const CALCULATE_EVENT_SYMBOL = Symbol('calc');

let s = Symbol('event');
let s2 = Symbol('event2');
console.log(s == s2); //false

let s3 = Symbol.for('event');
let s4 = Symbol.for('event');
console.log(s3 == s4); //true

let s5 = Symbol.for('event');
let description = Symbol.keyFor(s5);
console.log(description); //event


//use it for objects
let article = {
    title: "sean",
    [Symbol.for('article')]: 'My Article'
}

let value = article[Symbol.for('article')]
console.log(value); // 'My Article'
console.log(Object.getOwnPropertyNames(article)); // ['title'] 
console.log(Object.getOwnPropertySymbols(article)); // [Symbol(article)]
