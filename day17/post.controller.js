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

    return router
}