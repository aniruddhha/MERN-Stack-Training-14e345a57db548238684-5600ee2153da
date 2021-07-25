const EventEmitter = require('events');

const em = new EventEmitter()

em.on(`invoices`, /*async*/ obj => { // listener function
    console.log(`3`)
    console.log(`Just Got An Update`)
    console.log(this)
    console.log(obj)
    obj.then(dt => console.log(dt))
        .catch(err => console.log(err)) // recommended way

    // const result = await obj
    // console.log(result)
})

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ inbNum: '1112-02-2021', invAmt: 1000 })
//     }, 5000)
// })

em.emit(`invoices`, { inbNum: '1112-02-2021', invAmt: 1000 })

// setTimeout(() => { // used just for showing demo, it is not required actually
//     em.emit(`invoices`, { inbNum: '1112-02-2021', invAmt: 1000 })
// }, 3000)