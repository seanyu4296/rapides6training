var getProduct = (productId = 1000, type = "software") => {
    console.log(productId + type);
}
getProduct(undefined, 'hardware'); // 1000 hardware
//undefined results to using the default

var getTotal = function (price, tax = 0.07) {
    console.log(arguments.length);
}
getTotal(5) // 1 ... it completely ignores the default parameter 