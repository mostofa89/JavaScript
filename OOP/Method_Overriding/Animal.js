// Parent class
class Animal {

    constructor(name) {
        this.name = name;
        
    }


    makeSound() {
        return `${this.name} makes a generic sound`;

    }


    eat() {
        return `${this.name} is eating`;

    }


    sleep() {
        return `${this.name} is sleeping`;

    }
}


class Dog extends Animal {
    constructor(name, breed) {
        super(name); 
        this.breed = breed;
    }

   
    makeSound() {
        return `${this.name} barks: Woof! Woof!`;

    }


    fetch() {
        return `${this.name} is fetching the ball`;

    }

}


class Cat extends Animal {

    constructor(name, color) {
        super(name);
        this.color = color;

    }


    makeSound() {
        return `${this.name} meows: Meow! Meow!`;

    }


    scratch() {
        return `${this.name} is scratching the furniture`;

    }
}



class Bird extends Animal {

    constructor(name, canFly) {
        super(name);
        this.canFly = canFly;


    }

 
    makeSound() {
        return `${this.name} chirps: Tweet! Tweet!`;

    }


    eat() {
        return `${this.name} is pecking at seeds`;

    }

    
    
    fly() {
        return this.canFly ? 
            `${this.name} is flying high!` : 
            `${this.name} cannot fly`;

    }

}

// Testing
console.log("=== Method Overriding in JavaScript ===\n");

const genericAnimal = new Animal("Generic");
const dog = new Dog("Buddy", "Golden Retriever");
const cat = new Cat("Whiskers", "Orange");
const bird = new Bird("Tweety", true);

// Test overridden makeSound() method
console.log("--- makeSound() Method (Overridden) ---");
console.log(genericAnimal.makeSound());
console.log(dog.makeSound());
console.log(cat.makeSound());
console.log(bird.makeSound());

console.log("\n--- eat() Method ---");
console.log(genericAnimal.eat()); // Parent method
console.log(dog.eat());           // Inherited (not overridden)
console.log(bird.eat());          // Overridden

console.log("\n--- sleep() Method (Not Overridden) ---");
console.log(dog.sleep());  // Uses parent's method
console.log(cat.sleep());  // Uses parent's method

console.log("\n--- Class-Specific Methods ---");
console.log(dog.fetch());
console.log(cat.scratch());
console.log(bird.fly());