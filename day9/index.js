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
    console.log(req)
    res.send()
})

app.listen(3000, () => {
    console.log(`Server Started on 3000`)
})
