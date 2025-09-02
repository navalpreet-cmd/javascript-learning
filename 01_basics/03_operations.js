let value = 3;
let negValue = -value;
console.log(negValue);


let str1 = "Hello";
let str2 = "Naval!";

let str3 = str1 + " " + str2;

console.log(str3);

console.log("1" + 1); // 11
console.log(1 + "1" + 1); //111
console.log(1 + 1 + "1"); // 21
console.log(true); // true
console.log(+true); // 1
console.log(-true); // -1
console.log(+""); // 0

let num1 = num2 = num3 = 2+2;
console.table([num1, num2, num3]);
// But we should not use this code because it is not a good code.

let gemCounter = 100;
gemCounter++;
console.log(gemCounter);
++gemCounter;
console.log(gemCounter);

let x = 2;
let y = x++;

console.log(x);
console.log(y); // x = 3; y = 2;

let a = 2;
let b = ++a; // 

console.log(a);
console.log(b); // a = 3; b =3;

