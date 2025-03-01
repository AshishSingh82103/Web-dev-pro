// Example 1.
// document.getElementById('changeTextButton').addEventListener('click', function () {
//     console.log(this);
    
// })
// when we use function `this` the current context who is calling it.


// document.getElementById('changeTextButton').addEventListener('click',  () => {
//     console.log(this);
    
// })
// when we use arrow function `this` the context is always pointing towards the global `this`

document.getElementById('changeTextButton').addEventListener('click', function () {
    let para = document.getElementById('paragraph');
    // console.log(para);
    para.textContent = "The paragraph is changed";
    
})


// Example 2.
document.getElementById('highlightFirstCity').addEventListener('click', function() {
    let getList = document.getElementById('citiesList');
    getList.firstElementChild.classList.add('highlight');
})

// Example 3.
document.getElementById('changeOrder').addEventListener('click', function () {
    let order = document.getElementById('coffeeType');
    order.textContent = "Cappuccino";
    order.style.backgroundColor = 'pink';
    order.style.padding = '15px';
})

// Example 4.
document.getElementById('createNewIteam').addEventListener('click', function () {
    // creation of element
    let newItem = document.createElement('li');
    newItem.textContent = 'Eggs';
    // add to elements
    document.getElementById('shoppingList').appendChild(newItem);
})

// Example 5.

document.getElementById('removeLastTask').addEventListener('click', function() {
    // grab all the task list
    let getList = document.getElementById('taskList');
    getList.lastElementChild.remove();
})

// Example 6.
document.getElementById('clickButton').addEventListener('dblclick', function() {
    alert('You clicked the button')
})

// Example 7.

document.getElementById('testList').addEventListener('click', function (event) {
    if(event.target && event.target.matches('.teaItem')) {
        alert('you selected: ' + event.target.textContent);
    }
})


// Example 8.
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let feedback = document.getElementById('feedbackInput').value;

    // console.log(feedback);
    document.getElementById('feedbackDisplay').textContent = `Feedback is ${feedback}`
})

// Example 9.
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('domStatus').textContent = 'DOM fully loaded'
})

// Example 10.
document.getElementById('toggleHighlight').addEventListener('click', function() {
    let para = document.getElementById('descriptionText');
    para.classList.toggle('highlight');
})


