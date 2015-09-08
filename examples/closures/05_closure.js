// The variable add is assigned the return value 
// of a self-invoking function -> function() {return counter += 1;}

// first the variable counter is declared and assigned a value 0
// then a function is returned (and stored in add).
// everytime this function is invoked it returns 
// the previous counter value + 1 (and increments the counter with one)

// counter can not be access anymore, but it still is part 
// of the fuction scope, and therefor still lives in memory.


var add = (function () {
    var counter = 0;
    return function () {
    	counter += 1; // increment counter with 1
    	return counter; 
    }
})();

add();
add();
add();

// the counter is now 3