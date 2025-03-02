function fetchPostData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Post data fetched')
        }, 2000);

    })
}

function fetchCommentdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Comment data fetched')
        }, 2000);

    })
}

async function getBlogData(params) {
    try {
        console.log('Fetching blog data');
        const blogData = await fetchPostData();
        const commentData = await fetchCommentdata();
        console.log(blogData);
        console.log(commentData);
        console.log("fetch Complete");
    } catch (error) {
        console.log("Error fetching blog data", error);
        
    }
}

getBlogData();