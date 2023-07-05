//In the proxy pattern, imagine you want something done but someone else needs to do it for you.
//For example, you want to play a game, eat ice cream, or access certain objects, but there are
//restrictions or conditions in place. A proxy acts as a middleman, standing in for you and
//controlling access to the desired thing. It performs tasks on your behalf, following rules or
//conditions, and allows or denies access accordingly. Just like having a friend play a game for
// you or an older sibling getting ice cream on your behalf, a proxy pattern helps control access
//and perform additional tasks when accessing objects or resources in programming.

//The proxy pattern in software engineering is like having a middleman that controls access to an
// object. It can add extra features or checks before letting someone use the object. It's helpful
// for managing resources, improving performance, and providing a simpler way to interact with complex
//objects.

// The RealImage class represents the actual image.
class RealImage {
    constructor(filename) {
        this.filename = filename;
        this.loadImage();
    }

    loadImage() {
        console.log(`Loading image: ${this.filename}`);
        // Simulate image loading process...
    }

    displayImage() {
        console.log(`Displaying image: ${this.filename}`);
        // Display the image on the screen...
    }
}

// The ImageProxy class acts as a proxy to control access to the RealImage.
class ImageProxy {
    constructor(filename) {
        this.filename = filename;
        this.realImage = null;
    }

    displayImage() {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.displayImage();
    }
}

// Usage:
const image1 = new ImageProxy('nature.jpg');
image1.displayImage(); // Output: Loading image: nature.jpg, Displaying image: nature.jpg

image1.displayImage(); // Output: Displaying image: nature.jpg (without reloading)
