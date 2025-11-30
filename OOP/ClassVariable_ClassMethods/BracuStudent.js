class Student {
    static total_student = 0;
    static bracu_student = 0;
    static others_student = 0;

    constructor(name, dept, university = "BRAC University") {
        this.name = name;
        this.dept = dept;
        this.university = university;

        Student.total_student++;

        if (university === "BRAC University") {
            Student.bracu_student++;
        } else {
            Student.others_student++;
        }
    }


    static printDetails() {
        console.log(`Total Student(s): ${Student.total_student}
BRAC University Student(s): ${Student.bracu_student}
Other Institution Student(s): ${Student.others_student}`);
    }


    individualDetail() {
        console.log(`Name: ${this.name}
Department: ${this.dept}
Institution: ${this.university}`);
    }


    static createStudent(name, dept, university = "BRAC University") {
        return new Student(name, dept, university);
    }
    
}


// ========================
// Driver Code (Converted)
// ========================

Student.printDetails();
console.log("#########################");

const mikasa = new Student("Mikasa Ackerman", "CSE");
mikasa.individualDetail();
console.log("------------------------------------------");
Student.printDetails();

console.log("========================");

const harry = Student.createStudent(
    "Harry Potter",
    "Defence Against Dark Arts",
    "Hogwarts School"
);
harry.individualDetail();
console.log("-------------------------------------------");
Student.printDetails();

console.log("=========================");

const levi = Student.createStudent("Levi Ackerman", "CSE");
levi.individualDetail();
console.log("--------------------------------------------");
Student.printDetails();
