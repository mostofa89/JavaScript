class Animal {

    constructor(name) {
        this.name = name;
    }
    

    makeSound() {
        return "Some generic sound";

    }
    

    introduce() {
        return `I am ${this.name} and I say: ${this.makeSound()}`;

    }
}


class Dog extends Animal {

    makeSound() {
        return "Woof! Woof!";

    }
}


class Cat extends Animal {

    makeSound() {
        return "Meow!";

    }

}


class Cow extends Animal {

    makeSound() {
        return "Moo!";
    }

}


// Same method call, different behaviors
const animals = [
    new Dog("Buddy"),
    new Cat("Whiskers"),
    new Cow("Bessie")
];

animals.forEach(animal => {
    console.log(animal.introduce());
});
// I am Buddy and I say: Woof! Woof!
// I am Whiskers and I say: Meow!
// I am Bessie and I say: Moo!