// cover few features of es6

function letVarConst() { // just call letVarConst()
    const num = 10
    // num = 50
    if (true) {
        let num = 20 // inside if loop
    }
    console.log(num) // -> 10
}

function strings() { // just call strings()
    const nm = 'single or double quotes';

    const os = `android`

    const para = ` 
        Hi i am ${os} os. 
        Born on ${new Date()}     
    `
    console.log(para)
}

function fns() { // just call fns()
    const lambda = () => console.log(`this fat arrow`)
    const sum = (num1, num2) => num1 + num2
    lambda()
    console.log(`Sum of 2 numbers is ${sum(1, 1)}`)
}
