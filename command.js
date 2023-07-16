//The command pattern is like having a special box that keeps important instructions for later.
// These instructions tell someone what to do, like drawing a picture, making a sandwich, or singing
// a song. Inside the box, we write down the name of the action, who will do it, and any other important
// things they need. When we want the action to happen, we take out the instructions from the box and
//give them to the person, so they know what to do. It's a helpful way to keep and use instructions
// when we want something done later!

//The command pattern is like giving a robot a special list of things to do. Each thing on the list
// is a command, like "clean the room," "cook dinner," or "dance." When you press a button, the robot
// starts doing the things on the list one by one, in the order you put them. It's like a remote
// control for telling the robot what to do and when to do it.

// The command pattern is useful because it provides a way to separate the request for an action
// from the object that performs the action. By encapsulating a request as a command object, we can
// easily store, manipulate, and execute commands at a later time. This pattern promotes flexibility,
//extensibility, and decoupling in software design, allowing us to easily add new commands, change
// command execution order, implement undo/redo functionality, log actions, and create complex
//workflows. It enhances code organization and maintainability, enabling us to build more flexible
// and robust systems.

//example one
// Receiver objects - the electronic devices
class TV {
    turnOn() {
        console.log('TV is on.');
    }

    turnOff() {
        console.log('TV is off.');
    }
}

class Stereo {
    turnOn() {
        console.log('Stereo is on.');
    }

    turnOff() {
        console.log('Stereo is off.');
    }
}

class Light {
    turnOn() {
        console.log('Light is on.');
    }

    turnOff() {
        console.log('Light is off.');
    }
}

// Command objects
class TurnOnCommand {
    constructor(device) {
        this.device = device;
    }

    execute() {
        this.device.turnOn();
    }
}

class TurnOffCommand {
    constructor(device) {
        this.device = device;
    }

    execute() {
        this.device.turnOff();
    }
}

// Invoker object - the remote control
class RemoteControl {
    constructor() {
        this.commands = [];
    }

    addCommand(command) {
        this.commands.push(command);
    }

    executeCommands() {
        this.commands.forEach(command => command.execute());
        this.commands = []; // Clear the commands after execution
    }
}

const tv = new TV();
const stereo = new Stereo();
const light = new Light();

const turnOnTVCommand = new TurnOnCommand(tv);
const turnOffTVCommand = new TurnOffCommand(tv);
const turnOnStereoCommand = new TurnOnCommand(stereo);
const turnOffStereoCommand = new TurnOffCommand(stereo);
const turnOnLightCommand = new TurnOnCommand(light);
const turnOffLightCommand = new TurnOffCommand(light);

const remoteControl = new RemoteControl();
remoteControl.addCommand(turnOnTVCommand);
remoteControl.addCommand(turnOnStereoCommand);
remoteControl.addCommand(turnOnLightCommand);
remoteControl.addCommand(turnOffStereoCommand);
remoteControl.addCommand(turnOffTVCommand);
remoteControl.addCommand(turnOffLightCommand);

remoteControl.executeCommands();

// Define some functions to use as commands
function sayHello() {
    console.log('Hello!');
}
function sayGoodbye() {
    console.log('Goodbye!');
}

// Define a Command object that encapsulates a request
var Command = function (execute) {
    this.execute = execute;
};

// Define a concrete Command object that binds together an action and the object wishing to
//invoke the action
var HelloCommand = function () {
    return new Command(sayHello);
};

// Define a concrete Command object that binds together an action and the object wishing to invoke the action
var GoodbyeCommand = function () {
    return new Command(sayGoodbye);
};

// Use the Command pattern to execute the commands
var helloCommand = new HelloCommand();
var goodbyeCommand = new GoodbyeCommand();
helloCommand.execute(); // Output: "Hello!"
goodbyeCommand.execute(); // Output: "Goodbye!"
