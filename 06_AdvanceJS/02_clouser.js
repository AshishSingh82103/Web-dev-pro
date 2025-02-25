/* In JavaScript, a closure is a function that has access to its own scope, the outer function's variables, and global variables, even after the outer function has finished executing.
 This enables functions to "remember" their environment, allowing them to access variables from their outer scope even after the outer function has executed */

 function outer () {
    let value = 4;
    return function() {
        value++;
        return value;
    }
 }

 let increment = outer();
 console.log(increment());
 console.log(increment());
 