class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }


    showEmployee() {
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
        
    }

}

class Programmer extends Employee {

    constructor(name, salary, language) {
        super(name, salary);
        this.language = language;
    }


    showProgrammer() {

        console.log(`${this.name} codes in ${this.language}`);
    }

}

class HR extends Employee {

    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }


    showHR() {
        console.log(`${this.name} works in ${this.department} department`);

    }
}

class Manager extends Employee {

    constructor(name, salary, teamSize) {
        super(name, salary);
        this.teamSize = teamSize;
    }


    showManager() {
        console.log(`${this.name} manages a team of ${this.teamSize} people`);
    }

}

// Usage
console.log("Hierarchical Inheritance Example:");
console.log("----------------------------------");

const p = new Programmer("Alice", 60000, "Python");
const h = new HR("Bob", 50000, "Recruitment");
const m = new Manager("Charlie", 90000, 10);

p.showEmployee();
p.showProgrammer();

console.log("----------------------------------");

h.showEmployee();
h.showHR();

console.log("----------------------------------");

m.showEmployee();
m.showManager();

console.log("----------------------------------");
