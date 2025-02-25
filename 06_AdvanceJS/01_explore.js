// synchronous programming => where execution scope execute one by one
console.log(15);

// Apply timer function
function sayHello() {
    console.log('I would like to say Hello');
    
}

setTimeout(() =>{
    sayHello();

},4000)

for (let index = 0; index < 15; index++) {
    console.log(index);
}

// Asynchronous programming => 

