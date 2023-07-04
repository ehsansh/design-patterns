//The iterator pattern is like having a friend who helps you eat candies from a jar in a specific order.
//They remember which candy you should eat next and make sure you don't miss any. It's helpful when you
//want to eat candies in a particular order without picking randomly.

//The iterator pattern helps us go through a list of things, like numbers or toys, in a specific
// order without knowing all the details. It's like having a special friend who knows which item
// comes next and gives it to us when we ask. This pattern is useful when we want to go through the
// items in a list one by one without getting confused or missing anything. It keeps things organized
// and makes it easier for us to work with the list.

//Overall, the iterator pattern is used when we want a consistent and controlled way to traverse the
//elements of a collection, abstracting the complexity and providing flexibility in how we access and
// process the elements.
// It is particularly useful when we have collections of varying types, when the order of iteration
//is important, or when we want to separate the iteration logic from the collection itself to improve
// code modularity and reusability.

const items = ['a', 'b', 'c', 'd', 'e', 'f'];

class Iterator {
    constructor(items) {
        this.items = items;
        this.index = 0;
    }
    next() {
        if (this.hasNext()) {
            const currentItem = this.items[this.index];
            this.index++;
            return currentItem;
        } else {
            return null;
        }
    }
    hasNext() {
        return this.index < this.items.length;
    }
}

const it = new Iterator(items);

console.log(it.next()); // 'a'
console.log(it.hasNext()); // true

console.log(it.next()); // 'b'
console.log(it.hasNext()); // true

console.log(it.next()); // 'c'
console.log(it.hasNext()); // true

console.log(it.next()); // 'd'
console.log(it.hasNext()); // true

console.log(it.next()); // 'e'
console.log(it.hasNext()); // true

console.log(it.next()); // 'f'
console.log(it.hasNext()); // false

console.log(it.next()); // null
console.log(it.hasNext()); // false
