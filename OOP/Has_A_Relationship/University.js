class Address {

    constructor(street, city, state, zipCode) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }


    getFullAddress() {
        return `${this.street}, ${this.city}, ${this.state} ${this.zipCode}`;
    }

}

class Course {

    constructor(code, name, credits, instructor) {
        this.code = code;
        this.name = name;
        this.credits = credits;
        this.instructor = instructor;
        this.students = [];
    }


    enrollStudent(student) {
        this.students.push(student);
        return `${student.name} enrolled in ${this.name}`;
    }


    getInfo() {
        return `${this.code}: ${this.name} (${this.credits} credits) - Prof. ${this.instructor}`;
    }


    getEnrollmentCount() {
        return this.students.length;
    }
}


class Student {

    constructor(name, studentId, major) {
        this.name = name;
        this.studentId = studentId;
        this.major = major;
        this.address = null;
        this.courses = []; 
        this.gpa = 0.0;

    }


    setAddress(street, city, state, zipCode) {
        this.address = new Address(street, city, state, zipCode);

    }


    enrollInCourse(course) {
        this.courses.push(course);
        course.enrollStudent(this); 

    }


    getInfo() {
        let info = `Student: ${this.name} (ID: ${this.studentId})\n`;
        info += `Major: ${this.major}\n`;

        
        if (this.address) {
            info += `Address: ${this.address.getFullAddress()}\n`;

        }
        
        if (this.courses.length > 0) {
            info += `Enrolled Courses (${this.courses.length}):\n`;
            this.courses.forEach(course => {
                info += `  - ${course.getInfo()}\n`;
            });

        }
        
        return info;

    }


    getTotalCredits() {
        return this.courses.reduce((total, course) => total + course.credits, 0);

    }

}


class Department {

    constructor(name, building) {
        this.name = name;
        this.building = building;
        this.courses = []; // Department HAS-A list of Courses
        this.students = []; // Department HAS-A list of Students

    }


    addCourse(course) {
        this.courses.push(course);

    }


    addStudent(student) {
        this.students.push(student);

    }


    getInfo() {
        return `Department of ${this.name} - ${this.building}`;

    }
}


// Main class
class University {
    // University HAS-A list of Departments
    // University HAS-A list of Students
    // University HAS-A list of Courses
    // University HAS-A Address

    constructor(name, established) {
        this.name = name;
        this.established = established;
        this.address = null;
        this.departments = [];
        this.students = [];
        this.courses = [];

    }


    setAddress(street, city, state, zipCode) {
        this.address = new Address(street, city, state, zipCode);

    }


    addDepartment(department) {
        this.departments.push(department);
        console.log(`Added ${department.name} department`);

    }


    addStudent(student) {
        this.students.push(student);
        console.log(`✓ Registered student: ${student.name}`);

    }


    addCourse(course) {
        this.courses.push(course);
        console.log(`✓ Added course: ${course.name}`);


    }


    displayUniversityInfo() {
        console.log(`\n${'='.repeat(60)}`);
        console.log(`${this.name} (Est. ${this.established})`);
        

        if (this.address) {
            console.log(`Location: ${this.address.getFullAddress()}`);

        }
        
        console.log(`\nDepartments: ${this.departments.length}`);
        this.departments.forEach(dept => {
            console.log(`  - ${dept.getInfo()}`);
        });
        
        console.log(`\nTotal Students: ${this.students.length}`);
        console.log(`Total Courses: ${this.courses.length}`);
        console.log('='.repeat(60));

    }


    displayStudentDetails() {
        console.log(`\n${'='.repeat(60)}`);
        console.log("STUDENT DETAILS");
        console.log('='.repeat(60));
        
        this.students.forEach(student => {
            console.log(`\n${student.getInfo()}`);
            console.log(`Total Credits: ${student.getTotalCredits()}`);
            console.log('-'.repeat(60));
        });

    }
}


// Testing
console.log("=== University Has-A Relationship Demo ===\n");

// Create university
const university = new University("Tech University", 1985);
university.setAddress("100 University Ave", "Boston", "MA", "02115");

// Create departments
const csDept = new Department("Computer Science", "Tech Building A");
const mathDept = new Department("Mathematics", "Science Hall");

university.addDepartment(csDept);
university.addDepartment(mathDept);

console.log();

// Create courses
const course1 = new Course("CS101", "Introduction to Programming", 3, "Dr. Smith");
const course2 = new Course("CS201", "Data Structures", 4, "Dr. Johnson");
const course3 = new Course("MATH101", "Calculus I", 4, "Dr. Williams");

university.addCourse(course1);
university.addCourse(course2);
university.addCourse(course3);

csDept.addCourse(course1);
csDept.addCourse(course2);
mathDept.addCourse(course3);

console.log();

// Create students
const student1 = new Student("Alice Johnson", "S12345", "Computer Science");
student1.setAddress("123 Main St", "Boston", "MA", "02116");

const student2 = new Student("Bob Smith", "S12346", "Computer Science");
student2.setAddress("456 Oak Ave", "Cambridge", "MA", "02139");

university.addStudent(student1);
university.addStudent(student2);

console.log();

// Enroll students in courses
console.log("Enrolling students in courses:");
student1.enrollInCourse(course1);
student1.enrollInCourse(course2);
student1.enrollInCourse(course3);

student2.enrollInCourse(course1);
student2.enrollInCourse(course3);

// Display information
university.displayUniversityInfo();
university.displayStudentDetails();

// Show course enrollment
console.log(`\n${'='.repeat(60)}`);
console.log("COURSE ENROLLMENT");
console.log('='.repeat(60));
university.courses.forEach(course => {
    console.log(`\n${course.getInfo()}`);
    console.log(`Enrolled Students: ${course.getEnrollmentCount()}`);
});