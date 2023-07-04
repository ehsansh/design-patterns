//The strategy design pattern is a way to organize code by encapsulating different algorithms or
//behaviors into separate classes. It allows you to switch between these behaviors dynamically at
//runtime without changing the main code. It promotes code reusability, flexibility, and separation
//of concerns.
//In summary, the strategy pattern involves passing different classes or objects that represent
//different behaviors to the main class or context, allowing dynamic behavior interchangeability.

//example one

// Implement different flying strategies as concrete strategies
class CanFlyStrategy {
    fly() {
        console.log('Flying in the air!');
    }
}

class CannotFlyStrategy {
    fly() {
        console.log('Unable to fly.');
    }
}

// Context class that uses the strategy
class Bird {
    constructor(flyingStrategy) {
        this.flyingStrategy = flyingStrategy;
    }

    setFlyingStrategy(flyingStrategy) {
        this.flyingStrategy = flyingStrategy;
    }

    performFly() {
        this.flyingStrategy.fly();
    }
}

// Usage example
const eagle = new Bird(new CanFlyStrategy());
eagle.performFly(); // Flying in the air!

const penguin = new Bird(new CannotFlyStrategy());
penguin.performFly(); // Unable to fly.

penguin.setFlyingStrategy(new CanFlyStrategy());
penguin.performFly(); // Flying in the air!

// example two

// Implement different attack strategies as concrete classes
class SwordAttack {
    attack() {
        console.log('Attacking with a sword!');
    }
}

class BowAttack {
    attack() {
        console.log('Attacking with a bow!');
    }
}

class FireballAttack {
    attack() {
        console.log('Casting a fireball!');
    }
}

// Context class that uses the strategy
class Character {
    constructor(attackStrategy) {
        this.attackStrategy = attackStrategy;
    }

    setAttackStrategy(attackStrategy) {
        this.attackStrategy = attackStrategy;
    }

    attack() {
        this.attackStrategy.attack();
    }
}

// Usage example
const character1 = new Character(new SwordAttack());
character1.attack(); // Attacking with a sword!

character1.setAttackStrategy(new BowAttack());
character1.attack(); // Attacking with a bow!

const character2 = new Character(new FireballAttack());
character2.attack(); // Casting a fireball!
