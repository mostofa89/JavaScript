class Teacher {

    constructor(name, department){

        this.name = name;
        this.department = department;
        this.course_list = [];

    }


    addCourse(courses){
        for (let course of courses){
            this.course_list.push(course);
        }

    }


    printDetails(){
        console.log("=========================");
        console.log(`Teacher Name: ${this.name}`);
        console.log(`Department: ${this.department}`);
        console.log(`List of courses:`);
        console.log("=========================");
        for (let course of this.course_list){
            console.log(`Course: ${course.course_name}`);
            console.log("=========================");
        

        }

    }
    
}



class Course {

    constructor(course_name){
        this.course_name = course_name;

    }

}



// Driver code
let teacher1 = new Teacher("Alice Johnson", "Mathematics");
let course1 = new Course("Calculus");
let course2 = new Course("Linear Algebra");
let course3 = new Course("Statistics");
teacher1.addCourse([course1, course2, course3]);
teacher1.printDetails();
let teacher2 = new Teacher("Bob Smith", "Computer Science");
let course4 = new Course("Data Structures");
let course5 = new Course("Algorithms");
teacher2.addCourse([course4, course5]);
teacher2.printDetails();