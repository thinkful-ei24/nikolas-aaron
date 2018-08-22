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

// dog.forEach(obj => console.log(`${obj.name} ${obj.jobTitle}`));

let hobbit = {
  meals: ["breakfast", "second breakfast", "elevenses", "lunch", "afternoon tea", "dinner", "supper"]
}

console.log(hobbit.meals[3]);





let dog = [
  { name: "Aaron", jobTitle: "Friend", boss: "Will Smith" },
  { name: "Will Smith", jobTitle: "Owner" },
  { name: "Aaron2", jobTitle: "Clone", boss: "Aaron" }
];


let myFunction = function whoIsTheBoss(arr) {
  arr.forEach(obj => {
    if (obj.jobTitle === "Owner") {
      console.log(`${obj.jobTitle} ${obj.name} doesn't report to anybody`);
      // return obj.jobTitle + obj.name + 'does not report to anybody';     // Why doesn't this work?
    }
    else {
      console.log(`${obj.jobTitle} ${obj.name} reports to ${obj.boss}`);
      // return `${obj.jobTitle} ${obj.name} reports to ${obj.boss}`;        Why doesn't this work?
    }
  });

};

console.log(myFunction(dog));





function decode(obj) {
  let message = obj.message;
  let newAr = message.split(" ")
  let newAr2 = []
  for (let i = 0; i < newAr.length; i++) {
    if (newAr[i][0] === "a") {
      newAr2.push(newAr[i][1]);
    } else if (newAr[i][0] === "b") {
      newAr2.push(newAr[i][2]);
    } else if (newAr[i][0] === "c") {
      newAr2.push(newAr[i][3]);
    } else if (newAr[i][0] === "d") {
      newAr2.push(newAr[i][4]);
    } else {
      newAr2.push(" ");
    }
  }
  let boop = newAr2.join("");
  return boop;
}



let objectCode = {
  message: `craft block argon meter bells brown croon droop`
}

console.log(decode(objectCode));
