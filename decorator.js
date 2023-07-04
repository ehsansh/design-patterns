//Imagine you have a basic toy car that can drive around. Now, let's say you want to make it even
// cooler by adding special features like a horn that makes funny sounds or lights that blink.
// Instead of changing the car itself, the Decorator pattern allows you to add these features as
// "attachments" that you can put on or remove whenever you want. Each attachment adds a different
//  cool feature to the car, and you can mix and match them to create your own unique car with all
// the features you like. So, the Decorator pattern is like having fun add-ons that you can attach
// to your toy car to make it more awesome without changing the car permanently.

//The Decorator pattern is a design pattern that allows you to add new behavior or features to an
//object dynamically without modifying its original class. It uses a wrapping mechanism where the
// object is wrapped with one or more decorators, each adding a specific behavior or feature. This
//pattern helps achieve flexibility and easy customization by extending an object's functionality at
//runtime.
//By using decorators, you can add new functionality to an object without changing its core
//implementation or affecting other objects of the same class. Decorators enhance the object's
//behavior by providing additional capabilities through composition rather than inheritance.

//A Decorator Pattern says that just "attach a flexible additional responsibilities to an object
//dynamically".
//In other words, The Decorator Pattern uses composition instead of inheritance to extend the
//functionality of an object at runtime.

//example one
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    say() {
        console.log(`I am ${this.name}`);
    }
}

class DecoratorUser {
    constructor(user, city, country) {
        this.user = user;
        this.city = city;
        this.country = country;
        this.name = this.user.name;
    }
    say() {
        console.log(`I live in ${this.city} and ${this.country}`);
    }
}

const user = new User('ehsan');
user.say();

const decorated = new DecoratorUser(user, 'mashhad', 'iran');
decorated.say();

//example two
class Coffee {
    getCost() {
        return 10; // Base cost of a coffee
    }

    getDescription() {
        return 'Simple coffee';
    }
}

class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + 2; // Additional cost for milk
    }

    getDescription() {
        return this.coffee.getDescription() + ', milk';
    }
}

// Usage example:
let coffee = new Coffee();
console.log(coffee.getDescription()); // Output: Simple coffee
console.log(coffee.getCost()); // Output: 10

coffee = new MilkDecorator(coffee);
console.log(coffee.getDescription()); // Output: Simple coffee, milk
console.log(coffee.getCost()); // Output: 12
