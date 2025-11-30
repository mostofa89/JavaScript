class Vechicle {

    constructor(menufacturer, model, year){
        this.menufacturer = menufacturer;
        this.model = model;
        this.year = year;

    }


}


class Car extends Vechicle {

    constructor(menufacturer, model, year, doors, isElectric){
        super(menufacturer, model, year);
        this.doors = doors;
        this.isElectric = isElectric;
    }


    details(){
        console.log(`Menufacturer: ${this.menufacturer}
Model: ${this.model}
Year: ${this.year}
Doors: ${this.doors}
Electric: ${this.isElectric ? 'Yes' : 'No'}`);

    }

}



// Example usage:
console.log("=== Car Example ===");
const myCar = new Car('Tesla', 'Model S', 2022, 4, true);
myCar.details();
console.log("===================");