class Product {

    constructor(name, stock, category = "General") {
        this.name = name;
        this.stock = stock;
        this.category = category;
    }


    printDetails() {
        console.log(`${this.name} -> Stock: ${this.stock}, Category: ${this.category}`);
    }


    combine(...products) {
        for (let p of products) {
            this.stock += p.stock;

            if (p.category !== this.category) {
                this.category = "MixedCategory";
            }
        }
    }
}



// Driver Code
let p1 = new Product("Laptop", 50, "Electronics");
let p2 = new Product("Mouse", 150, "Electronics");
let p3 = new Product("Notebook", 200, "Stationery");

console.log("---- Before Combine ----");
p1.printDetails();
p2.printDetails();
p3.printDetails();

console.log("\n---- Combining p2 into p1 ----");
p1.combine(p2);
console.log("\n---- Combining p2 and p3 into p1 ----");
p1.combine(p2, p3);

console.log("\n---- After Combine ----");
p1.printDetails();
