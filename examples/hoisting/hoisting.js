// You can declare a variable after it is used.
// Javascript will automatic raise (hoist) 
// declarations to the top of the scope/function

// this will work!

x = 5; // Assign 5 to x
console.log(x);
var x; // Declare x

// You can not initialize later
// this will not work!

var x = 5; // Initialize x
console.log(x + y);
var y = 7; // Initialize y

// Function declaration are hoisted
// this will work!
myFunction(5);
 
function myFunction(y) {
  	return y * y;
}

// Functions defined using an expression are not hoisted
// this will not work

myFunction(5);
 
var myFunction = function (y) {
  	return y * y;
} 

// Basic rule
// Declare variables in the top of the scope
// Follow the rules and coding culture you know from java

