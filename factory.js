//Imagine you have a magical machine that can make different types of toys, like cars and trucks.
//Instead of making the toys yourself, you tell the machine what kind of toy you want, and it creates
//it for you. The factory design pattern is like that magical machine. It helps us create different
//types of things without worrying about how they are made. We just give the factory some information,
//and it uses its special knowledge to make the thing we want. It's a way to create things in a simple
//and organized way without needing to know all the details of how they are made.

//The factory design pattern is a way to create objects in a flexible and organized manner. Instead of
//directly creating objects, we use a factory class that knows how to create them. The factory class
//acts like a "factory" that takes some information and produces the desired object. This pattern helps
// keep our code clean and makes it easier to change the type of objects we create without affecting the
//rest of the code.

//A Factory Pattern or Factory Method Pattern says that just define an interface or
//abstract class for creating an object but let the subclasses decide which class to
// instantiate. In other words, subclasses are responsible to create the instance of the class.

//We use the factory pattern when we want a flexible and organized way to create objects.

//example 1
class Dog {
    say() {
        console.log('this is a dog');
    }
}
class Cat {
    say() {
        console.log('this is a cat');
    }
}
class Animal {
    static introduceAnimal(type) {
        if (type === 'cat') return new Cat(type);
        if (type === 'dog') return new Dog(type);
    }
}
const animal1 = Animal.introduceAnimal('cat').say();
const animal2 = Animal.introduceAnimal('dog').say();

//example 2
// Define the base class
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `${this.make} ${this.model}`;
    }
}

// Define the specific classes
class Car extends Vehicle {
    drive() {
        console.log(`Driving ${this.getInfo()}`);
    }
}

class Truck extends Vehicle {
    loadCargo() {
        console.log(`Loading cargo into ${this.getInfo()}`);
    }
}

// Create a factory class
class VehicleFactory {
    createVehicle(type, make, model) {
        switch (type) {
            case 'car':
                return new Car(make, model);
            case 'truck':
                return new Truck(make, model);
            default:
                throw new Error(`Invalid vehicle type: ${type}`);
        }
    }
}

// Usage example
const factory = new VehicleFactory();
const car = factory.createVehicle('car', 'Honda', 'Civic');
car.drive(); // Output: Driving Honda Civic

const truck = factory.createVehicle('truck', 'Ford', 'F-150');
truck.loadCargo(); // Output: Loading cargo into Ford F-150
