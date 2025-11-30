class Passenger {
    static totalPassengers = 0;

    constructor(name, age, ticketNumber){
        this.name = name;
        this.age = age;
        this.ticketNumber = ticketNumber;
        this.cost = 450 * ticketNumber;
        Passenger.totalPassengers += 1;
    }


    set_bag_weight(weight){
        this.bagWeight = weight;
        if (weight > 20){
            this.cost += (weight - 20) * 10;
        }

    }


    printDetails(){
        console.log(`Name: ${this.name}
Age: ${this.age}
Ticket Number: ${this.ticketNumber}
Total Cost: ${this.cost}`);
    }

}


// Example Usage:
const p1 = new Passenger("Jack", 22, 3);
p1.set_bag_weight(25);
p1.printDetails();
console.log("-----------------------");
const p2 = new Passenger("Emma", 28, 1);
p2.set_bag_weight(18);
p2.printDetails();
console.log("-----------------------");
const p3 = new Passenger("Liam", 35, 2);
p3.set_bag_weight(22);
p3.printDetails();
console.log("-----------------------");
console.log("Total Passengers =", Passenger.totalPassengers);
