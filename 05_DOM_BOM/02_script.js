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

