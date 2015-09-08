var counter = 0; // this counter can be changed from outside

function add() {
    counter += 1;
    return counter;
}

console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3

// the counter is now equal to 3
// Counter can be changed without caling add()