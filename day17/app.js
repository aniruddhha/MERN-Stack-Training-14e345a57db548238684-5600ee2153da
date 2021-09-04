const express = require('express')
const orm = require('./mysql.config')


const app = express()
app.use(express.json())
orm.then(con => {
    console.log(`Db Connection Established`)
    const postRouter = require('./post.controller')(con.getRepository('Post'))
    app.use('/posts', postRouter)
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500)
    res.json({ sts: 'fail', msg: 'internal server error', url: req.url, err: err.stack })
})

app.listen(3000, () => {
    console.log(`Server Started on 3000`)
})