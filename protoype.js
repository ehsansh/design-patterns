//The Prototype pattern is a creational design pattern that allows you to create new objects by
//cloning existing ones, known as prototypes. This approach helps in reducing the complexity of
// object creation and provides a way to create new objects with default values.

//The Prototype pattern is a creational design pattern that involves creating new objects by copying
//or cloning an existing object, known as the prototype. The prototype serves as a blueprint for
//creating new objects with pre-defined properties and behavior.

//The Prototype pattern allows you to create new objects by directly copying or inheriting from an
//existing object. This avoids the need for creating new instances from scratch, which can be
//time-consuming and resource-intensive.

//When you clone an object using the Prototype pattern, the methods of the prototype are shared
//among all the cloned objects. This means that the methods are stored in the prototype chain and
//not duplicated for each object. This promotes memory efficiency and improved performance.

//when we use Object.create() to clone the animalPrototype, the methods of the animalPrototype are
// added to the prototype property of the new object. This means that the methods are shared among
//all the cloned objects, making them lightweight and efficient. By utilizing the prototype chain,
//we can achieve method sharing and avoid duplicating method definitions for each cloned object.
// This results in memory efficiency and improved performance, especially when dealing with a large
//number of objects.

// Prototype object
const animalPrototype = {
    species: '',
    sound: '',

    makeSound() {
        console.log(this.sound);
    },
};

// Create new objects using the prototype
const cat = Object.create(animalPrototype);
cat.species = 'Cat';
cat.sound = 'Meow';

const dog = Object.create(animalPrototype);
dog.species = 'Dog';
dog.sound = 'Woof';

// Use the cloned objects
cat.makeSound(); // Output: Meow
dog.makeSound(); // Output: Woof

//******************************************************/
//******************************************************/
//******************************************************/
//another example
// Create a prototype object
const carPrototype = {
    brand: 'Unknown',
    model: 'Unknown',
    year: 'Unknown',

    getInfo: function () {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    },

    clone: function () {
        // Create a new object with the current prototype
        const clonedCar = Object.create(this);
        // Optionally, you can modify the cloned object properties
        // clonedCar.brand = "NewBrand";
        return clonedCar;
    },
};

// Create an instance of a car using the prototype
const car1 = Object.create(carPrototype);
car1.brand = 'Toyota';
car1.model = 'Camry';
car1.year = 2020;

// Clone the car to create a new instance
const car2 = car1.clone();
car2.model = 'Corolla';

// Display car information
console.log(car1.getInfo()); // Output: Brand: Toyota, Model: Camry, Year: 2020
console.log(car2.getInfo()); // Output: Brand: Toyota, Model: Corolla, Year: 2020

//By using the Prototype pattern, we avoid the need for manually creating and initializing each
// new object, and we can easily create clones of existing objects, which can be useful when dealing
//with complex object structures.
