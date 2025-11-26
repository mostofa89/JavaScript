class Panda {

    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;

    }


    sleep = (hours) => {
    let meals = "";

    if (hours <= 5) {
        meals = "Mixed Veggies";

    } else if (hours <= 8) {
        meals = "Bamboo Shoots";

    } else if (hours > 8 && hours <= 11) {
        meals = "Broccoli Chicken";

    } else {
        return `${this.name}'s duration is unknown, thus should have only bamboo leaves.`;

    }

    return `${this.name} sleeps ${hours} hours daily and should have ${meals}.`;
    }


    

}



// Driver code
console.log("=====================================")
let panda1 = new Panda("Ling Ling", "Female", 5);
console.log(`Name: ${panda1.name}`);
console.log(`Age: ${panda1.age}`);
console.log(`Gender: ${panda1.gender}`);
console.log(panda1.sleep(6));
console.log("=====================================")
let panda2 = new Panda("Bob", "Male", 3);
console.log(`Name: ${panda2.name}`);
console.log(`Age: ${panda2.age}`);
console.log(`Gender: ${panda2.gender}`);
console.log(panda2.sleep(9));
console.log("=====================================")
let panda3 = new Panda("Alice", "Female", 4);
console.log(`Name: ${panda3.name}`);
console.log(`Age: ${panda3.age}`);
console.log(`Gender: ${panda3.gender}`);
console.log(panda3.sleep(4));
console.log("=====================================")
let panda4 = new Panda("Tommy", "Male", 7);
console.log(`Name: ${panda4.name}`);
console.log(`Age: ${panda4.age}`);
console.log(`Gender: ${panda4.gender}`);
console.log(panda4.sleep(12));
console.log("=====================================")