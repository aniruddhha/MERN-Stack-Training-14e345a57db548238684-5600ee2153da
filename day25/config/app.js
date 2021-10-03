const express = require('express')
const { connect, initSchema } = require('./mongoose.config')

const app = express()
app.use(express.json())

const apiRouterV1 = express.Router()

app.use('/apiV1', apiRouterV1)
connect().then(mongoose => {
    const models = initSchema()
    const walletRepository = require('../repository/wallet.repository')(models.Wallet)
    const walletRouter = require('../controller/wallet.controller')(express, walletRepository)
    apiRouter.use('/wallet', walletRouter)
}).catch(console.error)

module.exports = app