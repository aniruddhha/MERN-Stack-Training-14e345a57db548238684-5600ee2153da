var engine = require('./engine')

function speedUp() {
    engine.rpm = engine.rpm + 1
    console.log(engine)
}

function applyBreaks() {
    engine.rpm = engine.rpm - 1
    console.log(engine)
}

function turnOn() {
    engine.state = 'on'
    console.log(engine)
}

function turnOff() {
    engine.state = 'off'
}

module.exports.speedUp = speedUp
module.exports.applyBreaks = applyBreaks
module.exports.turnOn = turnOn
module.exports.turnOff = turnOff
module.exports.printEngine = () => console.log(engine)
module.exports.newEngine = () => { rpm: 20 }
