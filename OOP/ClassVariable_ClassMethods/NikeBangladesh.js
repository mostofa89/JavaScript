class NikeBangladesh {
    static total_stock = { 'Air Jordan': 0, 'Cortez': 0, 'Zoom Kobe': 0 };
    static branch = [];
    static sold = 0;

    constructor(outlet) {
        this.outlet = outlet;
        this.branch_stock = { 'Air Jordan': 0, 'Cortez': 0, 'Zoom Kobe': 0 };

        NikeBangladesh.branch.push(outlet);
    }

    static status() {
        console.log(`Nike Bangladesh Status:
Total Stock: ${JSON.stringify(NikeBangladesh.total_stock)}
Total Sold: ${NikeBangladesh.sold}
Branches: ${NikeBangladesh.branch.join(", ")}`);

    }


    details() {
        console.log(`Nike Outlet: ${this.outlet}
Stock: ${JSON.stringify(this.branch_stock)}`);

    }


    restockProducts(newStock) {
        for (let [shoe, quantity] of Object.entries(newStock)) {
            if (shoe in this.branch_stock) {
                this.branch_stock[shoe] += quantity;
                NikeBangladesh.total_stock[shoe] += quantity;

            } else {
                this.branch_stock[shoe] = quantity;

            }
        }
    }


    productSold(soldItems) {
        for (let [shoe, quantity] of Object.entries(soldItems)) {
            if (shoe in this.branch_stock && this.branch_stock[shoe] >= quantity) {
                this.branch_stock[shoe] -= quantity;
                NikeBangladesh.total_stock[shoe] -= quantity;
                NikeBangladesh.sold += quantity;

            } else {
                console.log(`Insufficient stock of ${shoe} at ${this.outlet} outlet.`);

            }
        }
    }

}



// Example Usage:
console.log("xxxxxxxxxxxxxx1xxxxxxxxxxxxxxxx");
NikeBangladesh.status();

const dhaka = new NikeBangladesh("Dhaka Banani");
const chittagong = new NikeBangladesh("Chittagong GEC");

console.log("xxxxxxxxxxxxxx2xxxxxxxxxxxxxxxx");
dhaka.details();

console.log("xxxxxxxxxxxxxx3xxxxxxxxxxxxxxxx");
chittagong.details();

console.log("xxxxxxxxxxxxxx4xxxxxxxxxxxxxxxx");
dhaka.restockProducts({
    "Air Jordan": 1200,
    "Cortez": 200,
    "Zoom Kobe": 200
});

chittagong.restockProducts({
    "Air Jordan": 1000,
    "Cortez": 250,
    "Zoom Kobe": 100
});

console.log("xxxxxxxxxxxxxx5xxxxxxxxxxxxxxxx");
NikeBangladesh.status();

console.log("xxxxxxxxxxxxxx6xxxxxxxxxxxxxxxx");
dhaka.productSold({
    "Air Jordan": 760,
    "Cortez": 90
});

chittagong.productSold({
    "Air Jordan": 520,
    "Zoom Kobe": 70
});

console.log("xxxxxxxxxxxxxx7xxxxxxxxxxxxxxxx");
NikeBangladesh.status();
console.log("xxxxxxxxxxxxxx8xxxxxxxxxxxxxxxx");


    