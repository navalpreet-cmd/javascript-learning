console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);
console.log("2" > 1);
console.log("02" > 1);


console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

// the reason is that an equality check == and comparisons >, >=, <=, < work differently.

// comparisons convert null to a number. Treating it as 0;

// that is why console.log(null >= 0); and another 2 are false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// === strickly check mean equality with data type.

console.log("2"===2);
console.log("2"==2);

//JS is a dynamic key language because In JS, We do not stricly declare varible with type of value but in C language we write int a; means a will contain only number but in JS let a; here a can be number, string.

const id = Symbol(123);
const empId = Symbol(123);
console.log(id==empId);

let subjects = ["Maths", "Hindi", "English"];
const personObj = {
    name : "Naval",
    empId : 1
}
console.log(subjects);
console.log(personObj);

const myFun = function() {
    console.log("Hello World!");
}
console.log(typeof myFun);// it will return a function but it is called object function




//******************************************************Stack and heap Memory ********************************************** */

// there are two type of memory 1) stack and 2) heap

// 1) Primitive data types are included in stack.
// 2) Non Primitive data types are included in heap.
let myName = "Naval";
// this is string 
let myAnotherName = myName;

myAnotherName = "Preet";
console.log(myName);
console.log(myAnotherName);

let user = {
    name : "Naval",
    id : 1
}

let user2 = user;

user2.name = "Preet";
console.log(user.name);
console.log(user2.name);

