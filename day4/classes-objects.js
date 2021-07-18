class Car {
    // properties
    // behaviour --> act on propertes

    //speed = 10; // property -> state -> values
    //ignition = false

    constructor(speed, ignition) { // assign values to state at the time of object creation
        this.speed = speed
        this.ignition = ignition
    }

    speedUp() { // behaviour
        this.speed = this.speed + 10
        console.log(this.speed)

        console.log(this) // current object under execution
    }

    turnOn() {
        this.speedUp()
    }
}

const cr = new Car(100, true) // real object = memory allocation + constructor
cr.speedUp()

const cr1 = new Car(10, false)
cr1.speedUp()

function hi() {
    console.log(this) // global object
}

// hi()

console.log(Car) // 

module.exports = Car // here you are exporting type information or skeleton of the Car


