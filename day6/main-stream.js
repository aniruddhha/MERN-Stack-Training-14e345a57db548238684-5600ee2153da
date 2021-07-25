const fs = require('fs')

const rs = fs.createReadStream('./my.txt')
rs.setEncoding('utf8')

rs.on('readable', () => {
    // console.log(rs.read(100))
    while (true) {
        const ch = rs.read()
        if (ch == null) break
        else console.log(ch)
    }
})

rs.on('error', error => console.log(error))
rs.on('end', () => console.log(`Completed`))
rs.on('data', dt => {
    console.log(dt)
})
// console.log(flDt) // -> you may see something different

const ws = fs.createWriteStream('./my.txt')
ws.write('My data', 'utf8')
ws.end()

ws.on('error', error => console.log(err))
ws.on('finish', () => console.log(`Data writing finished`))
