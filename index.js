// Namaste JavaScript
// link ::https://drive.google.com/file/d/18G0TmFa3T1HFh2Boo9eb3xgpuZcPVaHU/view?usp=sharing
/** 
// VALUES::

//1. OBJECTS::
const person = {
  firstName: 'Jonas',
  age: 23,
};
//2. PRIMITIVE::
const c = 23;
const b = 43;

// TYPES OF PRIMITIVE VALUES

// 1.Number::
const jonasAgeIs = 25;
// 2.Strings::
const myNameIs = 'Jonas';
// 3.Boolean::
const areMen = true;
// 4.Undefined::
// 5.Null::
// 6.Symbol::
Symbol('foo') === Symbol('foo'); // false
// 7.BigInit::

// Passing function into other function::

function cutPieces(fruit) {
  const result = fruit * 4;
  return result;
}

function juiceProccessor(firstFruit, secondFruit) {
  const firstFruitPieces = cutPieces(firstFruit);
  const secondFruitPieces = cutPieces(secondFruit);
  const juice = `Juice of ${firstFruitPieces} pieces of Apple and ${secondFruitPieces} pieces of Orange.`;
  console.log(juice);
}
juiceProccessor(2, 3);

// 3 differnt Types of Functions::

// 1.Function declaration::
function myName() {
  //transform data
}
// 2.function expression::
const firstName = function () {
  // transform data
};
// 3.arrow function::
const lastName = () => {
  // transform Data
};

// NOTE:: EVERY TYPES OF FUNCTION WORKS IN THE SAME ORDER::HAVE "FUNCTION_NAME" AND "PARAMETER" AND "ARGUMENTS".BUT ARROW FUNCTION HAVE NO "THIS" KEY WORDS.

// DOM MANIPULATIONS::

// How to select the query:: and modify
const header = document.querySelector('.header');
header.textContent = 'Namaste JavaScript!';
header.style.color = 'red';
console.log(header.textContent);

// How to Insert Data::

const sec = document.querySelector('section');

const para = document.createElement('h1');

para.textContent = 'JavaScript is the Best language in the coiding world!';

sec.appendChild(para);

// bind,call and apply::

const person1 = {
  firstName: 'Nitesh',
  lastName: 'Yadav',
};

const full = function (hometown, state) {
  console.log(`${this.firstName} ${this.lastName} ${hometown} ${state}`);
};

const person2 = {
  firstName: 'Golu',
  lastName: 'Yadav',
};

// call appy
full.call(person1, 'Mau', 'Uttar Pradesh');

// apply method same as call but pass arguments in arraylist
full.apply(person2, ['Bhiti', 'Delhi']);

// bind returns the function ::so we have to create into ....
const fullName = full.bind(person1, 'Bareilly', 'Uttar Pradesh');
fullName();
console.log(fullName);

// async defer
//  ASYNC:: HTML FETCH RUN =>fetch firstly fetch then executed in immediately
// defer:: HTML FETCH RUN =>fetch and then wait for parse html completely.

// OOP's
// ES6::
*/
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// Solution::

/** 
class Car {
  // instances
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  //   methods
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} running at the speed of ${this.speed}.`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} running at the speed of ${this.speed}.`);
  }
  get speedUS() {
    console.log(this.speed * 1.6);
  }
  set speedUS(speed) {
    this.speed = this.speed / 1.6;
    console.log(this.speed);
  }
  static fullName() {
    console.log(`Hello World!`);
  }
}

// create class constructor::
const car = new Car('Ford', 120);
// whole class
console.log(car);
// access the instances
console.log(car.make, car.speed);
// access the method::
car.accelerate();
car.brake();
// access the get
car.speedUS;
// access the set
car.speedUS = 50;
// acceess the static
Car.fullName();
 
class EV extends Car {
  constructor(make,speed,course) {
    super(make, speed);
    this.course = course;
  }
}
const ev = new EV('FORD', 120, true);
console.log(ev);
*/