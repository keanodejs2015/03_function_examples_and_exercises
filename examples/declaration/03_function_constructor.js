// All functions are objects, they are instances of Function:
var x = function () {
	
}

console.log(x instanceof Function); // -> true

// Therefore, functions get their methods (inherite) from 
// Function.prototype.

// so you can create a new function by saying new Function();
var y = new Function();

// Don´t use this.
// it is an expesive way to make a function
