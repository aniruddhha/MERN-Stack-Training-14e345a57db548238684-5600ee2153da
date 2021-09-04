const express = require('express');
const router = express.Router();

module.exports = function (repo) {

    router.get('/', function (req, res, next) {
        repo.find().then(result => {
            res.json(result)
        })
    });

    router.post('/', (req, res) => {
        repo.save(req.body).then(result => {
            res.json(result)
        })
    })

    // find all the post who are having category with id 2
    router.get('/category/:id', (req, res) => {
        console.log(`Id = ${req.params.id}`)
        const id = Number.parseInt(req.params.id)

        repo.find().then(posts => {
            const catPosts = posts.filter(
                post => post.categories.map(ct => ct.id).includes(id)
            )
            res.json(catPosts)
        });
    })

    return router
}