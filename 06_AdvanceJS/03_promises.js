// ------------Promise-------------
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if(success) {
                resolve('Data fetch successfully');
            } else {
                reject("Error fetching Data");
            }
        },2000)
    })
}

// let resopnse = fetchData();
// console.log(resopnse); // Promise { <pending> }

fetchData()
    .then((data) =>{
        console.log(data);
        return "Ashish"
    })
    .then((value) => {
        console.log(value);
        
    })
    .catch((error) => {
        console.log(error);
    })



