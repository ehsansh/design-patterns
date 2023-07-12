//when we have many properties for an object and some of them are optional then we
// use builder pattern

//It separates the construction of complex objects from their representation and provides a
//step-by-step approach to construct an object. This approach makes the code more readable,
//maintainable, and flexible.

//the Builder pattern allows you to create different representations of an object using the same
//construction process. You can have multiple builder classes that implement the same interface
//but provide different ways to construct the object. This can be useful when you need to create
//variations of the object with different sets of properties. Overall, when you have an object with
// many optional properties or when you want to provide a flexible and readable way to construct
//objects, the Builder pattern is a good choice. It simplifies the construction process, improves
//code maintainability, and provides a clear separation between the construction logic and the object's
// class.

//in the example below we should pass undefined for optional properties which is not good
//we could use builder pattern to solve this issue
class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}
class User {
    constructor(name, age, phone, address) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}
const user1 = new User(
    'Bob',
    undefined,
    undefined,
    new Address('12345', 'Main St.')
);

//in the example below we have used builder pattern. For creating use objects we use the UserBuilder
//pattern instead of the User pattern
class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
}
class UserBuilder {
    constructor(name) {
        this.user = new User(name);
    }
    setAge(age) {
        this.user.age = age;
        return this;
    }
    setPhone(phone) {
        this.user.phone = phone;
        return this;
    }
    setAddress(address) {
        this.user.address = address;
        return this;
    }
    build() {
        return this.user;
    }
}
const builder = new UserBuilder('Bob');
const user = builder.setAddress(new Address('12345', 'Main St.')).build();

//here is the new solution for the same problem with moden js
class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

class User {
    constructor(name, { age, phone = '123-456-7890', address } = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

let user3 = new User('Bob', { address: new Address('12345', 'Main St.') });
