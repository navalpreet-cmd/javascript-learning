// String can be written in single and double quotes

console.log("Hello" + " " + "World");

const name = "Naval";
const repoCount = 50;

console.log(name + " " + repoCount + " value");

// this way is used before.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Game Name");
console.log(gameName[3]);

let position = gameName.at(3);
console.log(position);
position = gameName.charAt(5);
console.log(position);
console.log(gameName.charCodeAt(-5));
console.log(gameName.codePointAt(5));
console.log(gameName.concat(" Hello"))
console.log(gameName.endsWith("e"));
console.log(gameName.includes("Name"));
console.log(gameName.indexOf('e'));
console.log(gameName.lastIndexOf('e'));
console.log(gameName.length);
console.log(gameName.localeCompare());


let myString = "Hello";
// let newString = [];
// for(let i = myString.length - 1; i >= 0 ; i--){
//     newString = newString + myString[i];
// }
// console.log(newString);
let newString = myString.split("").reverse().join("");
console.log(newString);
if(newString===myString)
{
    console.log("palindrome")
}
else{
    console.log("not")
}





