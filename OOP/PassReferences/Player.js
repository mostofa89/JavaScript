class Player {

    constructor(name, score, team = "TeamA") {
        this.name = name;
        this.score = score;
        this.team = team;
    }


    printDetails() {
        console.log(`${this.name}: Score ${this.score}, Team: ${this.team}`);
    }


    merge(...players) {
        for (let p of players) {
            this.score += p.score;

            if (p.team !== this.team) {
                this.team = "MixedTeam";
            }
        }
    }
}



// Driver Code
const p1 = new Player("Joy", 50, "TeamA");
const p2 = new Player("Rahim", 30, "TeamA");
const p3 = new Player("Karim", 40, "TeamB");

console.log("---- Before Merge ----");
p1.printDetails();
p2.printDetails();
p3.printDetails();

console.log("\n---- Merging p2 and p3 into p1 ----");
p1.merge(p2, p3);

console.log("\n---- After Merge ----");
p1.printDetails();
