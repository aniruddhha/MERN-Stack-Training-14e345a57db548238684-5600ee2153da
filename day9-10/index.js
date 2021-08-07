const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
    
        <body>
            <h1>Welcome to Express</h1>
        </body>
    
    </html>
    `)
})

app.get('/dt', (req, res) => {
    res.send({
        ip: req.ip,
        host: req.hostname,
        path: req.path,
        protocol: req.protocol
    })
})

app.post('/save/:typ', (req, res) => {
    res.send({
        params: req.params,
        query: req.query,
        body: req.body // middleware
    })
})

app.put('/result/:num1/:num2', (req, res) => {
    const result = parseInt(req.params.num1) + parseInt(req.params.num2)
    res.send({ result }) // remind about this
})

app.listen(3000, () => {
    console.log(`Server Started on 3000`)
})
