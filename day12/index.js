const express = require('express')

const app = express()
app.use(express.json())

app.use((req, res, next) => {
    console.log('First Middleware')
    next()
})

app.use((req, res, next) => {
    console.log('Second Middleware')
    next()
})

app.get('/dt', (req, res, next) => {
    res.json({ msg: 'hello' })
    //next()
})

app.use((req, res) => { // called as middleware
    res.status(404)
    res.send({
        dt: new Date(),
        why: `${req.path} is not configured in th express app`,
        sts: 'fail'
    })
})

app.use((err, req, res, next) => {
    // global error handler 
    console.log(err)
    res.status(500)
    res.json({ sts: 'fail', msg: 'internal server error' })
})

app.listen(3000, () => {
    console.log(`Server Started on 3000`)
})

