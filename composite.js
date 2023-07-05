//The composite pattern is like having a big toy that is made up of smaller toys. You can play with
//each smaller toy on its own, but you can also play with the big toy as a whole. It helps us treat
//a bunch of things like they're just one thing, making it easier to play and have fun with them. So,
// imagine having a big robot toy that has different parts like arms, legs, and a head. You can either
// play with each part separately or play with the whole robot together. That's what the composite
//pattern is all about!

//The composite design pattern is a structural pattern that allows us to treat individual objects and
//groups of objects in a unified manner. It creates a hierarchical structure where objects are organized
// into tree-like structures, with a common interface shared by both individual objects and groups.
//This pattern enables us to perform operations on objects at different levels of the hierarchy without
// needing to distinguish between them, simplifying the code and promoting flexibility in handling
// complex structures. It is commonly used when we want to represent part-whole hierarchies or
// tree-like structures in our software systems.

//example 1
class Shape {
    calculateArea() {}
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Group extends Shape {
    constructor() {
        super();
        this.shapes = [];
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    calculateArea() {
        let totalArea = 0;
        for (const shape of this.shapes) {
            totalArea += shape.calculateArea();
        }
        return totalArea;
    }
}

// Create some shapes
const circle1 = new Circle(5);
const circle2 = new Circle(3);
const square = new Shape(); // Assume we have a Square class

// Create a group and add shapes to it
const group = new Group();
group.addShape(circle1);
group.addShape(circle2);
group.addShape(square);

// Calculate the total area of the group
console.log(group.calculateArea());

//Suppose you have a tree structure of files and directories, and you want to calculate the total
// size of the files in the tree. You can define a base class FileObject that has a getSize method,
//and two subclasses Directory and File that represent composite and leaf nodes respectively.
// The Directory class has an array of child elements and the getSize method calls the getSize
// method of each child element and adds up the sizes. The File class simply implements the getSize
// method and returns the size of the file.

class FileObject {
    getSize() {}
}

class Directory extends FileObject {
    constructor() {
        super();
        this.children = [];
    }

    add(child) {
        this.children.push(child);
    }

    remove(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    getSize() {
        let size = 0;
        for (const child of this.children) {
            size += child.getSize();
        }
        return size;
    }
}

class File extends FileObject {
    constructor(size) {
        super();
        this.size = size;
    }

    getSize() {
        return this.size;
    }
}

const root = new Directory();
const dir1 = new Directory();
const dir2 = new Directory();
const file1 = new File(10);
const file2 = new File(20);

dir1.add(file1);
dir2.add(file2);
root.add(dir1);
root.add(dir2);

console.log(root.getSize()); // Output: 30
