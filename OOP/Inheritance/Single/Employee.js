class Employee {
    static employee_count = 0;
    static programmer = 0;
    static hr = 0;

    constructor(name, joining_date, work_experience = 0, weekly_work_hour = null) {
        this.name = name;
        this.joining_date = joining_date;
        this.work_experience = work_experience;
        this.weekly_work_hour = weekly_work_hour;
        Employee.employee_count += 1;
        
    }


    static showDetails() {
        console.log(`Company workforce:
Total Employee(s): ${Employee.employee_count}
Total Programmer Employee(s): ${Employee.programmer}
Total HR Employee(s): ${Employee.hr}`);

    }

}

// ===========================================================
// Programmer Class
// ===========================================================
class Programmer extends Employee {
    static programmer_id_count = 1;

    constructor(name, joining_date, work_experience = 0, weekly_work_hour = null) {
        Employee.programmer += 1;

        super(name, joining_date, work_experience, weekly_work_hour);

        // Auto ID
        this.id = `P-EMP-${Programmer.programmer_id_count}`;
        Programmer.programmer_id_count++;

        this.salary = 0;

        // Determine designation
        if (work_experience < 3) this.designation = "Junior Software Engineer";
        else if (work_experience < 5) this.designation = "Software Engineer";
        else if (work_experience < 8) this.designation = "Senior Software Engineer";
        else this.designation = "Technical Lead";
    }


    calculateSalary() {
        const base = 30000;
        const increment = this.work_experience * 5000;
        this.salary = base + increment;

    }


    calculateOvertime() {
        if (this.weekly_work_hour && this.weekly_work_hour > 40) {
            const extra = this.weekly_work_hour - 40;
            const overtime_pay = extra * 200;
            this.salary += overtime_pay;

        }

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

// ===========================================================
// HR Class
// ===========================================================
class HR extends Employee {
    constructor(name, joining_date, work_experience = 0, weekly_work_hour = null) {
        Employee.hr += 1;
        super(name, joining_date, work_experience, weekly_work_hour);

        this.id = "HR-" + joining_date.replace(/-/g, "");

    }


    showHREmployeeDetails() {
        console.log(`HR Employee:
Name: ${this.name}
ID: ${this.id}
Joining Date: ${this.joining_date}`);
    }

}

// ===========================================================
// Intern Programmer  (NO inheritance)
// ===========================================================
class InternProgrammer {
    static intern_id_count = 1;

    constructor(name, joining_date, intern_type = "Unpaid") {
        this.name = name;
        this.joining_date = joining_date;
        this.intern_type = intern_type;

        this.id = `INT-${InternProgrammer.intern_id_count}`;
        InternProgrammer.intern_id_count++;
    }


    showInternDetails() {
        console.log(`Intern Programmer:
Name: ${this.name}
ID: ${this.id}
Joining Date: ${this.joining_date}
Intern Type: ${this.intern_type}`);

    }


    promoteToProgrammer() {
        console.log(`${this.name} has been promoted to Programmer!`);
        Employee.programmer += 1;
        Employee.employee_count += 1;

        return new Programmer(this.name, this.joining_date, 0, 40);
    }

}

// ===========================================================
// Driver Code
// ===========================================================

Employee.showDetails();
console.log("=========1=========");

let richard = new Programmer("Richard Hendricks", "2021-06-08", 4, 48);
richard.calculateSalary();
console.log("=========2=========");
richard.showProgrammerDetails();
console.log("=========3=========");
richard.calculateOvertime();
console.log("=========4=========");
richard.showProgrammerDetails();

console.log("=========5=========");
let monica = new HR("Monica Hall", "2022-07-06", 2, 40);

console.log("=========6=========");
monica.showHREmployeeDetails();

console.log("=========7=========");
Employee.showDetails();

console.log("=========8=========");
let gilfoyle = new Programmer("Bertram Gilfoyle", "2020-03-02", 6, 35);
gilfoyle.calculateSalary();
console.log("=========9=========");
gilfoyle.calculateOvertime();
console.log("=========10=========");
gilfoyle.showProgrammerDetails();

console.log("=========11=========");
let gavin = new Programmer("Gavin Belson", "2016-12-20", 9);
gavin.calculateSalary();
gavin.calculateOvertime();
gavin.showProgrammerDetails();

console.log("=========12=========");
let yang = new InternProgrammer("Jian Yang", "2023-01-01");
yang.showInternDetails();

console.log("=========13=========");
let jared = new InternProgrammer("Jared Dunn", "2023-06-05", "Paid");
jared.showInternDetails();

console.log("=========14=========");
jared = jared.promoteToProgrammer();

console.log("=========15=========");
Employee.showDetails();

console.log("=========16=========");
yang = yang.promoteToProgrammer();
yang.calculateSalary();
yang.showProgrammerDetails();

console.log("=========17=========");
Employee.showDetails();
