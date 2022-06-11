console.log("Hello");

// alert('How u doin');

//variables
var b = "smoothie";
console.log(b);

var someNumber = 45;
console.log(someNumber);

//Manipulate DOM with Javascript
// It's just a fancy way of saying change HTML with Js

// var age = prompt("What is your age");
// console.log(age);
// document.getElementById("someText").innerHTML = age;

//Numbers' in Javascript
var num1 = 5.7;
num1++;
num1--;
num1 = num1 % 5;
num1 += 20;
console.log(num1);

//Functions
function func() {
  console.log("this is a function");
}

func();

// Lets create a function that take in a name and says hello followed by your name

function greeting(yourname) {
  var result = "Hello" + " " + yourname;
  console.log(result);
}
// var name = prompt("What is your name?");
// greeting(name);

function sum(a, b) {
  var result = a + b;
  console.log(result);
}
// sum("hi", " mayur");

// While loops

// var num = 0;

// while (num < 100) {
//   num += 6;
//   console.log(num);
// }

// for loop
// for (let num = 0; num <= 10; num++) {
//   console.log(num);
// }

// Data types
let yourAge = 10; //number
let yourName = "Bob"; //string
let name = {
  first: "Jane",
  last: "Doe",
}; //object (in python its a dictionary)
let truth = false; //boolean
let groceries = ["apple", "banana", "oranges"]; //arrays or lists in python
let random; //undefined
let nothing = null; /*value (null)*/

// Strings in Js (common methods)
let fruit = "banana,apple,oranges";
let moreFruits = "banana\napple";
console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf("q")); //not exist -1
console.log(fruit.indexOf("nan"));
console.log(fruit.slice(2, 6));
console.log(fruit.replace("nan", "123"));
console.log(fruit.toUpperCase());
console.log(fruit.split(",")); //split words by comma
console.log(fruit.split("")); //split by character

//arrays
let fruits = ["apples", "oranges", "banana", "pineapples"];
fruits = new Array("applese", "oranges", "banana", "pineapples");
fruits[2] = "pear";
console.log(fruits[2]); //access value at index
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//array common methods
console.log("to string", fruits.toString());
console.log(fruits.join("*"));
console.log(fruits.pop(), fruits); //removes last items
console.log(fruits.push("guava"), fruits); //appends
fruits[fruits.length] = "kiwi"; //same as push
console.log(fruits);
fruits.shift(); //removes first element from array
fruits.unshift("berries"); //add element to first poisition into an array
console.log(fruits);

let vegetables = ["potato", "reddish", "cabbage"];
let allgroceries = fruits.concat(vegetables);
console.log(allgroceries);
console.log(...fruits, ...vegetables); //copy all or part of arrays or object
console.log(allgroceries.sort()); //ascending sorting
console.log(allgroceries.slice(1, 4));
console.log(allgroceries.reverse());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 3, 4, 6, 9];
console.log(someNumbers.sort()); //no ascending sorting
console.log(
  someNumbers.sort((a, b) => {
    return a - b;
  })
); //sorts in ascending order
console.log(
  someNumbers.sort((a, b) => {
    return b - a;
  })
); //sorts in descending order

let emptyArray = new Array();
for (let j = 0; j < 10; j++) {
  emptyArray.push(j);
}
console.log(emptyArray);

//object in javascript
//dictionaries in python

let somename = {
  first: "Rafeh",
  last: "Qazi",
  age: 25,
  height: 170,
  studentInfo: function () {
    return this.first + " " + this.last; //don't use arrrow notation function with this
  },
};

console.log(somename.first);
somename.age++;
console.log(somename.age);
console.log(somename.studentInfo());

//Conditionals, Control flows (if else )
//18-35 is my target
//36> not my target

// var age = prompt("What is your age?"); //let doesn't work with prompt
// if ((age) => 18 && age <= 35) {
//   status = "On my target"; //in future status may be removed from js
//   console.log(status);
// } else {
//   status = "Not my target";
//   console.log(status);
// }

//Switch Statement
//different between weekdays and weekend
//day 0 --sunday
//day 6 ==saturday

switch (6) {
  case 0:
    text = "weekend";
    break;
  case 1:
    text = "weekend";
    break;
  case 6:
    text = "weekend";
    break;
  default:
    text = "weekday";
}

console.log(text);
