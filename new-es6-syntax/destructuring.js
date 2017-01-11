let salary = ['a', 'b', 'c'];
let [a, , c] = salary; //skip elements
console.log(c);

let [low, ...remaining] = salary;
console.log(remaining); //["b", 'c']


let [z, x , y = '21231'] = salary;
console.log(y); //213121

let d = ['2', '3', ['4', '5']];
let [f, g, [s, d]] = salary;
console.log(s); //4 you can use array inside


//you can declare first then assign


function reviewSalary([low, average], high= '123') {
    console.log(average);
}
reviewSalary(['32000', '50000']) // 50000
//it works with fucntions too

let salary2 = {
    low : '32000',
    average : '5',
    high : '1203'
}

let {low :newLow, average: newAverage, high: newHigh} = salary2;
console.log(newHigh); // 1203
// we can declare and assign also 
let newLow2;
({low : newLow2} = salary2); //parenthesis is needed mmay result to SyntaxError


let [maxCode, minCode] = 'AZ';
console.log(maxCode, minCode); //we cam destructure strings

for (let[a,b] of [[5, 10]]) {
    console.log(a, b); 5, 10
}