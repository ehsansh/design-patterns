//The Singleton pattern is a creational design pattern that restricts the instantiation of a class to
//a single object. It ensures that only one instance of the class exists throughout the application
//and provides a global point of access to it. This pattern is useful in scenarios where you need to
// control access to a shared resource, manage global state, or maintain a centralized point for
//configuration settings. By enforcing a single instance, it helps maintain data consistency, avoids
//unnecessary duplication, and provides a convenient way to access the instance from different parts of
//the codebase.

//The Singleton pattern is like having a special box that holds a unique toy. Whenever you or your
//friends want to play with that toy, you go to the box and get the same toy every time.
//The box makes sure that there is only one toy of that kind in the whole world. It's like a special
//rule that keeps everything organized and prevents many toys from being made. The Singleton pattern
// helps ensure that there is only one instance (or copy) of something, just like having only one
//special toy in the whole world

//It is useful in scenarios where you need to manage shared resources, maintain global state, or
//provide a centralized access point for configuration settings. Additionally, the Singleton pattern
//can be employed for caching, logging, database connections, or any situation where having multiple
//instances could lead to inconsistencies or inefficiencies.

//example one
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            // Create the single instance
            this.data = 'I am the instance';
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

// Usage:
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // Output: true

//example two
class HighScoreTracker {
    constructor() {
        if (!HighScoreTracker.instance) {
            this.highScore = 0;
            HighScoreTracker.instance = this;
        }

        return HighScoreTracker.instance;
    }
    updateScore(score) {
        if (score > this.highScore) {
            this.highScore = score;
        }
    }

    getHighScore() {
        return this.highScore;
    }
}
// Singleton instance
const highScoreTracker = new HighScoreTracker();
// Usage:
highScoreTracker.updateScore(100); // Update the score
const currentHighScore = highScoreTracker.getHighScore(); // Get the high score
console.log(currentHighScore); // Output: 100

//example three
class Settings {
    constructor() {
        this.theme = 'Default';
        this.volume = 50;
    }

    setTheme(theme) {
        this.theme = theme;
    }

    setVolume(volume) {
        this.volume = volume;
    }

    getSettings() {
        return {
            theme: this.theme,
            volume: this.volume,
        };
    }
}

// Singleton instance
class SettingsSingleton {
    constructor() {
        if (!SettingsSingleton.instance) {
            SettingsSingleton.instance = new Settings();
        }
        return SettingsSingleton.instance;
    }
}

// Usage:
const settingsInstance1 = new SettingsSingleton();
settingsInstance1.setTheme('Dark');
settingsInstance1.setVolume(80);

const settingsInstance2 = new SettingsSingleton();
settingsInstance2.setTheme('Light');

const settingsInstance3 = new SettingsSingleton();
console.log(settingsInstance3.getSettings());
// Output: { theme: 'Light', volume: 80 }
console.log(settingsInstance2.getSettings());
// Output: { theme: 'Light', volume: 80 }
