const https = require('https') // confirm the module

// const options = {
//     host: 'reqres.in',
//     path: '/api/users?page=2'
// }

// https.request(options, res => {
//     // console.log(res)
//     let dt = ''
//     res.on('data', chunk => dt += chunk)
//     res.on('end', () => console.log(dt))
// }).end()

const data = new TextEncoder().encode(
    JSON.stringify({ hi: 'hello' })
)

console.log(data)

const opt = {
    host: 'reqres.in',
    path: '/api/users',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = https.request(opt, res => {
    console.log(`statusCode: ${res.statusCode}`)

    let dt = ''
    res.on('data', chunk => dt += chunk)
    res.on('end', () => console.log(dt))
})
req.write(data)
req.end()

console.log(require('http').STATUS_CODES)

