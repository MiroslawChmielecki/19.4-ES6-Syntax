"use strict";

var sayHello = function sayHello() {
    return alert('Hello world !');
};
sayHello();

//Exercise 1
var first = "Hello";
var second = "world !";
var connectWords = first + " " + second;

console.log(connectWords);

//Exercise 2
var multiply = function multiply() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a * b;
};

console.log("Result of multiplication is " + multiply(6));

//Exercise 3
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var sum = 0;
    args.forEach(function (arg) {
        sum = sum + arg;
    });
    return sum / args.length;
};

console.log("Average is " + average(1, 2, 3, 4, 5, 6, 7));

//Exercise 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log("Average grades is " + average.apply(undefined, grades));

//Exercise 5
var myData = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = myData[2],
    lastname = myData[4];


console.log("Name is " + firstname + " and lastname is " + lastname);
