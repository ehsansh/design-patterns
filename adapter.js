//Imagine you have a toy car that needs to be charged, but it has a special plug that doesn't fit
//into the regular electrical outlets in your house. However, you have an adapter that you can attach to
//the special plug of the toy car. The adapter has a different shape that matches the regular electrical
// outlets, so when you plug the toy car into the adapter, and then plug the adapter into the wall
//outlet, it connects and charges perfectly! The adapter helps make the toy car compatible with the
//regular outlets, allowing you to charge it even though they have different shapes.

//The Adapter pattern is a structural design pattern that allows objects with incompatible interfaces
//to work together. It acts as a bridge between two interfaces, translating requests from one interface
// to another, making them compatible and enabling communication between different components of a
// system.

//example one

// Existing data storage module with a specific interface
class LegacyDataStorage {
    saveData(key, value) {
        console.log(`[Legacy] Saving data with key '${key}':`, value);
    }
    getData(key) {
        console.log(`[Legacy] Retrieving data with key '${key}'`);
        // Return the data
    }
}
// New data storage service with a different interface
class NewDataStorage {
    store(key, data) {
        console.log(`[New] Storing data with key '${key}':`, data);
    }
    retrieve(key) {
        console.log(`[New] Retrieving data with key '${key}'`);
        // Return the data
    }
}

// Adapter class to make the new data storage service compatible with the existing interface
class DataStorageAdapter extends LegacyDataStorage {
    constructor(newDataStorage) {
        super();
        this.newDataStorage = newDataStorage;
    }

    saveData(key, value) {
        this.newDataStorage.store(key, value);
    }

    getData(key) {
        this.newDataStorage.retrieve(key);
        // Return the retrieved data
    }
}

// Usage
const newDataStorage = new NewDataStorage();

// Use the adapter to make the new data storage service work with the existing interface
const adapter1 = new DataStorageAdapter(newDataStorage);
adapter1.saveData('key1', 'value1');
adapter1.getData('key1');

//example two
// Existing payment gateway with a specific interface
class LegacyPaymentGateway {
    processPayment(amount) {
        console.log(`[LegacyPaymentGateway] Processing payment: ${amount}`);
        // Process payment logic for the legacy gateway
    }
}

// New payment gateway with a different interface
class NewPaymentGateway {
    pay(amount) {
        console.log(`[NewPaymentGateway] Paying: ${amount}`);
        // Payment logic for the new gateway
    }
}

// Adapter class to make the new payment gateway compatible with the existing interface
class PaymentGatewayAdapter extends LegacyPaymentGateway {
    constructor(newPaymentGateway) {
        super();
        this.newPaymentGateway = newPaymentGateway;
    }

    processPayment(amount) {
        this.newPaymentGateway.pay(amount);
    }
}

// Usage
const legacyGateway = new LegacyPaymentGateway();
const newGateway = new NewPaymentGateway();

// Use the adapter to switch between the legacy and new payment gateways
const adapter = new PaymentGatewayAdapter(newGateway);

// Process payment using the legacy payment gateway
legacyGateway.processPayment(100);

// Process payment using the new payment gateway through the adapter
adapter.processPayment(100);
