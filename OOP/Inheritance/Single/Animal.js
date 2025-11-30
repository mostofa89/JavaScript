class Animal {

    constructor(species){
        this.species = species;

    }


}


class Dog extends Animal {
    
    constructor(species, name, age){
        super(species);
        this.name  = name;
        this.age = age;

    }


    show(){
        console.log(`Species: ${this.species}, Name: ${this.name}, Age: ${this.age}`);
        
    }


}



// Example usage:
console.log("=== Dog Example ===");
const myDog = new Dog('Canine', 'Buddy', 3);
myDog.show();  // Output: Species: Canine, Name: Buddy, Age: 3
console.log("===================");