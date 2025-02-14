//  Number

let balance = 120;
let anotherBalance = new Number(120);

console.log(anotherBalance); // [Number: 120]
console.log(balance); // 120

console.log(typeof anotherBalance); // object


console.log(typeof (balance)); // number
console.log( typeof typeof (balance)); // string

//  boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended way

// null and undefined

let first_Name = undefined;
let last_Name = null; 

console.log(first_Name); // undefined
console.log(last_Name); // null


console.log( typeof first_Name); // undefined
console.log(typeof last_Name); // object

// String
let myString = "hello"
let myStringOne = "Hola"

console.log(myString + " " + myStringOne); // old method


let user_name = 'Ashish';
let greet_message = 'Hello'

console.log(`Name: ${user_name} and message is ${greet_message} !`); // string interpoliation new method 


// symbol = > unique value

let symbol1 = Symbol('ashish');
let symbol2 = Symbol('ashish');

console.log(symbol1 == symbol2); // false




