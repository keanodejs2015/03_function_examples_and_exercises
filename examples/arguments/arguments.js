// you can pass in parameters like this

var add = function (x, y) {
	return x + y;
}

// or you could use the arguments array

var addMore = function () {

	for (var i = arguments.length - 1; i >= 0; i--) {
		console.log(arguments[i]);
	}
}
addMore(2, 3, 4, 5);