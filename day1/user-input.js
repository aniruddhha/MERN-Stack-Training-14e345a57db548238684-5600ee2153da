/**
 * Takeaway: understaning of node modules.
 * As example we have studied readline module
 * 
 * Homework:
 * - Perform the calculation i.e. add, sub, mul and div
 * - Identify given input is palindrome or not
 * - Many other programs you may wish to do 
 * */

var readline = require('readline') //what is require ?
    // what is readline ?
    .createInterface({ // what are these curly braces ?
        input: process.stdin, // what is process ?
        output: process.stdout
    })
readline.question('whats your name ?', function (nm) {
    console.log('You Entered ' + nm.toUpperCase())
    readline.close()
}) // how can we pass function as a parameter ?
console.log('reached this line')
console.log(process)
//-->
/// ->