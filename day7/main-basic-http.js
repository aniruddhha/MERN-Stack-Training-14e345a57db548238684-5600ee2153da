const https = require('https') // t

const options = {
    host: 'www.random.org',
    path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new',
    method: 'GET'
}

https.request(options, res => {
    // console.log(res)
    let dt = ''
    res.on('data', chunk => dt += chunk)
    res.on('end', () => console.log(dt))
}).end()