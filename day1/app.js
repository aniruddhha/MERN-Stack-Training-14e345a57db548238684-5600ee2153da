/**
 * This file explains basics of JS like 
 *  - how to declare variables ?
 *  - how to write functions ?
 *  - how to call functions ?
 *  - how to accumilate results
 *  - evaluation .
 */

'use strict'
console.log('Lets check')

//num = 10

var jk = 10
console.log(jk)
jk = 'data'
console.log(jk)
jk = true
console.log(jk)

function sayHi() {
    console.log('Hi')
}

function addition(num1, num2) {
    return num1 + num2
}

function calc(str) {
    return eval(str)
}

sayHi()
var res = addition(12, 45)
console.log(res)

console.log(calc('103+2'))

var obj = {
    age: 10,
    name: 'hello',
    bd: function () {
        console.log('Write algorithm for calculating bd')
    }
} // javascript object 