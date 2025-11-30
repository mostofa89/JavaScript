class ContactInfo {
    constructor(email, phone, linkedin) {
        this.email = email;
        this.phone = phone;
        this.linkedin = linkedin;
    }


    getContact() {
        return `${this.email} | ${this.phone} | ${this.linkedin}`;

    }
}


class Salary {
    constructor(baseSalary, bonus = 0, benefits = 0) {
        this.baseSalary = baseSalary;
        this.bonus = bonus;
        this.benefits = benefits;

    }


    getTotalCompensation() {
        return this.baseSalary + this.bonus + this.benefits;

    }


    getBreakdown() {
        return `Base: $${this.baseSalary.toLocaleString()}, Bonus: $${this.bonus.toLocaleString()}, Benefits: $${this.benefits.toLocaleString()}`;

    }

}

class Employee {
    // Employee HAS-A ContactInfo
    // Employee HAS-A Salary
    // Employee HAS-A list of Skills

    constructor(name, id, position, department) {
        this.name = name;
        this.id = id;
        this.position = position;
        this.department = department;
        this.contact = null;
        this.salary = null;
        this.skills = [];
        this.projects = [];

    }

    
    setContactInfo(email, phone, linkedin) {
        this.contact = new ContactInfo(email, phone, linkedin);

    }


    setSalary(baseSalary, bonus = 0, benefits = 0) {
        this.salary = new Salary(baseSalary, bonus, benefits);

    }

    addSkill(skill) {
        this.skills.push(skill);

    }


    assignProject(project) {
        this.projects.push(project);

    }

    getInfo() {
        let info = `${this.name} (ID: ${this.id})`;
        info += `\n Position: ${this.position}`;
        info += `\n Department: ${this.department}`;
        
        if (this.contact) {
            info += `\n ${this.contact.getContact()}`;

        }
    

        if (this.salary) {
            info += `Total Compensation: $${this.salary.getTotalCompensation().toLocaleString()}`;
            info += `(${this.salary.getBreakdown()})`;

        }
        

        if (this.skills.length > 0) {
            info += `Skills: ${this.skills.join(", ")}`;

        }
    
        if (this.projects.length > 0) {
            info += `Projects (${this.projects.length}):`;
            this.projects.forEach(project => {
                info += `\n - ${project.name}`;
            });

            
        }
        
        return info;

    }

}


class Project {
    // Project HAS-A list of Employees (team members)
    // Project HAS-A Budget

    constructor(name, description, budget, deadline) {
        this.name = name;
        this.description = description;
        this.budget = budget;
        this.deadline = deadline;
        this.teamMembers = [];
        this.status = "In Progress";

    }


    addTeamMember(employee) {
        this.teamMembers.push(employee);
        employee.assignProject(this);

    }


    getInfo() {
        let info = `Project: ${this.name}`;
        info += `Description: ${this.description}`;
        info += `Budget: $${this.budget.toLocaleString()}`;
        info += `Deadline: ${this.deadline}`;
        info += `Status: ${this.status}`;
        info += `Team Size: ${this.teamMembers.length}`;
        
        if (this.teamMembers.length > 0) {
            info += `\n   Team Members:`;
            this.teamMembers.forEach(member => {
                info += `\n      - ${member.name} (${member.position})`;
            });

        }
        
        return info;

    }

}


class Department {
    // Department HAS-A list of Employees
    // Department HAS-A Manager

    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.employees = [];
        this.manager = null;

    }


    setManager(employee) {
        this.manager = employee;

    }


    addEmployee(employee) {
        this.employees.push(employee);

    }


    getInfo() {
        let info = `${this.name} Department - ${this.location}`;
        
        if (this.manager) {
            info += `Manager: ${this.manager.name}`;

        }
        
        info += `Total Employees: ${this.employees.length}`;
        
        return info;

    }

}


// Main class
class Company {
    // Company HAS-A list of Employees
    // Company HAS-A list of Departments
    // Company HAS-A list of Projects

    constructor(name, industry, founded) {
        this.name = name;
        this.industry = industry;
        this.founded = founded;
        this.employees = [];
        this.departments = [];
        this.projects = [];
    }


    addEmployee(employee) {
        this.employees.push(employee);
    }


