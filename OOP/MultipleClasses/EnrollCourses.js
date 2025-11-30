class Student {

    constructor(name, student_id){
        this.name = name;
        this.student_id = student_id;
        this.enrolled_courses = [];

    }


    enrollCourses(courses){
        for (let course of courses){
            this.enrolled_courses.push(course);
        }
    }


    showCourses() {
        console.log("=========================");
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.student_id}`);
        console.log(`Enrolled Courses:`);
        for (let course of this.enrolled_courses) {
             console.log("=========================");
            console.log(`- ${course}`);
           
        }

        console.log("=========================");
        
    }

}


class Course {
    constructor(course_name){
        this.course_name = course_name;
    }

}



class Enrollment {

    constructor(student, semester, courses){
        this.student = student;
        this.semester = semester;
        this.courses = courses;

    }


    showEnrollmentDetails() {
        console.log("=========================");
        console.log(`Enrollment Details:`);
        console.log(`Student Name: ${this.student.name}`);
        console.log(`Semester: ${this.semester}`);
        console.log(`Courses Enrolled:`);
        for (let course of this.courses) {
            console.log("=========================");
            console.log(`- ${course}`);
        }
        console.log("=========================");
    }


}



// Driver code 
let student1 = new Student("John Doe", "S12345");
student1.enrollCourses(["Calculus", "Linear Algebra", "Statistics"]);
student1.showCourses();
let student2 = new Student("Jane Smith", "S67890");
student2.enrollCourses(["Data Structures", "Algorithms"]);
student2.showCourses();
student2.enrollCourses(["Operating Systems", "Database Systems"]);
student2.showCourses();
let enrollment1 = new Enrollment(student1, "Fall 2023", ["Calculus", "Linear Algebra"]);
let enrollment2 = new Enrollment(student2, "Fall 2023", ["Data Structures", "Algorithms"]);
enrollment1.showEnrollmentDetails();
enrollment2.showEnrollmentDetails();