const EventEmitter = require('events');

const em = new EventEmitter()

em.on(`invoices`, obj => {
    console.log(`Just Got An Update`)
    console.log(this)
    console.log(obj)
})

setTimeout(() => { // used just for showing demo, it is not required actually
    em.emit(`invoices`, { inbNum: '1112-02-2021', invAmt: 1000 })
}, 3000)