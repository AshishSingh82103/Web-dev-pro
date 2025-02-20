/* 1.Write a for `loop` that loops thorugh the `array` ["green tea", "black tea", "chai", "oolang tea"] and stop when the its find the `"chai"`.
stores all teas before "chai" in newed array named `selectedTeas`.
*/ 

let tea = ["green tea", "black tea", "chai", "oolang tea"];
let selectedTeas = [];

for( i = 0; i < tea.length; i++) {
    
    if( tea[i] === "chai") {
        break;
    }
    selectedTeas.push(tea[i]);
}
console.log(selectedTeas);


/* 2. Write a `for` that loops through the `aray` ["London", "Newyork", "Paris", "Berlin"] and skips the `"paris"`.
stores the other cities in new atray names `"visitedCitites"`.
 */
let cities = ["London", "Newyork", "Paris", "Berlin"];
let visitedCitites = [];
for(i = 0; i < cities.length; i++) {
    if(cities[i] === "Paris") {
        continue;
    }
    visitedCitites.push(cities[i]);
}
console.log(visitedCitites);


/* 3.Used a `for-of` loop to iterate thorugh the array [1, 2, 3, 4, 5] and stop when the number `4` is found.
Stores the number before `4` in an array named `smallNumbers`.
 */
let number = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const element  of number) {
    
    if(element === 4) {
        break;
    }
    smallNumbers.push(element)
 
}
console.log(smallNumbers);

 /* 4. Used a `for-of` loop to iterate thorugh the array ["chai", "greenTea", "herbalTea", "BlackTea"] and skip `herbalTea`.
 Stores the ohter teas in the array name `perferedTeas`.
 */
let teas = ["chai", "greenTea", "herbalTea", "BlackTea"];
let perferedTeas = [];

for (const element of teas) {
    if(element === "herbalTea") {
        continue;
    }
    perferedTeas.push(element)
}
console.log(perferedTeas);


/* 5. Used `for-in` loop to loop through an object containing city populations.
Stop the loop when the population of `berlin` is found and store the all the pervious cities populations in a new object named `cityPopulation`.
let citiespopulations = {
    "London" : 8900000,
    "Newyork" : 8400000,
    "Paris" : 2200000,
    "berlin" : 3500000
}
*/

let citiespopulations = {
    "London" : 8900000,
    "Newyork" : 8400000,
    "Paris" : 2200000,
    "berlin" : 3500000
} 
let perviousCities = {}

for (const key in citiespopulations) {
    if( key === "berlin") {
        break;
    }
    // console.log(citiespopulations[key]);
    perviousCities[key] = citiespopulations[key];
    
   
}
console.log(perviousCities);

/* 6. Yse a `for in` loop to loop through an object containing city populations.
Skip any city with a population below 3 million and sotre the rest in new object named `largecitites`.
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
}  
*/
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
}
let largecitites = {};

for (const key in worldCities) {
    if(worldCities[key] < 3000000 ) {
        continue;
    }
    largecitites[key] = worldCities[key]
}
console.log(largecitites);

/* 7. Write a` forEach` loop that iterates through the array ["earl grey", "green tea", "chai", "oolang tea"].
stop the loop when `"chai"` is found, and store all pervious tea types in an array named `avilableTeas`.
*/
let teas2 = ["earl grey", "green tea", "chai", "oolang tea"]
let avilableTeas = [];

teas2.forEach(element => {

    if(element === "chai") {
        return;
    }
   avilableTeas.push(element);

});
console.log(avilableTeas);



/* 8. Write a `forEach` loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"].
Skip   `Sydney` and store the other cities in new array named `traveledCities`.
*/

let cities2 = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
cities2.forEach(element =>{
    if( element === "Sydney") {
        return;
    }
    traveledCities.push(element)
})
console.log(traveledCities);




