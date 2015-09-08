// Here we can not access plus() from outside
// and we need to only set counter to 0 once

function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();    
    return counter; 
}