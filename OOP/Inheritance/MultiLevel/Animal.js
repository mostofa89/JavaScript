class Animal {

    constructor(species){
        this.species = species;

    }

}


class Mammal extends Animal {
    
    constructor(species, hasFur){
        super(species);
        this.hasFur  = hasFur;

    }


    ShowMammalDetails(){
        console.log(`Species: ${this.species}
Has Fur: ${this.hasFur ? 'Yes' : 'No'}`);
    
    }

}



class Dog extends Mammal {
    
    constructor(species, hasFur, name, age){
        super(species, hasFur);
        this.name  = name;
        this.age = age;

    }



    ShowDogDetails(){
        console.log(`Species: ${this.species}
Has Fur: ${this.hasFur ? 'Yes' : 'No'}
Name: ${this.name}
Age: ${this.age}`);

    }


}



// Example usage:
console.log("=== Dog Example ===");
const myDog = new Dog('Canine', true, 'Buddy', 3);
myDog.ShowDogDetails();
console.log("===================");