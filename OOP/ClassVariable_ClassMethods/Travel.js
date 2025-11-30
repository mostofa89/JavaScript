class Travel {
    static count = 0;

    constructor(source, destination){
        this.source = source;
        this.destination = destination;
        this.time = null;
        Travel.count += 1;
    }


    set_time(time){
        this.time = time;
    }


    set_source(source){
        this.source = source;

    }



    display_travel_info(){
        return `Travel ID: ${Travel.count}
Source: ${this.source}
Destination: ${this.destination}
Time: ${this.time}`;
    }


    set_destination(destination){
        this.destination = destination;
    }


}



// ===============================
// Example Usage (converted)
// ===============================

console.log("No. of Traveller =", Travel.count);
console.log("=======================");

const t1 = new Travel("Dhaka", "India");
console.log(t1.display_travel_info());
console.log("=======================");

const t2 = new Travel("Kuala Lampur", "Dhaka");
t2.set_time(23);
console.log(t2.display_travel_info());
console.log("=======================");

const t3 = new Travel("Dhaka", "New_Zealand");
t3.set_time(15);
t3.set_destination("Germany");
console.log(t3.display_travel_info());
console.log("=======================");

const t4 = new Travel("Dhaka", "India");
t4.set_time(9);
t4.set_source("Malaysia");
t4.set_destination("Canada");
console.log(t4.display_travel_info());
console.log("=======================");

console.log("No. of Traveller =", Travel.count);