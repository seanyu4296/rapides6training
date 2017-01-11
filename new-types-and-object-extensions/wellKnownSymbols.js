//symbols can be used in meta programming
// meta programming involves looking deeply in objects and how the js engine operates
// get to know more es6 = well known symbols


let Blog = function () {

}

Blog.prototype[Symbol.toStringTag] = 'Blog Class';
//toStringTag is the well-known symbol
let blog = new Blog();
console.log(blog.toString()); // [object Blog Class]
//we are altering how the javascript engine does toString


let values = [8, 12, 16];
values[Symbol.isConcatSpreadable] = false;
// we prevent the area from auto spreading
console.log([].concat(values)); // normally [8, 12, 16] now [[8, 12, 16]]


let sum = values + 100;
console.log(object); // 8, 12, 1600


values[Symbol.toPrimitive] = function (hint) {
    console.log(hint); //default
    return 42;
}
let sum = values + 100;
console.log(sum); // 142