const express = require('express')
const authRouter = require('./auth/auth')
const carRouter = require('./car/car')
const profileRouter = require('./profile/profile')

const app = express()
app.use(express.json())
app.use('/api/auth', authRouter.router)
// app.use(authRouter.authMiddleware)
app.use('/api/car', carRouter)
app.use('/api/profile', profileRouter)
app.use((err, req, res, next) => {
    // global error handler 
    console.log(err)
    res.status(500)
    res.json({ sts: 'fail', msg: 'internal server error', url: req.url, err: err.stack })
})

app.listen(3000, () => {
    console.log(`Server Started on 3000`)
})
