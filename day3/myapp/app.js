const http = require('http') // built in
const { v4: uuidv4 } = require('uuid'); // third party

const listener = (req, res) => {
    res.end(`${uuidv4()}`)
}

const server = http.createServer(listener)

server.listen(8052, () => {
    console.log(`Started Successfully`)
})