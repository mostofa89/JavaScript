function Bike (brand, model) {
    this.brand = brand;
    this.model = model;

    this.BikeInfo = function () {
        console.log(`Bike Brand: ${this.brand}, Model: ${this.model}`);
    }

};


const myBike = new Bike("Yamaha", "FZ");
myBike.BikeInfo();