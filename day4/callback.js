function likePost(cb) {
    console.log(`Calling Like Post Api`)
    setTimeout(() => { // it simulation of calling web api for liking the post
        console.log('post liked')
        cb(49847593475) // this calling your function which is passed as parameter
    }, 1500)
}

function shareOnInsta(postId) {
    console.log(`Shared Post On Insta - ${postId}`)
}

likePost(function (postId) {
    shareOnInsta(postId)
})