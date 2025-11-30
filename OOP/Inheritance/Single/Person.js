class Person {

    constructor(name, age){
        this.name = name;
        this.age = age;

    }

}


class Student extends Person {

    constructor(name, age, s_id, dept){
        super(name, age);
        this.s_id = s_id;
        this.dept = dept;

    }


    info(){
        console.log(`Name: ${this.name}
Age: ${this.age}
Student ID: ${this.s_id}
Department: ${this.dept}`)

    }

}


// Example usage:
console.log("=== Student Example ===");
const student = new Student('Alice', 20, 'S12345', 'Computer Science');
student.info();
console.log("=======================");