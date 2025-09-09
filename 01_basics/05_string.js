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



// Write a function processString(str) that takes a string and returns a new string with the following modifications:

// Remove all whitespace from the beginning and end of the string.

// Convert the entire string to lowercase.

// Replace all occurrences of the word "javascript" with "JS".

// Return the modified string.

function processString(str){
    let newString = str.trim();
    newString = newString.toLowerCase();
    newString = newString.replaceAll("javascript","JS");
    //The trim() method in JavaScript is a built-in function of String objects designed to remove whitespace characters from both ends (leading and trailing) of a string. It returns a new string with the whitespace removed, leaving the original string unchanged. 
    return newString;
}
let str = "   I love JavaScript! JavaScript is awesome.   ";

let newReturnedString = processString(str);
console.log(newReturnedString);

// Write a function countVowels(str) that takes a string and returns the number of vowels (a, e, i, o, u) it contains. The function should count both uppercase and lowercase vowels.
function countVowels(str){
    let vowelString = "aeiou";
    let count = 0;
    for(let char of str){
        if(vowelString.includes(char))
        {
            count++;
        }
    }
    console.log(`Number of vowels ${count}`);
}
countVowels("Hello World!");
countVowels("My name is Naval");


let yourName = "Naval Preet";
let space = yourName.replaceAll(" ","");
console.log(space);


// unique palindrome substrings input: "abba"

let givenString = "abba";
let splitStr = givenString.split("");
let count = 0;
let substr = "";
// for(let char of givenString){
//     substr = substr + char;
//     let palindromeString = substr.split('').reverse().join('');
//     if(substr == palindromeString){
//         count++;
//         console.log(substr)
//     }
// }
// console.log(count);
for(let i = 0; i < givenString.length ; i++){
    for(let j = 1; j < givenString.length; j++){
        if(givenString[i] == givenString[j]){
            
        }
    }
}