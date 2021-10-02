const express = require('express')
const app = express()
const { connect, disconnect } = require('./config/mongo.config')

app.listen(3000, () => {
    console.log(`Server Started on 3000`)

    connect().then(db => {
        const questions = require('./question/question.controller')(express, db)
        app.use('/question', questions)
    })
        .catch(console.error)
        .finally(() => disconnect())
})