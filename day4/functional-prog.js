// functional programming language

function normal() {
    console.log(`I am normal function`)
}

const fn = () => console.log('hi') // variable can hold function
function hi(cb) { // functions can be passed as parameter
    cb()
}
function hello() {
    console.log(`I am hello`)
    return function () { // function returning another function
        console.log('I am closure')
    }
}

fn()

hi(function () {
    console.log(`I am anoymus function`)
})
hi(() => console.log(`I am Arrow`))
hi(normal) // method reference

console.log(hello())
console.log(hello()())
const inFn = hello()
inFn()
