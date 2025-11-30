class Student {
    static id = 0

    constructor(name, age, dept, cgpa){
        this.name = name;
        this.age = age;
        this.dept = dept;
        this.cgpa = cgpa;
        Student.id += 1

    }


    showDetails(){
        console.log(`ID : ${Student.id}, 
Name: ${this.name}
Age: ${this.age}
Department: ${this.dept}
CGPA: ${this.cgpa}`);
    }



    static fromString(str){
        const [name, age, dept, cgpa] = str.split("-");
        return new Student(name, age, dept, cgpa);

    }


}



// Example usage:
const s1 = new Student("Samin", "CSE", 21, 3.91);
s1.showDetails();
console.log("-----------------------");

const s2 = new Student("Fahim", "ECE", 21, 3.85);
s2.showDetails();
console.log("-----------------------");

const s3 = new Student("Tahura", "EEE", 22, 3.01);
s3.showDetails();
console.log("-----------------------");

const s4 = Student.fromString("Sumaiya-BBA-23-3.96");
s4.showDetails();

