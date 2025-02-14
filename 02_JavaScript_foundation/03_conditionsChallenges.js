// 1. Check if nuber is greater than another number:

let num1 = 5;
let num2 = 7;

if(num1 > num2) {
    console.log(true); 
}  else {
    console.log(false);
    
}

// 2. Check is string is equal to the another string

let user_name = 'Ashish';

let another_user = 'Ashish';

if(user_name ==  another_user) {
    console.log(`yes string ${user_name} is same string $another_user}`);
    
} else {
    console.log(`Not same`); 
}

// 3. Check if a variable is number or not

let score = 44;

if(typeof score === 'number') {
 console.log(`Yes score is ${score} number`);
} else {
    console.log(`Yes score is ${score} not a number`);
}

//4. Check if a boolean value is ture or false

let isTeaReady = false;
if(isTeaReady) {
    console.log('Tea is ready');
} else {
    console.log('Tea is not ready');
}    

// 5. Checking if array is empty or not:

let items = [];

if(items.length === 0) {
    console.log('Array is empty')
} else {
    console.log('Array is not empty');
}    