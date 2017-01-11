let title = 'Santa Barbara Surf';
console.log(title.startsWith('Santa')); //true
console.log(title.endsWith('Surf')); //true
console.log(title.includes('ba')); //true



var surfer = "\u{1f3c4}";
console.log(surfer.length);
console.log(surfer); //surfer emoji


var emojis = "\u{1f30a}\u{1f3c4}\u{1f40b}";
console.log(Array.from(emojis).length);
console.log(emojis);


var title2 = "Mazatla\u0301n";

console.log(title2 + ' ' + title2.length);
//properly handle 
console.log(title2 + ' ' + title2.normalize().length);
console.log(title2.normalize().codePointAt(7).toString(16));
console.log(String.fromCodePoint(0x1f3c4));

let output = String.raw`${title} \u{1f3c4}\n`;
console.log(output);


let wave = `\u{1f30a}`;
console.log(wave.repeat(10));