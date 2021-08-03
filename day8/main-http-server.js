const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(`
        <html>
            <body>
                <h1>
                    Date is ${new Date()}                
                </h1>
                <div>
                    <input type="button" value="Okay"/>
                </div>
            </body>
        </html>
    `)
})
server.listen(5000, () => {
    console.log('Started Server')
})