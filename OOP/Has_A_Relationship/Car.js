// Component classes
class Engine {

    constructor(type, horsepower, cylinders) {
        this.type = type;
        this.horsepower = horsepower;
        this.cylinders = cylinders;
        this.isRunning = false;

    }


    start() {
        this.isRunning = true;
        return `${this.type} engine started! ${this.horsepower}HP with ${this.cylinders} cylinders`;

    }


    stop() {
        this.isRunning = false;
        return "Engine stopped";

    }


    getInfo() {
        return `${this.type} Engine - ${this.horsepower}HP`;

    }

}


class Transmission {

    constructor(type, gears) {
        this.type = type;
        this.gears = gears;
        this.currentGear = 0;

    }


    shiftUp() {
        if (this.currentGear < this.gears) {
            this.currentGear++;
            return `Shifted to gear ${this.currentGear}`;

        }
        return "Already in highest gear";
    }


    shiftDown() {
        if (this.currentGear > 0) {
            this.currentGear--;
            return `Shifted to gear ${this.currentGear}`;

        }
        return "Already in lowest gear";
    }


    getInfo() {
        return `${this.type} Transmission - ${this.gears} gears`;

    }
}


class Wheels {
    constructor(size, brand, count = 4) {
        this.size = size;
        this.brand = brand;
        this.count = count;
    }


    getInfo() {
        return `${this.count} x ${this.brand} wheels (${this.size} inches)`;
    }

}

class GPS {

    constructor(brand, features) {
        this.brand = brand;
        this.features = features;

    }


    navigate(destination) {
        return `${this.brand} GPS: Navigating to ${destination}`;

    }


    getInfo() {
        return `${this.brand} GPS with features: ${this.features.join(", ")}`;

    }
}


// Main class with Has-A relationships
class Car {
    // Car HAS-A Engine
    // Car HAS-A Transmission
    // Car HAS-A Wheels
    // Car HAS-A GPS (optional)

    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        
        // Composition: These objects are created within Car
        this.engine = new Engine("V6 Turbo", 300, 6);
        this.transmission = new Transmission("Automatic", 8);
        this.wheels = new Wheels(18, "Michelin");
        this.gps = new GPS("Garmin", ["Real-time traffic", "Voice guidance", "3D maps"]);

    }


    startCar() {
        console.log(`Starting ${this.brand} ${this.model} (${this.year})`);
        console.log(this.engine.start());
        console.log("Car is ready to drive!");

    }


    drive() {
        if (!this.engine.isRunning) {
            return "Please start the engine first!";

        }
        console.log("Driving...");
        console.log(this.transmission.shiftUp());
        console.log(this.transmission.shiftUp());
        console.log(this.transmission.shiftUp());
    }


    navigateTo(destination) {
        console.log(`${this.gps.navigate(destination)}`);
    }


    getCarDetails() {
        console.log(`\n${'='.repeat(50)}`);
        console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
        console.log('-'.repeat(50));
        console.log(this.engine.getInfo());
        console.log(this.transmission.getInfo());
        console.log(this.wheels.getInfo());
        console.log(this.gps.getInfo());
        console.log('='.repeat(50));

    }

}


// Testing
console.log("=== Car Has-A Relationship Demo ===");

const myCar = new Car("Toyota", "Camry", 2024);

// Display car details (showing all Has-A relationships)
myCar.getCarDetails();

// Use car features
myCar.startCar();
myCar.drive();
myCar.navigateTo("Downtown Shopping Mall");

// Access components directly
console.log(`Current Gear: ${myCar.transmission.currentGear}`);
console.log(`Engine Running: ${myCar.engine.isRunning}`);