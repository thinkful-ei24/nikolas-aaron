'use strict';

function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function () {
      return 'Hello';
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
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}



const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

// 2nd Drills Object page

function makeStudentsReport(data) {
  let keyed = data.map(obj => {
    return `${obj.name}: ${obj.grade}`;
  });
  return keyed;
}





let studentArray = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

function enrollInSummerSchool(students) {
  let summerSchool = students.map(obj => ({
    name: obj.name,
    status: 'In summer school',
    course: obj.course
  }));
  return summerSchool;

}
console.log(enrollInSummerSchool(studentArray));




const thisOne = function findByID(items, idNum) {
  return items.find(obj => obj.id === idNum);
};


// const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];
// console.log(thisOne(data, 2));


function validateKeys(object, expectedKeys) {
  let keyedObjectNames = Object.keys(object);
  if (keyedObjectNames.length !== expectedKeys.length) {
    return false;
  } else {
    for (let i = 0; i < expectedKeys.length; i++) {
      if (!keyedObjectNames.find(key => key === expectedKeys[i])) {
        return false;
      }
    }
    return true;
  }
}


const loaf = {
  flour: 300,
  water: 210,
  hydration: function () {
    return this.water / this.flour * 100;
  }
};

console.log(loaf.flour, loaf.water, loaf.hydration());






const anotherOne = {
  foo: 12,
  bar: 'a property',
  fum: 20,
  quux: 'another string',
  spam: 'this is some spam'
};

for (let key in anotherOne) {
  console.log(`${key} ${anotherOne[key]}`);
}

dog.forEach(obj => console.log(`${obj.name} ${obj.jobTitle}`));

let hobbit = {
  meals: ["breakfast", "second breakfast", "elevenses", "lunch", "afternoon tea", "dinner", "supper"]
}

console.log(hobbit.meals[3]);

let dog = [{name: "Aaron", jobTitle: "Friend"},{name: "Will Smith", jobTitle: "Emotional Helper"},{name: "Aaron2", jobTitle: "Clone"}];

