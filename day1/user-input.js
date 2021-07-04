/**
 * Takeaway - understaning of node modules.
 * As example we have studied readline module
 * 
 */

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
//-->
/// ->