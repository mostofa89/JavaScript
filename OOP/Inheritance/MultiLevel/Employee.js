class Employee {

    constructor(name, joining_date, work_experience = 0, weekly_work_hour = null) {
        this.name = name;
        this.joining_date = joining_date;
        this.work_experience = work_experience;
        this.weekly_work_hour = weekly_work_hour;

    }


    showEmployeeDetails() {
        console.log(`Employee:
Name: ${this.name}
Joining Date: ${this.joining_date}
Work Experience: ${this.work_experience} years
Weekly Work Hour: ${this.weekly_work_hour ? this.weekly_work_hour + ' hours' : 'N/A'}`);

    }

}


class Manager extends Employee {

    constructor(name, joining_date, work_experience = 0, team_size, slary,  weekly_work_hour = null) {
        Employee.manager += 1;
        super(name, joining_date, work_experience, weekly_work_hour);
        this.salary = slary;
        this.team_size = team_size;
        this.id = "MNG-" + joining_date.replace(/-/g, "");

    }


    showManagerDetails() {
        console.log(`Manager Employee:
Name: ${this.name}
ID: ${this.id}
Joining Date: ${this.joining_date}
Work Experience: ${this.work_experience} years
Team Size: ${this.team_size}
Salary: BDT ${this.salary}`);

    }


}



class Programmer extends Employee {

    constructor(name, joining_date, work_experience = 0, designation, salary, weekly_work_hour = null) {
        super(name, joining_date, work_experience, weekly_work_hour);
        this.designation = designation;
        this.salary = salary;
        this.id = "PRG-" + joining_date.replace(/-/g, "");

    }



    showProgrammerDetails() {
        console.log(`Programmer Employee:
Name: ${this.name}
ID: ${this.id}
Joining Date: ${this.joining_date}
Designation: ${this.designation}
Salary: BDT ${this.salary}`);

    }


}


class Director extends Employee {

    constructor(name, joining_date, work_experience = 0, designation, salary, team_size, weekly_work_hour = null) {
        super(name, joining_date, work_experience, weekly_work_hour);
        this.designation = designation;
        this.salary = salary;
        this.team_size = team_size;
        this.id = "DIR-" + joining_date.replace(/-/g, "");

    }



    showDirectorDetails() {
        console.log(`Director Employee:
Name: ${this.name}
ID: ${this.id}
Joining Date: ${this.joining_date}
Designation: ${this.designation}
Salary: BDT ${this.salary}`);
    }


}



// Use case
console.log("=== Employee Example ===");
const emp1 = new Employee('John Doe', '2020-01-15', 3, 40);
emp1.showEmployeeDetails();
console.log("=========================");
console.log("=== Manager Example ===");
const mgr1 = new Manager('Jane Smith', '2018-03-22', 5, 10, 85000, 45);
mgr1.showManagerDetails();
console.log("=========================");
console.log("=== Programmer Example ===");
const prg1 = new Programmer('Alice Johnson', '2019-07-30', 4, 'Software Engineer', 75000, 50);
prg1.showProgrammerDetails();
console.log("=========================");
console.log("=== Director Example ===");
const dir1 = new Director('Bob Brown', '2015-11-10', 10, 'Director of Engineering', 150000, 50, 55);
dir1.showDirectorDetails();
console.log("=========================");