    addDepartment(department) {
        this.departments.push(department);
    }


    addProject(project) {
        this.projects.push(project);
    }


    displayCompanyOverview() {
        console.log(`${'='.repeat(70)}`);
        console.log(`${this.name}`);
        console.log(`Industry: ${this.industry} | Founded: ${this.founded}`);
        console.log(`Total Employees: ${this.employees.length}`);
        console.log(`Total Departments: ${this.departments.length}`);
        console.log(`Active Projects: ${this.projects.length}`);
        console.log('='.repeat(70));
    }

    
    displayDepartments() {
        console.log(`\n${'='.repeat(70)}`);
        console.log("DEPARTMENTS");
        console.log('='.repeat(70));
        
        this.departments.forEach(dept => {
            console.log(dept.getInfo());
        });

    }


    displayEmployees() {
        console.log(`\n${'='.repeat(70)}`);
        console.log("EMPLOYEES");
        console.log('='.repeat(70));
        
        this.employees.forEach(emp => {
            console.log(emp.getInfo());
        });

    }


    displayProjects() {
        console.log(`\n${'='.repeat(70)}`);
        console.log("ACTIVE PROJECTS");
        console.log('='.repeat(70));
        
        this.projects.forEach(project => {
            console.log(project.getInfo());
        });

    }

}

// Testing
console.log("=== Company Has-A Relationship Demo ===");

// Create company
const company = new Company("TechVision Solutions", "Software Development", 2015);

// Create departments
const engineeringDept = new Department("Engineering", "Building A");
const marketingDept = new Department("Marketing", "Building B");

company.addDepartment(engineeringDept);
company.addDepartment(marketingDept);

// Create employees
const emp1 = new Employee("Sarah Chen", "EMP001", "Senior Developer", "Engineering");
emp1.setContactInfo("sarah.chen@techvision.com", "+1-555-0101", "linkedin.com/in/sarachen");
emp1.setSalary(120000, 15000, 5000);
emp1.addSkill("JavaScript");
emp1.addSkill("React");
emp1.addSkill("Node.js");

const emp2 = new Employee("Michael Johnson", "EMP002", "Project Manager", "Engineering");
emp2.setContactInfo("michael.j@techvision.com", "+1-555-0102", "linkedin.com/in/michaelj");
emp2.setSalary(110000, 12000, 5000);
emp2.addSkill("Agile");
emp2.addSkill("Scrum");
emp2.addSkill("Leadership");

const emp3 = new Employee("Emily Davis", "EMP003", "UX Designer", "Engineering");
emp3.setContactInfo("emily.d@techvision.com", "+1-555-0103", "linkedin.com/in/emilyd");
emp3.setSalary(95000, 8000, 5000);
emp3.addSkill("Figma");
emp3.addSkill("UI/UX");
emp3.addSkill("Design Thinking");

const emp4 = new Employee("David Lee", "EMP004", "Marketing Manager", "Marketing");
emp4.setContactInfo("david.lee@techvision.com", "+1-555-0104", "linkedin.com/in/davidlee");
emp4.setSalary(100000, 10000, 5000);
emp4.addSkill("Digital Marketing");
emp4.addSkill("SEO");
emp4.addSkill("Content Strategy");

// Add employees to company and departments
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);
company.addEmployee(emp4);

engineeringDept.addEmployee(emp1);
engineeringDept.addEmployee(emp2);
engineeringDept.addEmployee(emp3);
engineeringDept.setManager(emp2);

marketingDept.addEmployee(emp4);
marketingDept.setManager(emp4);

// Create projects
const project1 = new Project(
    "E-Commerce Platform",
    "Build a scalable e-commerce solution",
    500000,
    "2024-12-31"
);

const project2 = new Project(
    "Mobile App Redesign",
    "Redesign mobile application UI/UX",
    200000,
    "2024-09-30"
);

// Assign team members to projects
project1.addTeamMember(emp1);
project1.addTeamMember(emp2);
project1.addTeamMember(emp3);

project2.addTeamMember(emp3);
project2.addTeamMember(emp1);

company.addProject(project1);
company.addProject(project2);

// Display all information
company.displayCompanyOverview();
company.displayDepartments();
company.displayEmployees();
company.displayProjects();

console.log('\n');