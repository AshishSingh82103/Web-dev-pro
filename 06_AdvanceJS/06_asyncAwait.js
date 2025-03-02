// function fetchUserData () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 name: 'chaicode',
//                 url: 'https://chaicode.com'
//             })
//         },2000)
//     })
// }

// async function getUserData() {
//     try {
//         console.log('Fetching user data...')
//         const userData = await fetchUserData();
//         console.log('User data: ', userData);
        
//     } catch (error) {
//         console.log('Error fetching data', error);
        
//     }
// }
// getUserData();

function fetchUserData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({
                name: 'chaicode',
                url: 'https://chaicode.com'
            })
        },2000)
    })
}

async function getUserData() {
    try {
        console.log('Fetching user data...')
        const userData = await fetchUserData();
        console.log('User data: ', userData);
        
    } catch (error) {
        console.log('Error fetching data', error);
        
    }
}
getUserData();