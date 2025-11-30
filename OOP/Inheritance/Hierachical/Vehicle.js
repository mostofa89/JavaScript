class Vehicle {

    constructor(brand) {
        this.brand = brand;

    }

    
    showBrand() {
        console.log(`Brand: ${this.brand}`);

    }

}


class Car extends Vehicle {

    constructor(brand, doors) {
        super(brand);
        this.doors = doors;

    }


    showCar() {

        console.log(`${this.brand} Car has ${this.doors} doors`);
    }

}


class Bike extends Vehicle {

    constructor(brand, typeBike) {
        super(brand);
        this.typeBike = typeBike;
    }

    showBike() {

        console.log(`${this.brand} Bike type: ${this.typeBike}`);
    }

}


class Truck extends Vehicle {

    constructor(brand, capacity) {
        super(brand);
        this.capacity = capacity;
    }


    showTruck() {
        console.log(`${this.brand} Truck capacity: ${this.capacity} tons`);
    }

}

// Usage
console.log("Hierarchical Inheritance Example:");
console.log("----------------------------------");

const c = new Car("Toyota", 4);
const b = new Bike("Yamaha", "Sport");
const t = new Truck("Volvo", 20);

console.log("----------------------------------");
c.showBrand();
c.showCar();

console.log("----------------------------------");
b.showBrand();
b.showBike();

console.log("----------------------------------");
t.showBrand();
t.showTruck();

console.log("----------------------------------");
