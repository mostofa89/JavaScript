class CoffeeMachine {
    #waterAmount = 0;  // Private field
    #temperature = 0;  // Private field
    
    
    constructor(power) {
        this.power = power;
    }
    

    // Public method - simple interface
    makeCoffee(type) {
        this.#boilWater();
        this.#grindBeans();
        this.#brew(type);
        return `Your ${type} is ready!`;
    }
    

    // Private methods - hidden complexity
    #boilWater() {
        this.#temperature = 95;
        console.log('Boiling water...');

    }
    

    #grindBeans() {
        console.log('Grinding beans...');

    }
    

    #brew(type) {
        console.log(`Brewing ${type}...`);
    }

}


const machine = new CoffeeMachine(1200);
console.log(machine.makeCoffee('espresso'));
// User doesn't need to know about boiling, grinding, etc.