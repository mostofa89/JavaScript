class Animal {
    constructor(name, species){
        this.name = name;
        this.species = species;

    }


}


let dog = new Animal("Buddy", "Dog");
console.log(dog.name);    // Output: Buddy
console.log(dog.species); // Output: Dog

let cat = new Animal("Whiskers", "Cat");
console.log(cat.name);    // Output: Whiskers
console.log(cat.species); // Output: Cat

let bird = new Animal("Tweety", "Bird");
console.log(bird.name);    // Output: Tweety
console.log(bird.species); // Output: Bird
bird.name = "Chirpy";
console.log(bird.name);    // Output: Chirpy
