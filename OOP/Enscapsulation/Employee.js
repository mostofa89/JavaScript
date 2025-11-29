class Employee {
    #salary;

    constructor(salary) {
        this.#salary = salary;
    }


    // Getter
    get salary() {
        return this.#salary;
    }


    // Setter
    set salary(newSalary) {
        if (newSalary > 0) {
            this.#salary = newSalary;
        } else {
            console.log("Invalid salary");
        }
    }
}


// Driver code
console.log("====================================");

const emp1 = new Employee(50000);
console.log("Initial Salary:", emp1.salary);

emp1.salary = 60000;
console.log("Updated Salary:", emp1.salary);

emp1.salary = -1000; // triggers invalid message
console.log("Final Salary:", emp1.salary);

console.log("====================================");
