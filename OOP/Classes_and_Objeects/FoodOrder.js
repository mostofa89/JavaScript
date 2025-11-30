class Order {
    
    constructor(menu, order_str){
        this.items = order_str.split(',').map(item => item.trim());
        this.orderList = [];

        for (let item of this.items) {
            const [item_name, quantity_str] = item.split('-');
            let quantity = parseInt(quantity_str);
            let price = menu[item_name] * quantity;
            this.orderList.push(item_name, );
            this.orderList.push(quantity);
            this.orderList.push(price);


        }
    }

}


// Driver code
const menu = {
    Chicken_Cheeseburger: 249,
    Mega_Cheeseburger: 289,
    Fries: 139,
    Hot_Wings: 99,
    Rice_Bowl: 299,
    Soft_Drinks: 50
};

// Assuming Order class gives the same "items" structure as Python
const order1 = new Order(menu, "Chicken_Cheeseburger-2, Fries-3, Soft_Drinks-3");

console.log(order1.items);
console.log("");

console.log("-".repeat(35));
console.log("Item                 x Qty :   Price");
console.log("--------------         ---     -------");

let index = 0;
let total = 0;

while (index < order1.orderList.length) {
    const item = order1.orderList[index];
    const quantity = order1.orderList[index + 1];
    const price = order1.orderList[index + 2];

    console.log(
        `${item.padEnd(20)} x ${String(quantity).padStart(2)} :   ${price}`
    );

    total += price;
    index += 3;
}

console.log("-".repeat(35));
console.log(`Total:                       ${total}`);
console.log("-".repeat(35));
