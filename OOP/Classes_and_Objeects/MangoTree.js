class MangoTree {

    constructor(variety){
        this.variety = variety;
        this.height = 1;
        this.numberOfMangoes = 0;
    
    }


}


// Driver Code
console.log("=====================================")
let tree1 = new MangoTree("Alphonso");
console.log("Mango Tree 1 Details:");
console.log(`Tree Variety : ${tree1.variety}`);
console.log(`Initial Height : ${tree1.height} ft`);
console.log(`Initial Number of Mangoes : ${tree1.numberOfMangoes}`);
console.log("=====================================")
let tree2 = new MangoTree("Kesar");
console.log("Mango Tree 1 Details:");
console.log(`Tree Variety : ${tree2.variety}`);
console.log(`Initial Height : ${tree2.height} ft`);
console.log(`Initial Number of Mangoes : ${tree2.numberOfMangoes}`);
console.log("=====================================")

console.log("Updated details after 5 years:");

tree1.height += 15;
tree2.height += 10;
tree1.numberOfMangoes = tree1.height * 10;
tree2.numberOfMangoes = tree2.height * 15;
console.log("=====================================")
console.log("Mango Tree 1 Details:");
console.log(`Tree Variety : ${tree1.variety}`);
console.log(`Initial Height : ${tree1.height} ft`);
console.log(`Initial Number of Mangoes : ${tree1.numberOfMangoes}`);
console.log("=====================================")
console.log("Mango Tree 1 Details:");
console.log(`Tree Variety : ${tree2.variety}`);
console.log(`Initial Height : ${tree2.height} ft`);
console.log(`Initial Number of Mangoes : ${tree2.numberOfMangoes}`);
console.log("=====================================")