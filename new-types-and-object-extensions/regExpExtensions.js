//astro plane unicode support
//remember to write the u 
let pattern = /\u{1f3c4}/u;
console.log("\u{1f3c4}");
console.log(pattern.test('🏄'));


let pattern2 = /^.Surfer/u; //any one character before the word surfer
console.log(pattern2.test('🏄Surfer')); //false
//astro plane shit gets chopped up into two characters if without u


//the y flag - performs the search from the last index only
let pattern3 = /900/y;
console.log(pattern3.lastIndex); //0
console.log(pattern3.test('800900')); //false

//explicitly setting the lastIndex
pattern3.lastIndex = 3;
console.log(pattern3.test('800900'));


let pattern4 = /900/yg;
console.log(pattern4.flags); // show the flags of regex 
//order will alwaysz be "gimuy"