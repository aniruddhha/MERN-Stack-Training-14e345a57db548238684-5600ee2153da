const express = require('express')
const billingRouter = require('./billing/controller/billing.controller')

const app = express()
app.use(express.json())
app.use('/api/billing', billingRouter)
app.use((err, req, res, next) => {
    // global error handler 
    console.log(err)
    res.status(500)
    res.json({ sts: 'fail', msg: 'internal server error', url: req.url, err: err.stack })
})

app.listen(3000, () => {
    console.log(`Server Started on 3000`)
})