class Doctor {

    constructor(name, specialization){
        this.name = name;
        this.specialization = specialization;
        
    }

    show_info(){
        console.log(`Name: ${this.name}`)
        console.log(`Specialization: ${this.specialization}`)
    }

}



class Patient{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.appointments = [];

    }


    add_appointment(appointments){
        this.appointments.push(appointments);

    }


    show_appointments(){
        console.log(`Patient Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Appointments:`);
        for (let appointment of this.appointments){
            console.log(`- ${appointment}`);
        }

    }


}


class Appointment {
    constructor(date, time, doctor, patient) {
        this.date = date;
        this.time = time;
        this.doctor = doctor;
        this.patient = patient;
        
    }   


}



// Driver codelet doctor1 = new Doctor("Dr. Emily Carter", "Cardiology");
console.log("================================")
let doctor1 = new Doctor("Dr. Emily Carter", "Cardiology");
doctor1.show_info();
let patient1 = new Patient("John Doe", 45);
let appointment1 = new Appointment("2024-07-15", "10:00 AM", doctor1.name, patient1.name);
patient1.add_appointment(appointment1.date + " at " + appointment1.time + " with " + appointment1.doctor);
patient1.show_appointments();
console.log("================================")
let doctor2 = new Doctor("Dr. Michael Smith", "Dermatology");
doctor2.show_info();
let patient2 = new Patient("Jane Smith", 30);
let appointment2 = new Appointment("2024-07-16", "2:00 PM", doctor2.name, patient2.name);
patient2.add_appointment(appointment2.date + " at " + appointment2.time + " with " + appointment2.doctor);
patient2.show_appointments();
console.log("================================")