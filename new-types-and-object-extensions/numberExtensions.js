console.log(Number.parseInt === parseInt);
console.log(Number.parseFloat === parseFloat);

let s = 'NaN';
console.log(isNaN(s)); //true  the es5 way coerced
console.log(Number.isNaN(s)); //false   

let a = "8000";
console.log(isFinite(s)); //true
console.log(Number.isFinite(s)); //false


let sum = 409.2;
console.log(Number.isInteger(sum)); //false


//safe integer  is an integer accurately represented using floating point notation

let z = Math.pow(2, 53) - 1;
console.log(Number.isSafeInteger(z), z);
y = Math.pow(2, 53);
console.log(Number.isSafeInteger(y), y);


console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);