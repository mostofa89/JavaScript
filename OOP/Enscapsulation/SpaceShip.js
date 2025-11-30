class SpaceShip{
    #name;
    #capacity;
    #weight;
    #items;

    constructor(name, capacity, weight){
        this.#name = name;
        this.#capacity = capacity;
        this.#weight = weight;
        this.#items = [];

    }


    loadCargo(cargo) {
        const totalWeight = this.#items.reduce((sum, item) => sum + item.weight, 0) + cargo.weight;
        if (totalWeight <= this.#capacity) {
            this.#items.push(cargo);
            return `Cargo "${cargo.get_name()}" loaded successfully.`;

        } else {
            return `Cannot load cargo "${cargo.get_name()}" -Exceeds capacity.`;

        }

    }


    displayDetails() {
        console.log(`SpaceShip Name: ${this.#name}`);
        console.log(`Capacity: ${this.#capacity}`);
        console.log(`Current Weight: ${this.#items.reduce((sum, item) => sum + item.weight, 0)}`);
        console.log("Loaded Items:");
        for (let item of this.#items) {
            console.log(`${item.get_name()} weight: ${item.weight}`);

        }

    }
    
}



class Cargo {
    #name;
    weight;

    constructor(name, weight) {
        this.#name = name;
        this.weight = weight;

    }


    get_name() {
        return this.#name;

    }


    set_name(newName) {
        this.#name = newName;

    }


}


// Example usage:
const falcon = new SpaceShip("falcon", 50000);
const apollo = new SpaceShip("Apollo", 100000);
const enterprise = new SpaceShip("Enterprise", 220000);

console.log("1.===================================");

// Creating cargo
const gold = new Cargo("Gold", 20000);
const platinum = new Cargo("Platinum", 25000);
const dilithium = new Cargo("Dilithium", 50000);
const trilithium = new Cargo("Trilithium", 70000);
const neutronium = new Cargo("Neutronium", 80000);

console.log("2.===================================");

// Loading cargo onto Falcon
falcon.loadCargo(gold);
falcon.loadCargo(platinum);
falcon.displayDetails();

console.log("3.===================================");

// Apollo loading
apollo.loadCargo(gold);
apollo.displayDetails();

console.log("4.===================================");

// Falcon capacity test
falcon.loadCargo(neutronium);

console.log("5.===================================");

// Enterprise loading
enterprise.loadCargo(dilithium);
enterprise.loadCargo(trilithium);
enterprise.loadCargo(neutronium);
enterprise.displayDetails();
console.log("6===================================");