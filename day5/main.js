function abc() {
    pqr()
}

function pqr() {
    setTimeout(function () {
        throw Error()
    }, 10000)
    lmn()
}

function lmn() {
    // throw Error()
    console.log('hi ')
}

abc()