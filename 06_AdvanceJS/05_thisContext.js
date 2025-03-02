const person = {
    name: "Ashish",
    greet() {
        console.log(`Hii I am ${this.name}`);
        
    },
}

person.greet(); // Hii I am Ashish

const greetFunction = person.greet
greetFunction(); // Hii I am undefined

// How to binding context

const bindContext = person.greet.bind({name: "Jhon"});
bindContext(); // Hii I am Jhon