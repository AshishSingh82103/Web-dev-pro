/* 1. Write a function named `makeTea` that takes one parameter, `typeOfTea` and return a string like `"Making green tea"` when called with `"green tea"`.
stores the result in varible named `teaOrder`.
*/

function makeTea(typeOfTea) {
    return`Making ${typeOfTea}`

}
let teaOrder = makeTea("green tea");
console.log(teaOrder);

/* 2. Create a function named `orederTea` that takes one parameters, `teaType`. Inside this function create another function named `confirmOrder` that returns a msg like `"Order confirmed for chai"`.
call c`onfimOrder` from within `orderTea` and return the result
*/
function orderTea(teaType) {
    function confirmOrder() {
        return`Order confirmed for chai.`
    }
    return confirmOrder();

}

let orderConfirmed = orderTea("chai");
console.log(orderConfirmed);

/* 3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
store the result in varible named totalCost.

 */

 let calculateTotal = (price, quantity) => {
    cost = price * quantity;
    return cost;

}
 let totalCost = calculateTotal(10 , 5);
 console.log(totalCost);
 
/* 4. Write a function named `processedTeaOrder` that takes another function `makeTea` as a parameter and calls it with the arguments `"earl grey"`
Return the result of calling `makeTea`.
*/
function makeTea(typeOfTea) {
    return `makeTea: ${typeOfTea};`
        
}
function processedTeaOrder(makeTea) {
     return makeTea("earl grey")
    
}
let order = processedTeaOrder(makeTea);
console.log(order);



/* 5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType` and return a `message like
"Making green tea" .
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
 */

function createTeaMaker(name) {
    let socre =  100;
    return function (teaType) {
        return `Making ${teaType} ${name} ${socre}`

    }
}

let teaMaker = createTeaMaker("ashish");
console.log(teaMaker("green tea"));

