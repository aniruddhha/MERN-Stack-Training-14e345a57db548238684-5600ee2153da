const { Buffer } = require('buffer')

const b1 = Buffer.alloc(10)
b1.write('hi')
console.log(b1)
console.log(b1.toString())
// console.log(b1.toJSON())

const b2 = Buffer.alloc(10, 2)
console.log(b2)

const b3 = Buffer.from([10, 20, 30])
const arr = new Uint32Array(b3);
console.log(b3)
console.log(arr)

const b4 = Buffer.from('hello')
console.log(b4.toString())