let invoiceNum = '1350';
console.log(`Invoice Number: \${invoiceNum}`); //escaping backslash = no literels taking place


let message = `A
B
C` //new lines and tabs are maintained in literals
console.log(message);



let  c = '1350';
console.log(`${"invoice"+ c}`); //we are allowed to use expresions

function showMessage(message) {
    let d = '90';
    console.log(message);
}

let e = '20';
showMessage(`Invoice Number: ${c}`); // interpolation happens first with respect to the lexical scope


function processInvoice(segments) {
    console.log(segments);
}

processInvoice `template`; //["template"]


function bang(segments, ...values) {
    console.log(segments);
    console.log(values);
}

let invoice = '1350';
let amount = '2000';
bang `Invoice: ${invoice} for ${amount}`; //["Invoice: ", " for ",""] [1350, 2000]