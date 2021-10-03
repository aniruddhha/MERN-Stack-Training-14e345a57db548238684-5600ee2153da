
/*
    SOLID
    S - Single Responsibility
    O - Open Close Principle
    L - Liskov Substituion
    I - Interface Segregation
    D - Dependency Inversion
*/

const express = require('express')
var http = require('http');

const app = express()
app.use(express.json())

const { connect, disconnect } = require('./config/mongo.config')

const server = http.createServer(app);

server.listen(3000)

server.on('listening', () => {
    console.log(`Server Started on 3000`)

    connect().then(db => {
        const questions = require('./question/question.controller')(express, db)
        app.use('/question', questions)
    })
        .catch(console.error)
    // .finally(() => disconnect())
})
server.on('close', () => disconnect())

process.on('SIGINT', function () {
    server.close();
});