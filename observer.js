//Imagine you have a special toy that can change colors. You also have some friends who want to know
// when the toy changes color. So, you create a way for the toy to tell your friends whenever it
// changes. The toy has a list of friends, and whenever it changes color, it tells each friend about
// the new color. Your friends can then react and do something fun when they hear about the color change.
// This way, the toy and your friends can stay connected and play together without knowing too much
//about each other. That's what the Observer pattern is like: it helps objects communicate and stay
//updated without being too tightly connected, just like you and your friends with the color-changing toy!

//The Observer design pattern establishes a relationship between objects where one object (the subject)
//maintains a list of other objects (the observers) and notifies them automatically of any state changes.
// This pattern promotes loose coupling and allows for easy communication and coordination between
// objects.

/**
 * The Observer pattern offers a subscription model in which objects subscribe to an event and get
 * notified when the event occurs. This pattern is the cornerstone of event driven programming,
 * including JavaScript. The Observer pattern facilitates good object-oriented design and promotes
 * loose coupling.
 *
 */

//The Observer design pattern is used when we have a scenario where one object (the subject) needs
// to notify and update multiple other objects (the observers) automatically when its state changes.

//example one
class Observer {
    constructor() {
        this.observers = [];
    }
    subscribe(fn) {
        this.observers.push(fn);
    }
    unsubscribe(fn) {
        this.observers = this.observers.filter(el => el != fn);
    }
    fire() {
        this.observers.forEach(fn => fn());
    }
}

function hello() {
    console.log('hello');
}
function bye() {
    console.log('bye');
}

const observer = new Observer();
observer.subscribe(hello);
observer.subscribe(bye);
observer.unsubscribe(bye);
observer.fire();

//example two
// Subject (Observable)
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

// Observer
class Observer {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(`[${this.name}] received data: ${data}`);
    }
}

// Usage
const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers('Hello, observers!');
