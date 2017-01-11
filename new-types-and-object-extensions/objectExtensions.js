let a = {
    x: 1
}

let b = {
    y: 2
}

Object.setPrototypeOf(a, b);
console.log(a.y); //2


let c = {
    a: 1
}

let d = {
    a: 2,
    b: 2
}

console.log(Object.assign({}, c, d)); // a: 2, b:2 overwritten c 


let e = {
    a: 1
}, b = { a: 5, b: 2 };

Object.defineProperty(b, 'c', {
    value: 10,
    enumerable: false
});

let target = {}
Object.assign(target, e, b);
console.log(target); //{a : 5, b: 2}




let a = { a: 1 }, b = { a: 5, b: 2 }, c = { c: 20 };
Object.setPrototypeOf(b, c);
let target = {};
Object.assign(target, a, b);
console.log(target); //{a: 5, b:2}
//it's not going to walk through the prototype chain


//dati
let amount = NaN;
console.log(Object.is(amount, amount)); //true
//fixes
console.log(amount === amount); //false



let article = {
    [Symbol.for('article')]: 'My Article'
}
Object.getOwnPropertySymbols(article)