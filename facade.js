//The facade pattern is like having a helpful person in a toy store who knows how to assemble
//different toys. When someone wants to play with a specific toy, they can ask the facade for help,
//and the facade takes care of all the complicated assembly steps. Similarly, in computer programming,
// the facade pattern simplifies complex systems by providing an easy-to-use interface that hides the
//complexity behind the scenes.

//The Facade Design Pattern is a structural design pattern that provides a simplified interface to
// a complex system of classes, interfaces, or APIs. It allows you to hide the complexity of the
// system and provide a simpler interface for the client to use. The idea behind the Facade Design
// Pattern is to provide a single interface that the client can use to access the system, instead
//of having to interact with multiple classes or APIs directly.

//example 1
// Engine module
const Engine = {
    start: function () {
        console.log('Engine started');
        // Complex logic for starting the engine
    },
    stop: function () {
        console.log('Engine stopped');
        // Complex logic for stopping the engine
    },
};

// Doors module
const Doors = {
    lock: function () {
        console.log('Doors locked');
        // Complex logic for locking the doors
    },
    unlock: function () {
        console.log('Doors unlocked');
        // Complex logic for unlocking the doors
    },
};

// Lights module
const Lights = {
    turnOn: function () {
        console.log('Lights turned on');
        // Complex logic for turning on the lights
    },
    turnOff: function () {
        console.log('Lights turned off');
        // Complex logic for turning off the lights
    },
};

// CarFacade module
const CarFacade = {
    startCar: function () {
        Engine.start();
        Doors.lock();
        Lights.turnOn();
    },
    stopCar: function () {
        Engine.stop();
        Doors.unlock();
        Lights.turnOff();
    },
};

// Usage
CarFacade.startCar(); // This will start the engine, lock the doors, and turn on the lights
CarFacade.stopCar(); // This will stop the engine, unlock the doors, and turn off the lights

//example 2
class SystemA {
    methodA() {
        return 'System A';
    }
}

class SystemB {
    methodB() {
        return 'System B';
    }
}

class SystemC {
    methodC() {
        return 'System C';
    }
}

class Facade {
    constructor() {
        this.systemA = new SystemA();
        this.systemB = new SystemB();
        this.systemC = new SystemC();
    }

    operation() {
        const resultA = this.systemA.methodA();
        const resultB = this.systemB.methodB();
        const resultC = this.systemC.methodC();
        return `${resultA} - ${resultB} - ${resultC}`;
    }
}
