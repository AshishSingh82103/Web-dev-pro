/*Prototypes => it means get some extra properties and extra functionallty in any given data types 
and everything in javascript is called object
*/

let computer = {cpu: 12}

let lenvo = {
    screen: "HD",
    __proto__: computer,

}

let tomHardware = {}

// console.log(`computer`, computer.__proto__);

// console.log(`lenvo`, lenvo.__proto__);



let genricCar = {tyers: 4}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genricCar);

console.log(`tesla `,tesla.tyers);
console.log(`tesla `, Object.getPrototypeOf(tesla));






  


