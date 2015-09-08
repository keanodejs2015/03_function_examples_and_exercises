// nobody will be able to change 'counter' without calling add()

function add() {
    var counter = 0;
    counter += 1;
    return counter;
}

console.log(add()); // 1
console.log(add()); // 1
console.log(add()); // 1

// the counter should now be 3, but it does not work !