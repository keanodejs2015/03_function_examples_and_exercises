// A function can access all variables defined inside the function

function myFunction() {
    var a = 4;
    return a * a;
}

// But a function can also access variables defined outside the function

var a = 4;
function mySecondFunction() {
    return a * a;
}

console.log(myFunction());
console.log(mySecondFunction());