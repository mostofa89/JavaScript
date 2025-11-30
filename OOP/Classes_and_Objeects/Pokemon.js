class Pokemon {

    constructor( pokemon1_name, pokemon2_name, pokemon1_power, pokemon2_power, damage_rate){
        this.pokemon1_name = pokemon1_name;
        this.pokemon2_name = pokemon2_name;
        this.pokemon1_power = pokemon1_power;
        this.pokemon2_power = pokemon2_power;
        this.damage_rate = damage_rate;

    }

}


// Driver Code
console.log("=====================================")
let team_pika = new Pokemon("Pikachu", "charmander", 100, 80, 20);
console.log(`Pokemon 1 : ${team_pika.pokemon1_name}`);
console.log(`Pokemon 2 : ${team_pika.pokemon2_name}`);
console.log(`Pokemon 1 Power : ${team_pika.pokemon1_power}`);
console.log(`Pokemon 2 Power : ${team_pika.pokemon2_power}`);
console.log(`Damage Rate : ${team_pika.damage_rate}`);
let combineed_power = (team_pika.pokemon1_power + team_pika.pokemon2_power ) * team_pika.damage_rate;
console.log(`Combined Power after Damage : ${combineed_power}`);
console.log("=====================================")
let team_bulba = new Pokemon("Bulbasaur", "Squirtle", 90, 110, 15);
console.log(`Pokemon 1 : ${team_bulba.pokemon1_name}`);
console.log(`Pokemon 2 : ${team_bulba.pokemon2_name}`);
console.log(`Pokemon 1 Power : ${team_bulba.pokemon1_power}`);
console.log(`Pokemon 2 Power : ${team_bulba.pokemon2_power}`);
console.log(`Damage Rate : ${team_bulba.damage_rate}`);
combineed_power = (team_bulba.pokemon1_power + team_bulba.pokemon2_power) * team_bulba.damage_rate;
console.log(`Combined Power after Damage : ${combineed_power}`);
console.log("=====================================")
