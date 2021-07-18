const Car = require('./classes-objects')
const Animal = require('./animal')
const AsyncProgramming = require('./async-prog')

const c1 = new Car(300, true)
console.log(c1)

const a1 = new Animal()
console.log(a1)

const asPrg = new AsyncProgramming()
asPrg.callback()
asPrg.promises()
asPrg.asyncAwait()
console.log(asPrg)


/*console.log(new Date())
const rq = new XMLHttpRequest()
const ev = new Event()
const tar = new EventTarget()
const pr = new Promise()*/

/**
 *  Async Programming in Js
 *
 *  - callbacks
 *  - promises
 *  - async/await
 */