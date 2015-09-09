// Function declaration
function animal () {
	var name = 'fido';

	return function () {
		console.log(this.name);
	}
}
animal();
//console.log(animal());


