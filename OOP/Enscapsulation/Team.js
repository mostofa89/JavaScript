class Team {
    #teamName;
    #players;

    constructor(teamName){
        this.#teamName = teamName;
        this.#players = [];

    }


    getTeamName(){
        return this.#teamName;
    }


    addPlayer(players){
        for (let player of players){
            this.#players.push(player.name);
        }
    
    }
    
    
    getPlayers(){
        return this.#players;

    }

    
}



class player {
    constructor(name){
        this.name = name;
    }


}


// Example usage:
console.log("=========================");
let team = new Team("Warriors");
let players = [new player("Alice"), new player("Bob"), new player("Charlie")];
team.addPlayer(players);
console.log(`Team Name: ${team.getTeamName()}`);
console.log(`Players: ${team.getPlayers().join(", ")}`);
console.log("=========================");


