const app = require(`./config/app`)

const http = require('http');
const server = http.createServer(app);
server.listen(3000)

server.on('listening', () => {
    console.log(`Server Started on 3000`)
})
server.on('close', () => { })

process.on('SIGINT', function () {
    server.close();
});