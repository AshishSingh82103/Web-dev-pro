let car = {
    make: "Toyota",
    model: "Cmery",
    year: 2020,
    start: function() {
        return `${this.make} car got started in ${this.year}`;
    }
}

console.log(car.start());


function Person(name, age) {
    this.name = name
    this.age = age
}
let jhon = new Person('Jhon Doe', 28);
console.log(jhon.name);


// ------------prototyple chain----------

function Animal(type) {
    this.type = type
}

Animal.prototype.speak = function () {
    return `${this.type} make a sound`
}

Array.prototype.ashish = function () {
    return `custom method ${this}`
}
let myArr  = [1, 2, 3];
console.log(myArr.ashish());

let newArr = [1, 2, 3, 4, 5, 6];
console.log(newArr.ashish());


//  created classes and 

class  Vehical {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
    start() {
        return `${this.model} is car from ${this.make}`;
    }
}

// inheritance

class Car extends Vehical {
    drive() {
        return `${this.make} : This is an inheritance example`
    }
}

let myCar = new Car("Toyota", "Corola");
console.log(myCar.start());
console.log(myCar.drive());

let vehOne =  new Vehical("tata", "Nexon");
console.log(vehOne.make);

// Encapsulation

class BankAccount {
    #balance = 0;

    deposit(ammount) {
        this.#balance += ammount;
        return this.#balance;
    }
    getBalance() {
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();
console.log(account.getBalance());

// Abstrction


class CoffeeMachine {
    start() {
        // call DB
        //filtter value
        return `Starting the machine...`;
    }
    brewCoffee() {
        //complex calculation
        return `brewing coffe ...`
    }
    pressStart() {
        let msgOne = this.start();
        let msgTwo = this.brewCoffee();
        return `${msgOne} , ${msgTwo}`
    }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStart());


// Ploymorphism** 
class Bird {
    fly() {
        return `Flying...`
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins can't fly`
    }
}
let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());



// Static method

class Calculator {
    static add(a, b) {
        return a + b;
    }
}

// that's not allowed
// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));

console.log(Calculator.add(2, 3));


// getter and setter
 class Employee {
    #salary;
    constructor(name, salary) {
        this.name = name
        this.#salary = salary
        if(salary < 0) {
            throw new Error('Salary cannot be in negative')
        }
    }
    get salary() {
        return `you are not allowed to see salary`;
    }
    set salary (value) {
        if(value < 0) {
            console.error("Invalid Salary")
        } else {
            this._salary = value;
        }
    }
 }

 let emp = new Employee('Alice', -50000);
 console.log(emp._salary);
 emp.salary = 60000;
 



