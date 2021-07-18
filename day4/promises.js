function likePost() {
    return new Promise((resolve, reject) => {
        console.log(`Calling Like Post Api`)
        setTimeout(() => { // it simulation of calling web api for liking the post
            const error = undefined
            if (error) {
                reject('Internal Server Error')
                return
            }
            console.log('post liked')
            resolve(65646546)
        }, 1500)
    })
}

function shareOnInsta(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(`Post Shared on Insta ${postId}`),
            2000
        )
    })
}

likePost()
    .then(postId => shareOnInsta(postId))
    .then(msg => console.log(msg))
    .catch(err => console.log(err))


