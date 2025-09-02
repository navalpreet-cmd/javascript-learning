"use strict"; // treat all JS code as newer version

const accountId = 123;
let accountEmail = "abc@gmail.com";
var accountPassword = "12345";
// accountCity = "Jaipur";   // It will give error every time you use "use strict" with it
// accountId = "1234" // here, the error will be show because it is not allowed
console.log(accountId);

console.table([accountId, accountEmail, accountPassword]);

// prefer not to use var because of issue in block scoping and function scoping.
// if variable is declared but not assigned then by default "undefined" value will be show.

// alert("hello");  // if we are working with browser (html, css) then it will work but when we are using node.js it will not work. Here it will give error

console.log(23+2); // it will not show any error but it is not good for code readability

//code readability should be high

let name = "Naval";
let age = 32;
let isLoggedIn = false;

console.table([name, age, isLoggedIn]);
console.table([typeof name, typeof age, typeof isLoggedIn]);

// There are two types of data types in JS 
// 1) Primitive (stand alone value type of datatype)
// 2) Non Primitive (reference type)

//*********************Primitive datatype***********************

// 1) Number
// 2) BigInt
// 3) string 
// 4) Boolean
// 5) Symbol
// 6) null
// 7) undefined

//*********************Non Primitive data type*****************

// 1) Object
// 2) Array
// 3) function


console.log(typeof "name");  // string

console.log(typeof null); // object

console.log(typeof undefined); // undefined
