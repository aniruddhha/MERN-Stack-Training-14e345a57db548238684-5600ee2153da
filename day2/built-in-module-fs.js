const fs = require('fs') // builtin module

const errorHandler = (err, dt) => {
    if (err) throw err
    console.log(dt)
}

fs.readFile(`./my.txt`, 'utf8', errorHandler)

const dt = fs.readFileSync('./my.txt') // sync
console.log(dt) //--> wont execute untill read op completes

fs.writeFile('./my.txt', 'this written from code', { flag: 'a+' }, errorHandler)
fs.appendFile('./my.txt', 'this is from append file', errorHandler)

fs.mkdir('./timing', errorHandler)

// assignment 1 -> write content to file using writeFileAsync

function giveMeContent(folderName) {
    // assignment 2 -> write a program to list content of the perticular folder. Files are prefixed * and folders are prefixed by +

    // logic 
    return []
}

function copyFile(source, dest) {
    //assignment 3 -> copying files

    return 0 // return 1 if success and 0 on failed
}


