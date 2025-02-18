/* 1. write a `while` loop that calculates the sum of all numbers from 1 to 5 and store the result in a variable named `sum
*/
let sum = 0;

let i = 0;

while(i <= 5) {
    // sum = sum + i;
    sum += i
    // i = i + 1;
    i++

}
console.log(sum);



/* 2.  write a `while` loop that counts down from 5 to 1 and stores the numbers in array named `countdown`
*/
let countdown = [];
let j = 5;
while(j > 0) {
    countdown.push(j);
    j--
}
console.log(countdown);

/* 3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"'.store each tea type in array in an array named
`teacollection
*/


// let teacollection = [];
// let tea; 


// do {
//     tea = prompt(`Enter your favourite tea(type "stop" to finish)`);
//     if(tea !== 'stop')
//     {
//         teacollection.push(tea);
//     }
// } while (tea !== 'stop');

// teacollection;

/* 4. Write a `do while` loop that adds numbers from 1 to 3 and  stores the result in variable named `total`.
 */
let total = 0;
let k = 1;

do {
  total += k;
  k++;
} while (k <= 3);

console.log("Total: " + total);


/*  5. Write a for loop that multiplies each elements in the array `[2, 4, 6] by 2 and stores the result in a new array named `multiplied numbers;
*/

let originalArray = [2, 4, 6];
let multipliedNumbers = [];

for (let i = 0; i < originalArray.length; i++) {
  multipliedNumbers.push(originalArray[i] * 2); // Multiplying each element by 2
}

console.log("Multiplied Numbers: ", multipliedNumbers);




/* 6. Write a for loop that lists all the cities in the array `["Paris", "Newyork", "Tokyo", "London"] and stores each city in new array names cityList.
*/

let cities = ["Paris", "Newyork", "Tokyo", "London"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  cityList.push(cities[i]);
}

console.log("City List: ", cityList);

