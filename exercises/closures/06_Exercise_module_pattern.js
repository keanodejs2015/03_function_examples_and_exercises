// By using closure and the Module pattern
// Create an object called person
// It should have a name, lastName, cpr, phoneNumber and email.
// they should all be private members

// return an object with getters and setters to the private variables

var person = (function () {
  
  var name = '';

  return {
    getName : function () {
      return name;
    },
    setName : function (x) {
      name = x;
    }
  }
})();


var p = Object.create(person);
p.setName('Claus');
console.log(p.getName());

