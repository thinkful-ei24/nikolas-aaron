'use strict';

function createMyObject() {
  return {
    foo: "bar",
    answerToUniverse: 42,
    "olly olly": "oxen free",
    sayHello: function () {
      return "Hello"
    }
  };
}


function updateOject(obj) {
  obj.foo = 'foo';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  obj.bar = 'bar';
  return obj;
}

// let myObj = {

// };

// console.log(updateOject(myObj));

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}
