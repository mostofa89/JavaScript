class Employee {
    
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }


    showEmployeeInfo() {
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    }

}

class Programmer extends Employee {

    constructor(name, salary, language) {
        super(name, salary);
        this.language = language;
    }


    showProgrammerInfo() {
        console.log(`Programming Language: ${this.language}`);
    }

}

class SeniorProgrammer extends Programmer {

    constructor(name, salary, language, teamSize) {
        super(name, salary, language);
        this.teamSize = teamSize;
    }


    showSeniorInfo() {
        console.log(`Leads a team of ${this.teamSize} members`);
    }

}


// Usage
console.log("Multi-Level Inheritance Example:");
console.log("=================================");

const senior = new SeniorProgrammer("Alice", 120000, "Python", 5);
senior.showEmployeeInfo();
senior.showProgrammerInfo();
senior.showSeniorInfo();

console.log("=================================");
