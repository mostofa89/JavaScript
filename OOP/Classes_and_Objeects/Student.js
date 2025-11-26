class Student {

    constructor(name, cgpa, courses_taken){
        this.name = name;
        this.cgpa = cgpa;
        this.courses_taken = courses_taken;
        this.advising_status = "Approved";
        this.student_status = "Regular";

        if (this.cgpa < 2.0 && this.courses_taken > 2){
            this.advising_status = "Not Approved";
            this.student_status = "Probation";
            this.courses_taken = 0;
            console.log(`Sorry, ${this.name}, you are on probation and cannot take more than 2 courses.`)

        }else if (this.cgpa < 2.0 && this.courses_taken <= 2){
            this.student_status = "Probation";
            console.log(`Study hard this time, ${this.name}.`)

        }else if (this.cgpa >= 2.0 && this.courses_taken <= 2){
            this.advising_status = "Denied";
            this.courses_taken = 0;
            console.log(`Hello ${this.name}, You are a regular student and have to take between 3 to 5 courses.`);

        }else if (this.cgpa >= 2.0 && this.courses_taken > 5){
            this.courses_taken = 0;
            this.advising_status = "Denied";
            console.log(`Hello ${this.name}, You are a regular student and have to take between 3 to 5 courses.`);

        }else if (this.cgpa >= 2.0 && this.courses_taken >=3 && this.courses_taken <=5){
            console.log(`Welcome ${this.name}, You are all set for the semester!`);

        }

    }


}


// Driver Code
console.log("=====================================")
let student1 = new Student("Alice", 3.5, 4);
console.log(`Name : ${student1.name}`);
console.log(`CGPA : ${student1.cgpa}`);
console.log(`Courses Taken : ${student1.courses_taken}`);
console.log(`Advising Status : ${student1.advising_status}`);
console.log(`Student Status : ${student1.student_status}`);
console.log("=====================================")

let student2 = new Student("Bob", 1.8, 3);
console.log(`Name : ${student2.name}`);
console.log(`CGPA : ${student2.cgpa}`);
console.log(`Courses Taken : ${student2.courses_taken}`);
console.log(`Advising Status : ${student2.advising_status}`);
console.log(`Student Status : ${student2.student_status}`);
console.log("=====================================")

let student3 = new Student("Charlie", 2.5, 6);
console.log(`Name : ${student3.name}`);
console.log(`CGPA : ${student3.cgpa}`);
console.log(`Courses Taken : ${student3.courses_taken}`);
console.log(`Advising Status : ${student3.advising_status}`);
console.log(`Student Status : ${student3.student_status}`);
console.log("=====================================")