const express = require('express')
const BillingRepository = require('./billing/repository/billing.repo')
const mysqlConfig = require('./configuration/mysql.config')


const billRepo = new BillingRepository(mysqlConfig.connection)

// const mySqlConfig = require('./configuration/mysql.config.middleware')

const billingRouter = require('./billing/controller/billing.controller')(billRepo)

const app = express()
app.use(express.json())
// app.use(mySqlConfig)  -- invoked per request
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