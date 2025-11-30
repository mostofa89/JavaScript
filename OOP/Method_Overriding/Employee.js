// Parent class
class Employee {

    constructor(name, id, baseSalary) {
        this.name = name;
        this.id = id;
        this.baseSalary = baseSalary;
        
    }

    calculateSalary() {
        return this.baseSalary;

    }


    getDetails() {
        return `Employee: ${this.name} (ID: ${this.id})`;

    }


    work() {
        return `${this.name} is working`;
    }

}

// Child class 1 - Manager
class Manager extends Employee {

    constructor(name, id, baseSalary, teamSize) {
        super(name, id, baseSalary);
        this.teamSize = teamSize;
        this.bonus = 5000;

    }


    // Override calculateSalary - adds bonus
    calculateSalary() {
        const baseSalary = super.calculateSalary(); // Call parent method
        return baseSalary + this.bonus + (this.teamSize * 500);

    }


    // Override getDetails - extends parent method
    getDetails() {
        const baseDetails = super.getDetails(); // Call parent method
        return `${baseDetails}\nRole: Manager\nTeam Size: ${this.teamSize}`;

    }


    // Additional method
    conductMeeting() {
        return `${this.name} is conducting a team meeting`;

    }

}


// Child class 2 - Developer
class Developer extends Employee {

    constructor(name, id, baseSalary, programmingLanguages) {
        super(name, id, baseSalary);
        this.programmingLanguages = programmingLanguages;
        this.projectBonus = 3000;

    }

    // Override calculateSalary
    calculateSalary() {
        const baseSalary = super.calculateSalary();
        const languageBonus = this.programmingLanguages.length * 500;
        return baseSalary + this.projectBonus + languageBonus;

    }


    // Override getDetails
    getDetails() {
        const baseDetails = super.getDetails();
        return `${baseDetails}\nRole: Developer\nSkills: ${this.programmingLanguages.join(", ")}`;

    }


    // Override work method
    work() {
        const baseWork = super.work(); // Call parent method
        return `${baseWork} - Writing code in ${this.programmingLanguages[0]}`;

    }
}



class Intern extends Employee {

    constructor(name, id, baseSalary, mentor) {
        super(name, id, baseSalary);
        this.mentor = mentor;

    }


    // Override calculateSalary - reduces salary
    calculateSalary() {
        const baseSalary = super.calculateSalary();
        return baseSalary * 0.6; // Interns get 60% of base

    }

    // Override getDetails
    getDetails() {
        const baseDetails = super.getDetails();
        return `${baseDetails}\nRole: Intern\nMentor: ${this.mentor}`;

    }
}


// Testing
console.log("=== Method Overriding with super() ===\n");

const manager = new Manager("Alice Johnson", "M001", 80000, 5);
const developer = new Developer("Bob Smith", "D001", 70000, ["JavaScript", "Python", "Java"]);
const intern = new Intern("Charlie Brown", "I001", 40000, "Bob Smith");

console.log("--- Employee Details ---");
console.log(manager.getDetails());
console.log("\n" + developer.getDetails());
console.log("\n" + intern.getDetails());

console.log("\n\n--- Salary Calculation ---");
console.log(`Manager Salary: $${manager.calculateSalary().toLocaleString()}`);
console.log(`Developer Salary: $${developer.calculateSalary().toLocaleString()}`);
console.log(`Intern Salary: $${intern.calculateSalary().toLocaleString()}`);

console.log("\n--- Work Method ---");
console.log(manager.work());
console.log(developer.work());
console.log(intern.work());

console.log("\n--- Specific Methods ---");
console.log(manager.conductMeeting());