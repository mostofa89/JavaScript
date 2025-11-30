class Player {
    static total = 0;
    static players_list = [];

    constructor(name = null, jersey_num = 10, team = null) {
        this.name = name;
        this.jersey_num = jersey_num;
        this.team = team;

        Player.total++;
        Player.players_list.push(name);
    }

    
    set_name(name) {
        this.name = name;

        // Replace the first null entry in the players_list
        for (let i = 0; i < Player.players_list.length; i++) {
            if (Player.players_list[i] === null) {
                Player.players_list[i] = name;
                break;
            }
        }
    }


    set_team(team) {
        this.team = team;
    }


    set_number(num) {
        this.jersey_num = num;
    }


    static info() {
        console.log(`Total number of players: ${Player.total}`);
        process.stdout.write("Players enlisted so far: ");

        Player.players_list.forEach((player, index) => {
            if (index === Player.players_list.length - 1) {
                process.stdout.write(`${player}\n`);
            } else {
                process.stdout.write(`${player}, `);
            }
        });
    }


    player_detail() {
        return `Player Name: ${this.name}
Jersey Number: ${this.jersey_num}
Country: ${this.team}`;
    }

}


// =======================
// Driver Code (Converted)
// =======================

console.log("Total number of players:", Player.total);
console.log("---------------------------");

let p1 = new Player();
p1.set_name("Neymar");
p1.set_team("Brazil");
console.log(p1.player_detail());
console.log("========================");
Player.info();

console.log("---------------------------");

let p2 = new Player("Ronaldo");
p2.set_number(7);
p2.set_team("Portugal");
console.log(p2.player_detail());
console.log("========================");
Player.info();

console.log("---------------------------");

let p3 = new Player("Messi");
p3.set_team("Argentina");
console.log(p3.player_detail());
console.log("========================");
Player.info();

console.log("---------------------------");

let p4 = new Player("Mbappe", 10, "France");
console.log(p4.player_detail());
console.log("========================");
Player.info();
console.log("---------------------------");