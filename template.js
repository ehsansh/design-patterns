// Imagine you have a special set of instructions for making different types of sandwiches.
// The instructions have steps that are the same for all sandwiches, like adding bread and spreading
// butter. But there are some parts that can be different, like choosing the fillings or adding
// toppings. So, the instructions act as a template for making sandwiches. You can use the template
//to make different sandwiches by adding your favorite fillings and toppings. The template provides
//a structure that helps you create various types of sandwiches while still following the basic steps.

// The Template Method pattern is a design pattern that provides a blueprint for creating algorithms.
// It consists of a base class with a template method that defines the overall structure of the
// algorithm, while allowing subclasses to customize certain steps. This pattern promotes code reuse,
//  modularity, and flexibility, as changes to the algorithm can be made in the base class without
// modifying each subclass. It provides a consistent way to create objects with variations, ensuring
// a common structure while allowing for customization.

//The Template Pattern is useful when you have a common structure or algorithm, but you want to allow
//  flexibility for individual instances to customize certain parts without modifying the main class.

class Task {
    execute() {
        this.initialize();
        this.performTask();
        this.finalize();
    }

    initialize() {
        console.log('Initializing the task...');
    }

    performTask() {
        // Abstract method, to be overridden by subclasses
    }

    finalize() {
        console.log('Finalizing the task...');
    }
}

class PrintTask extends Task {
    performTask() {
        console.log('Printing a document.');
    }
}

class EmailTask extends Task {
    performTask() {
        console.log('Sending an email.');
    }
}
const printTask = new PrintTask();
printTask.execute();
// Output:
// Initializing the task...
// Printing a document.
// Finalizing the task...

const emailTask = new EmailTask();
emailTask.execute();
// Output:
// Initializing the task...
// Sending an email.
// Finalizing the task...
