// Prototyple inheritance => inheritance done by prototype
function Person (name) {
    this.name = name
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`); 
}

let ashish = new Person("Ashish");
ashish.greet(); 
